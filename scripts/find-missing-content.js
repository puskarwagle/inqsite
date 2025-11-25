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
		console.error(`❌ JSON file not found: ${jsonPath}`);
		return null;
	}
	return JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
}

/**
 * Check if text should be ignored
 */
function shouldIgnoreText(text) {
	if (!text || text.trim() === '') return true;
	if (text.length < 3) return true; // Too short
	if (/^[0-9]+[KM%]?$/.test(text)) return true; // Counter numbers
	if (/^[\s\n\r\t]+$/.test(text)) return true; // Only whitespace
	if (text.includes('{getText') || text.includes('{getImage') || text.includes('{getLink')) return true; // Already integrated
	return false;
}

/**
 * Extract all text content from component HTML
 */
function extractAllContent(html, componentPath) {
	const content = {
		texts: [],
		images: [],
		links: [],
		attributes: []
	};

	// Split file into lines for line number tracking
	const lines = html.split('\n');

	// Find script and style tag ranges to skip
	const skipRanges = [];
	const scriptRegex = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
	const styleRegex = /<style\b[^>]*>[\s\S]*?<\/style>/gi;

	let match;
	while ((match = scriptRegex.exec(html)) !== null) {
		skipRanges.push({ start: match.index, end: match.index + match[0].length });
	}
	while ((match = styleRegex.exec(html)) !== null) {
		skipRanges.push({ start: match.index, end: match.index + match[0].length });
	}

	// Helper to check if position is in skip range
	const shouldSkipPosition = (pos) => {
		return skipRanges.some(range => pos >= range.start && pos <= range.end);
	};

	// Extract text between tags (multiline aware)
	const textRegex = />([^<]+)</gs;

	while ((match = textRegex.exec(html)) !== null) {
		// Skip if inside script or style tag
		if (shouldSkipPosition(match.index)) continue;

		const text = match[1].replace(/\s+/g, ' ').trim();
		if (shouldIgnoreText(text)) continue;

		// Find line number
		const position = match.index;
		const lineNum = html.substring(0, position).split('\n').length;

		content.texts.push({
			text,
			line: lineNum,
			type: 'tag_content'
		});
	}

	// Extract placeholder attributes
	const placeholderRegex = /placeholder=["']([^"']+)["']/gi;
	while ((match = placeholderRegex.exec(html)) !== null) {
		const text = match[1];
		if (shouldIgnoreText(text)) continue;

		const position = match.index;
		const lineNum = html.substring(0, position).split('\n').length;

		content.attributes.push({
			text,
			line: lineNum,
			type: 'placeholder',
			attribute: 'placeholder'
		});
	}

	// Extract value attributes (for buttons, inputs)
	const valueRegex = /value=["']([^"']+)["']/gi;
	while ((match = valueRegex.exec(html)) !== null) {
		const text = match[1];
		if (shouldIgnoreText(text)) continue;

		const position = match.index;
		const lineNum = html.substring(0, position).split('\n').length;

		content.attributes.push({
			text,
			line: lineNum,
			type: 'value',
			attribute: 'value'
		});
	}

	// Extract title attributes
	const titleRegex = /title=["']([^"']+)["']/gi;
	while ((match = titleRegex.exec(html)) !== null) {
		const text = match[1];
		if (shouldIgnoreText(text)) continue;

		const position = match.index;
		const lineNum = html.substring(0, position).split('\n').length;

		content.attributes.push({
			text,
			line: lineNum,
			type: 'title',
			attribute: 'title'
		});
	}

	// Extract data-wait attributes
	const dataWaitRegex = /data-wait=["']([^"']+)["']/gi;
	while ((match = dataWaitRegex.exec(html)) !== null) {
		const text = match[1];
		if (shouldIgnoreText(text)) continue;

		const position = match.index;
		const lineNum = html.substring(0, position).split('\n').length;

		content.attributes.push({
			text,
			line: lineNum,
			type: 'data-wait',
			attribute: 'data-wait'
		});
	}

	// Extract images with src and alt
	const imgRegex = /<img[^>]*>/gi;
	while ((match = imgRegex.exec(html)) !== null) {
		const imgTag = match[0];
		const position = match.index;
		const lineNum = html.substring(0, position).split('\n').length;

		// Skip if already using getImage
		if (imgTag.includes('getImage')) continue;

		// Extract src
		const srcMatch = /src=["']([^"']+)["']/i.exec(imgTag);
		const altMatch = /alt=["']([^"']*)["']/i.exec(imgTag);

		if (srcMatch) {
			content.images.push({
				src: srcMatch[1],
				alt: altMatch ? altMatch[1] : '',
				line: lineNum
			});
		}
	}

	// Extract links with href and text
	const linkRegex = /<a\b[^>]*>(.*?)<\/a>/gis;
	while ((match = linkRegex.exec(html)) !== null) {
		const linkTag = match[0];
		const linkText = match[1];
		const position = match.index;
		const lineNum = html.substring(0, position).split('\n').length;

		// Skip if already using getLink
		if (linkTag.includes('getLink')) continue;

		// Extract href
		const hrefMatch = /href=["']([^"']+)["']/i.exec(linkTag);

		// Clean link text (remove nested tags)
		const cleanedText = linkText
			.replace(/<[^>]+>/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();

		if (hrefMatch && !shouldIgnoreText(cleanedText)) {
			content.links.push({
				href: hrefMatch[1],
				text: cleanedText,
				line: lineNum
			});
		}
	}

	return content;
}

/**
 * Compare extracted content with JSON
 */
function compareContent(extracted, jsonData) {
	const missing = {
		texts: [],
		images: [],
		links: [],
		attributes: []
	};

	// Check texts
	const existingTexts = new Set(Object.values(jsonData.texts || {}));
	for (const item of extracted.texts) {
		if (!existingTexts.has(item.text)) {
			missing.texts.push(item);
		}
	}

	// Check attributes
	for (const item of extracted.attributes) {
		if (!existingTexts.has(item.text)) {
			missing.attributes.push(item);
		}
	}

	// Check images
	const existingImageUrls = new Set(
		Object.values(jsonData.images || {}).map(img => img.url)
	);
	const existingImageAlts = new Set(
		Object.values(jsonData.images || {}).map(img => img.alt).filter(Boolean)
	);

	for (const item of extracted.images) {
		const srcMissing = !existingImageUrls.has(item.src);
		const altMissing = item.alt && !existingImageAlts.has(item.alt);

		if (srcMissing || altMissing) {
			missing.images.push({
				...item,
				srcMissing,
				altMissing
			});
		}
	}

	// Check links
	const existingLinkHrefs = new Set(
		Object.values(jsonData.links || {}).map(link => link.href)
	);
	const existingLinkTexts = new Set(
		Object.values(jsonData.links || {}).map(link => link.text).filter(Boolean)
	);

	for (const item of extracted.links) {
		const hrefMissing = !existingLinkHrefs.has(item.href);
		const textMissing = !existingLinkTexts.has(item.text);

		if (hrefMissing || textMissing) {
			missing.links.push({
				...item,
				hrefMissing,
				textMissing
			});
		}
	}

	return missing;
}

/**
 * Generate report
 */
function generateReport(componentName, missing, extracted, jsonData) {
	console.log('\n' + '='.repeat(70));
	console.log(`📋 Missing Content Report: ${componentName}`);
	console.log('='.repeat(70));

	// Summary
	console.log('\n📊 Summary:');
	console.log(`   Total extracted from component: ${extracted.texts.length} texts, ${extracted.attributes.length} attributes, ${extracted.images.length} images, ${extracted.links.length} links`);
	console.log(`   Total in JSON: ${Object.keys(jsonData.texts || {}).length} texts, ${Object.keys(jsonData.images || {}).length} images, ${Object.keys(jsonData.links || {}).length} links`);
	console.log(`   Missing: ${missing.texts.length} texts, ${missing.attributes.length} attributes, ${missing.images.length} images, ${missing.links.length} links`);

	// Missing texts
	if (missing.texts.length > 0) {
		console.log('\n⚠️  Missing Texts (between tags):');
		missing.texts.forEach((item, idx) => {
			console.log(`   ${idx + 1}. Line ${item.line}: "${item.text.substring(0, 60)}${item.text.length > 60 ? '...' : ''}"`);
		});
	}

	// Missing attributes
	if (missing.attributes.length > 0) {
		console.log('\n⚠️  Missing Attributes (placeholder, value, etc.):');
		missing.attributes.forEach((item, idx) => {
			console.log(`   ${idx + 1}. Line ${item.line} [${item.attribute}]: "${item.text}"`);
		});
	}

	// Missing images
	if (missing.images.length > 0) {
		console.log('\n⚠️  Missing Images:');
		missing.images.forEach((item, idx) => {
			console.log(`   ${idx + 1}. Line ${item.line}:`);
			if (item.srcMissing) console.log(`      - src: ${item.src.substring(0, 80)}${item.src.length > 80 ? '...' : ''}`);
			if (item.altMissing) console.log(`      - alt: "${item.alt}"`);
		});
	}

	// Missing links
	if (missing.links.length > 0) {
		console.log('\n⚠️  Missing Links:');
		missing.links.forEach((item, idx) => {
			console.log(`   ${idx + 1}. Line ${item.line}:`);
			if (item.hrefMissing) console.log(`      - href: ${item.href}`);
			if (item.textMissing) console.log(`      - text: "${item.text}"`);
		});
	}

	// Success message
	const totalMissing = missing.texts.length + missing.attributes.length + missing.images.length + missing.links.length;
	if (totalMissing === 0) {
		console.log('\n✅ No missing content detected! Component is fully captured in JSON.');
	}

	console.log('\n' + '='.repeat(70) + '\n');

	return totalMissing;
}

/**
 * Main execution
 */
function main() {
	const args = process.argv.slice(2);

	if (args.length === 0) {
		console.log('❌ Please specify a component to audit.');
		console.log('Usage: node find-missing-content.js <ComponentName>');
		console.log('Example: node find-missing-content.js ContactA');
		process.exit(1);
	}

	const componentName = args[0];
	console.log(`🔍 Auditing component: ${componentName}\n`);

	// Find component file
	const componentPath = findComponentPath(componentName);
	if (!componentPath) {
		console.error(`❌ Component file not found: ${componentName}`);
		process.exit(1);
	}
	console.log(`✓ Found component: ${componentPath}`);

	// Load component HTML
	const html = fs.readFileSync(componentPath, 'utf-8');

	// Load JSON data
	const jsonData = loadContentData(componentName);
	if (!jsonData) {
		process.exit(1);
	}
	console.log(`✓ Found JSON: ${path.join(CONTENT_DIR, componentName + '.json')}`);

	// Extract all content from component
	console.log(`\n🔎 Extracting content from component...`);
	const extracted = extractAllContent(html, componentPath);

	// Compare with JSON
	console.log(`🔎 Comparing with JSON...`);
	const missing = compareContent(extracted, jsonData);

	// Generate report
	const totalMissing = generateReport(componentName, missing, extracted, jsonData);

	// Exit code
	process.exit(totalMissing > 0 ? 1 : 0);
}

main();
