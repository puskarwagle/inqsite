#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/lib/components');

/**
 * Find component file path
 */
function findComponentPath(componentName) {
	const folders = ['home', 'shared', 'about', 'team', 'contact', 'pricing', 'service-one', 'service-two', 'home-one', 'home-two'];

	for (const folder of folders) {
		const componentPath = path.join(COMPONENTS_DIR, folder, `${componentName}.svelte`);
		if (fs.existsSync(componentPath)) {
			return componentPath;
		}
	}

	return null;
}

/**
 * Check if text is Lorem Ipsum or placeholder text
 */
function isLoremIpsum(text) {
	const cleaned = text.toLowerCase().trim();

	// Empty or too short
	if (cleaned.length < 5) return false;

	// Skip if it contains template syntax
	if (text.includes('{getText') || text.includes('{getImage') || text.includes('{getLink')) {
		return false;
	}

	// Classic Lorem Ipsum patterns
	const loremPatterns = [
		/lorem\s+ipsum/i,
		/dolor\s+sit\s+amet/i,
		/consectetur\s+adipiscing/i,
		/elit.*proin/i,
		/sed\s+feugiat/i,
		/neque\s+magna/i,
		/ornare.*vulputate/i,
		/malesuada\s+tempor/i,
		/eget\s+auctor/i
	];

	// Common placeholder patterns
	const placeholderPatterns = [
		/your\s+name/i,
		/enter\s+your/i,
		/email.*address/i,
		/phone.*number/i,
		/^submit/i,
		/^inquire/i,
		/please\s+wait/i,
		/thank\s+you.*received/i,
		/oops.*went\s+wrong/i,
		/something\s+went\s+wrong/i,
		/i\s+agree\s+to/i,
		/terms\s+and\s+conditions/i,
		/send\s+a\s+message/i,
		/contact\s+us/i,
		/get\s+in\s+touch/i,
		/main\s+office/i,
		/phone\s+no/i
	];

	// Check for Lorem Ipsum
	if (loremPatterns.some(pattern => pattern.test(text))) {
		return true;
	}

	// Check for common placeholders
	if (placeholderPatterns.some(pattern => pattern.test(text))) {
		return true;
	}

	// Check for address-like patterns (numbers + street + city + state)
	if (/\d+\s+[a-z]+,\s*[a-z]+\s+\d{5}/i.test(text)) {
		return true;
	}

	// Check for phone number patterns
	if (/\(\d{3}\)\s*\d{3}[- ]?\d{4}/.test(text)) {
		return true;
	}

	return false;
}

/**
 * Generate semantic key from text
 */
function generateKey(text) {
	const cleaned = text.toLowerCase()
		.replace(/[^a-z0-9\s]/g, '')
		.trim();

	const words = cleaned.split(/\s+/).filter(w => w.length > 2);

	// Take first 3-4 meaningful words
	const keyWords = words.slice(0, 4).join('_');

	return keyWords || 'text_' + Math.random().toString(36).substring(7);
}

/**
 * Check if text is already wrapped in getText
 */
function isAlreadyWrapped(html, position) {
	// Look backwards for {getText
	const before = html.substring(Math.max(0, position - 100), position);
	const after = html.substring(position, Math.min(html.length, position + 100));

	// Check if we're inside a getText call
	if (before.includes('{getText') && after.includes(')}')) {
		return true;
	}

	return false;
}

/**
 * Wrap Lorem Ipsum text in getText()
 */
function wrapLoremText(componentCode, dryRun = false) {
	let modifiedCode = componentCode;
	const allReplacements = [];
	const replacements = [];

	// Track script/style sections to skip
	const skipRanges = [];
	const scriptRegex = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
	const styleRegex = /<style\b[^>]*>[\s\S]*?<\/style>/gi;

	let match;
	while ((match = scriptRegex.exec(componentCode)) !== null) {
		skipRanges.push({ start: match.index, end: match.index + match[0].length });
	}
	while ((match = styleRegex.exec(componentCode)) !== null) {
		skipRanges.push({ start: match.index, end: match.index + match[0].length });
	}

	const shouldSkipPosition = (pos) => {
		return skipRanges.some(range => pos >= range.start && pos <= range.end);
	};

	// Find all text between tags
	const textRegex = />([^<]+)</g;

	while ((match = textRegex.exec(componentCode)) !== null) {
		if (shouldSkipPosition(match.index)) continue;

		const text = match[1];
		const position = match.index;

		// Check if it's Lorem Ipsum
		if (isLoremIpsum(text)) {
			// Check if already wrapped
			if (!isAlreadyWrapped(componentCode, position)) {
				const trimmedText = text.trim();
				const key = generateKey(trimmedText);
				// Collapse whitespace (including newlines) into single spaces
				const collapsedText = text.replace(/\s+/g, ' ').trim();
				// Escape single quotes for single-quoted strings
				const escapedText = collapsedText.replace(/'/g, "\\'");
				const wrappedText = `>{getText('${key}', '${escapedText}')}<`;
				const lineNum = componentCode.substring(0, position).split('\n').length;

				allReplacements.push({
					position: match.index,
					length: match[0].length,
					replacement: wrappedText,
					text: trimmedText,
					key: key,
					line: lineNum
				});

				replacements.push({
					line: lineNum,
					key: key,
					text: trimmedText.substring(0, 60) + (trimmedText.length > 60 ? '...' : '')
				});
			}
		}
	}

	// Sort by position in reverse order (process from end to beginning)
	allReplacements.sort((a, b) => b.position - a.position);

	// Apply all replacements
	for (const repl of allReplacements) {
		const before = modifiedCode.substring(0, repl.position);
		const after = modifiedCode.substring(repl.position + repl.length);
		modifiedCode = before + repl.replacement + after;
	}

	return { code: modifiedCode, replacements };
}

/**
 * Wrap Lorem Ipsum in attributes (placeholder, value, etc.)
 */
function wrapLoremAttributes(componentCode, dryRun = false) {
	let modifiedCode = componentCode;
	const allReplacements = [];
	const replacements = [];

	// Attributes to check
	const attributes = ['placeholder', 'value', 'title', 'data-wait', 'alt'];

	// Collect all matches from all attributes
	for (const attr of attributes) {
		const attrRegex = new RegExp(`${attr}=["']([^"']+)["']`, 'gi');
		let match;

		while ((match = attrRegex.exec(componentCode)) !== null) {
			const text = match[1];

			// Skip if already wrapped
			if (text.includes('{getText') || text.includes('getImage') || text.includes('getLink')) {
				continue;
			}

			// For placeholders and values, wrap if it's user-facing text
			// Skip only if it's clearly a technical value (URLs, IDs, classes, etc.)
			const shouldWrap = (
				isLoremIpsum(text) || // Lorem or common placeholder
				(attr === 'placeholder' && text.length > 3) || // All form placeholders
				(attr === 'value' && !text.match(/^[a-z0-9_-]+$/i) && text.length > 3) || // Button values (not IDs)
				(attr === 'title' && text.length > 5) || // Tooltips
				(attr === 'data-wait' && text.length > 3) || // Loading text
				(attr === 'alt' && text.length > 3) // Image alt text
			);

			if (shouldWrap) {
				const key = generateKey(text);
				// Collapse whitespace and escape single quotes
				const collapsedText = text.replace(/\s+/g, ' ').trim();
				const escapedText = collapsedText.replace(/'/g, "\\'");
				const wrappedAttr = `${attr}={getText('${key}', '${escapedText}')}`;
				const lineNum = componentCode.substring(0, match.index).split('\n').length;

				allReplacements.push({
					position: match.index,
					length: match[0].length,
					replacement: wrappedAttr,
					text: text,
					key: key,
					attr: attr,
					line: lineNum
				});

				replacements.push({
					line: lineNum,
					key: key,
					attr: attr,
					text: text.substring(0, 50) + (text.length > 50 ? '...' : '')
				});
			}
		}
	}

	// Sort by position in reverse order (process from end to beginning)
	allReplacements.sort((a, b) => b.position - a.position);

	// Apply all replacements
	for (const repl of allReplacements) {
		const before = modifiedCode.substring(0, repl.position);
		const after = modifiedCode.substring(repl.position + repl.length);
		modifiedCode = before + repl.replacement + after;
	}

	return { code: modifiedCode, replacements };
}

/**
 * Check if component has CMS integration
 */
function hasIntegration(code) {
	return code.includes('export let content') && code.includes('getText');
}

/**
 * Add CMS integration to component if missing
 */
function addIntegration(code) {
	// Check if already has script tag
	if (code.includes('<script>')) {
		// Insert into existing script
		const scriptMatch = code.match(/<script[^>]*>/);
		if (scriptMatch) {
			const insertPos = scriptMatch.index + scriptMatch[0].length;
			const before = code.substring(0, insertPos);
			const after = code.substring(insertPos);
			return before + '\n\t// CMS Integration\n\texport let content = { texts: {}, images: {}, links: {} };\n\tconst getText = (key, fallback) => content.texts?.[key] || fallback;\n\tconst getImage = (key) => content.images?.[key] || {};\n\tconst getLink = (key) => content.links?.[key] || {};\n' + after;
		}
	}

	// No script tag, add new one
	const scriptBlock = `<script>
	// CMS Integration
	export let content = {
		texts: {},
		images: {},
		links: {}
	};

	const getText = (key, fallback) => content.texts?.[key] || fallback;
	const getImage = (key) => content.images?.[key] || {};
	const getLink = (key) => content.links?.[key] || {};
</script>

`;
	return scriptBlock + code;
}

/**
 * Process a component
 */
function processComponent(componentName, dryRun = false) {
	console.log(`\n🔄 Processing: ${componentName}`);

	// Find component
	const componentPath = findComponentPath(componentName);
	if (!componentPath) {
		console.error(`   ❌ Component not found: ${componentName}`);
		return false;
	}

	console.log(`   ✓ Found: ${componentPath}`);

	// Read component
	let code = fs.readFileSync(componentPath, 'utf-8');

	// Add integration if missing
	if (!hasIntegration(code)) {
		console.log(`   → Adding CMS integration...`);
		code = addIntegration(code);
	} else {
		console.log(`   ✓ Already has CMS integration`);
	}

	// Wrap Lorem text between tags
	console.log(`   → Wrapping Lorem Ipsum text...`);
	const textResult = wrapLoremText(code, dryRun);
	code = textResult.code;

	// Wrap Lorem in attributes
	console.log(`   → Wrapping Lorem Ipsum in attributes...`);
	const attrResult = wrapLoremAttributes(code, dryRun);
	code = attrResult.code;

	// Report
	const totalReplacements = textResult.replacements.length + attrResult.replacements.length;

	if (totalReplacements === 0) {
		console.log(`   ℹ️  No Lorem Ipsum text found to wrap`);
		return true;
	}

	console.log(`\n   📝 Wrapped ${totalReplacements} items:`);

	if (textResult.replacements.length > 0) {
		console.log(`\n   Text between tags (${textResult.replacements.length}):`);
		textResult.replacements.forEach((r, i) => {
			console.log(`      ${i + 1}. Line ${r.line}: ${r.key}`);
			console.log(`         "${r.text}"`);
		});
	}

	if (attrResult.replacements.length > 0) {
		console.log(`\n   Attributes (${attrResult.replacements.length}):`);
		attrResult.replacements.forEach((r, i) => {
			console.log(`      ${i + 1}. Line ${r.line} [${r.attr}]: ${r.key}`);
			console.log(`         "${r.text}"`);
		});
	}

	// Save
	if (!dryRun) {
		fs.writeFileSync(componentPath, code);
		console.log(`\n   ✅ Saved changes to ${componentPath}`);
	} else {
		console.log(`\n   ℹ️  DRY RUN - Not saving changes`);
	}

	return true;
}

/**
 * Main
 */
function main() {
	const args = process.argv.slice(2);

	let dryRun = false;
	let componentNames = [];

	for (const arg of args) {
		if (arg === '--dry-run') {
			dryRun = true;
		} else {
			componentNames.push(arg);
		}
	}

	console.log('🚀 Auto-Wrap Lorem Ipsum Script\n');

	if (dryRun) {
		console.log('⚠️  DRY RUN MODE - No changes will be saved\n');
	}

	if (componentNames.length === 0) {
		console.log('❌ Please specify components to process.');
		console.log('Usage: node auto-wrap-lorem.js [--dry-run] <component1> <component2> ...');
		console.log('Example: node auto-wrap-lorem.js ContactA HomeB');
		console.log('\nOptions:');
		console.log('  --dry-run    Show what would be changed without saving');
		process.exit(1);
	}

	let successCount = 0;

	for (const componentName of componentNames) {
		const success = processComponent(componentName, dryRun);
		if (success) successCount++;
	}

	console.log(`\n✅ Complete! Processed ${successCount}/${componentNames.length} components\n`);
}

main();
