#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/lib/components');
const CONTENT_DIR = path.join(PROJECT_ROOT, 'static/content');

/**
 * Check if component already has CMS integration
 */
function isIntegrated(componentCode) {
	return componentCode.includes('export let content') &&
	       componentCode.includes('getText') &&
	       componentCode.includes('fallback');
}

/**
 * Escape special regex characters
 */
function escapeRegex(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

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
 * Load component's JSON content data
 */
function loadContentData(componentName) {
	const jsonPath = path.join(CONTENT_DIR, `${componentName}.json`);
	if (!fs.existsSync(jsonPath)) {
		console.error(`   ✗ JSON file not found: ${jsonPath}`);
		return null;
	}
	return JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
}

/**
 * Add CMS integration script block to component
 */
function addScriptBlock(componentCode) {
	const scriptBlock = `<script>
	// Accept content from parent page
	export let content = {
		texts: {},
		images: {},
		links: {}
	};

	// Helper function to get content with fallback
	const getText = (key, fallback) => content.texts?.[key] || fallback;
	const getImage = (key) => content.images?.[key] || {};
	const getLink = (key) => content.links?.[key] || {};
</script>

`;

	// If there's already a script tag, insert our code inside it
	if (componentCode.includes('<script>')) {
		// Find the first <script> tag and insert our code after it
		const scriptMatch = componentCode.match(/<script[^>]*>/);
		if (scriptMatch) {
			const insertPos = scriptMatch.index + scriptMatch[0].length;
			const before = componentCode.substring(0, insertPos);
			const after = componentCode.substring(insertPos);
			return before + '\n\t// CMS Integration\n\texport let content = { texts: {}, images: {}, links: {} };\n\tconst getText = (key, fallback) => content.texts?.[key] || fallback;\n\tconst getImage = (key) => content.images?.[key] || {};\n\tconst getLink = (key) => content.links?.[key] || {};\n' + after;
		}
	}

	// No script tag found, add at the beginning
	return scriptBlock + componentCode;
}

/**
 * Integrate text content into component
 */
function integrateTexts(componentCode, contentData) {
	let modifiedCode = componentCode;
	let replacementCount = 0;

	for (const [key, value] of Object.entries(contentData.texts || {})) {
		// Skip empty values
		if (!value || value.trim() === '') continue;

		// Escape special characters for regex
		const escapedValue = escapeRegex(value);

		// Replace in text nodes (between tags)
		// Pattern: >value< (avoiding attributes)
		const textNodeRegex = new RegExp(`(>)\\s*${escapedValue}\\s*(<)`, 'g');
		const textReplacement = `$1{getText('${key}', '${value.replace(/'/g, "\\'")}\')}$2`;

		const beforeReplace = modifiedCode;
		modifiedCode = modifiedCode.replace(textNodeRegex, textReplacement);

		if (modifiedCode !== beforeReplace) {
			replacementCount++;
			console.log(`   → Replaced text: "${key}" (${value.substring(0, 40)}...)`);
		}
	}

	return { code: modifiedCode, count: replacementCount };
}

/**
 * Integrate image URLs into component
 */
function integrateImages(componentCode, contentData) {
	let modifiedCode = componentCode;
	let replacementCount = 0;

	for (const [key, imgData] of Object.entries(contentData.images || {})) {
		if (!imgData.url) continue;

		const escapedUrl = escapeRegex(imgData.url);

		// Replace src="url" with src={getImage('key').url || 'url'}
		// Match: src="url" or src='url' (not already using getImage)
		const srcRegex = new RegExp(`src=["']${escapedUrl}["']`, 'g');
		const srcReplacement = `src={getImage('${key}').url || '${imgData.url.replace(/'/g, "\\'")}'}`;

		const beforeReplace = modifiedCode;
		modifiedCode = modifiedCode.replace(srcRegex, srcReplacement);

		if (modifiedCode !== beforeReplace) {
			replacementCount++;
			console.log(`   → Replaced image URL: "${key}"`);
		}

		// Also replace alt text if it exists
		if (imgData.alt && imgData.alt.trim() !== '') {
			const escapedAlt = escapeRegex(imgData.alt);
			const altRegex = new RegExp(`alt=["']${escapedAlt}["']`, 'g');
			const altReplacement = `alt={getImage('${key}').alt || '${imgData.alt.replace(/'/g, "\\'")}'}`;

			modifiedCode = modifiedCode.replace(altRegex, altReplacement);
		}
	}

	return { code: modifiedCode, count: replacementCount };
}

/**
 * Integrate links into component
 */
function integrateLinks(componentCode, contentData) {
	let modifiedCode = componentCode;
	let replacementCount = 0;

	for (const [key, linkData] of Object.entries(contentData.links || {})) {
		// Replace href
		if (linkData.href) {
			const escapedHref = escapeRegex(linkData.href);
			const hrefRegex = new RegExp(`href=["']${escapedHref}["']`, 'g');
			const hrefReplacement = `href={getLink('${key}').href || '${linkData.href.replace(/'/g, "\\'")}'}`;

			const beforeReplace = modifiedCode;
			modifiedCode = modifiedCode.replace(hrefRegex, hrefReplacement);

			if (modifiedCode !== beforeReplace) {
				replacementCount++;
				console.log(`   → Replaced link href: "${key}"`);
			}
		}

		// Replace link text if it exists
		if (linkData.text && linkData.text.trim() !== '') {
			const escapedText = escapeRegex(linkData.text);
			// Pattern: >text< in anchor tags
			const linkTextRegex = new RegExp(`(<a[^>]*>)\\s*${escapedText}\\s*(</a>)`, 'g');
			const linkTextReplacement = `$1{getLink('${key}').text || '${linkData.text.replace(/'/g, "\\'")}'}$2`;

			modifiedCode = modifiedCode.replace(linkTextRegex, linkTextReplacement);
		}
	}

	return { code: modifiedCode, count: replacementCount };
}

/**
 * Integrate a single component
 */
function integrateComponent(componentName, dryRun = false) {
	console.log(`\n📝 Integrating: ${componentName}`);

	// Find component file
	const componentPath = findComponentPath(componentName);
	if (!componentPath) {
		console.error(`   ✗ Component file not found: ${componentName}`);
		return false;
	}

	// Read component code
	const componentCode = fs.readFileSync(componentPath, 'utf-8');

	// Check if already integrated
	if (isIntegrated(componentCode)) {
		console.log(`   ⚠️  Already integrated, skipping...`);
		return true;
	}

	// Load content data
	const contentData = loadContentData(componentName);
	if (!contentData) {
		return false;
	}

	// Add script block
	let modifiedCode = addScriptBlock(componentCode);
	console.log(`   ✓ Added CMS integration script block`);

	// Integrate texts
	const textsResult = integrateTexts(modifiedCode, contentData);
	modifiedCode = textsResult.code;

	// Integrate images
	const imagesResult = integrateImages(modifiedCode, contentData);
	modifiedCode = imagesResult.code;

	// Integrate links
	const linksResult = integrateLinks(modifiedCode, contentData);
	modifiedCode = linksResult.code;

	const totalReplacements = textsResult.count + imagesResult.count + linksResult.count;

	if (totalReplacements === 0) {
		console.log(`   ⚠️  No content replaced - check if JSON matches component HTML`);
	}

	console.log(`   ✓ Total replacements: ${totalReplacements}`);

	// Write modified code
	if (!dryRun) {
		fs.writeFileSync(componentPath, modifiedCode);
		console.log(`   ✓ Saved to ${componentPath}`);
	} else {
		console.log(`   ℹ️  Dry run - not saving changes`);
	}

	return true;
}

/**
 * Main execution
 */
function main() {
	const args = process.argv.slice(2);

	let dryRun = false;
	let componentNames = [];

	// Parse arguments
	for (const arg of args) {
		if (arg === '--dry-run') {
			dryRun = true;
		} else {
			componentNames.push(arg);
		}
	}

	console.log('🚀 Component Integration Script\n');

	if (dryRun) {
		console.log('⚠️  DRY RUN MODE - No changes will be saved\n');
	}

	if (componentNames.length === 0) {
		console.log('❌ Please specify components to integrate.');
		console.log('Usage: node integrate-component.js [--dry-run] <component1> <component2> ...');
		console.log('Example: node integrate-component.js HomeB HomeC TeamA');
		console.log('\nOptions:');
		console.log('  --dry-run    Show what would be changed without saving');
		process.exit(1);
	}

	let successCount = 0;
	let failCount = 0;

	for (const componentName of componentNames) {
		const success = integrateComponent(componentName, dryRun);
		if (success) {
			successCount++;
		} else {
			failCount++;
		}
	}

	console.log('\n✅ Integration complete!\n');
	console.log(`📊 Summary:`);
	console.log(`   ✓ Successful: ${successCount}`);
	if (failCount > 0) {
		console.log(`   ✗ Failed: ${failCount}`);
	}

	if (!dryRun) {
		console.log('\n💡 Next steps:');
		console.log('   1. Test the integrated components in dev server');
		console.log('   2. Update +page.svelte to pass content props');
		console.log('   3. Run extraction script to verify JSON is correct');
	}
}

main();
