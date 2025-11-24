#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/lib/components');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'static/content');

/**
 * Generate semantic key names based on content
 */
function generateSemanticKey(text, tag, counter, context = '') {
	// Clean and normalize text for key generation
	const cleaned = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
	const words = cleaned.split(/\s+/).filter(w => w.length > 0);

	// Common semantic patterns
	if (words.length === 0) return `${tag}_${counter}`;

	// Generate meaningful key from first few words
	const keyWords = words.slice(0, 3).join('_');

	// Add context prefix if available
	if (context) {
		return `${context}_${keyWords}`;
	}

	// Try to infer context from content
	if (tag === 'h1') return 'hero_heading';
	if (tag === 'h2' && counter === 1) return 'section_heading';
	if (tag === 'h3' && counter === 1) return 'subsection_heading';

	if (words.includes('get') && words.includes('started')) return 'button_get_started';
	if (words.includes('watch') && words.includes('video')) return 'button_watch_video';
	if (words.includes('learn') && words.includes('more')) return 'button_learn_more';
	if (words.includes('contact')) return 'button_contact';
	if (words.includes('read') && words.includes('more')) return 'link_read_more';

	// Fallback to descriptive key
	return keyWords || `${tag}_${counter}`;
}

/**
 * Check if text looks like a counter/animation number
 */
function isCounterNumber(text) {
	// Single digit or K/% suffix numbers
	if (/^[0-9]$/.test(text)) return true;
	if (/^[0-9]+[KM%]?$/.test(text) && text.length <= 4) return true;
	return false;
}

/**
 * Extract text content from HTML string
 */
function extractTextContent(html, componentName) {
	const content = {
		componentName,
		lastModified: new Date().toISOString(),
		texts: {},
		images: {},
		links: {}
	};

	let textCounter = 1;
	let imageCounter = 1;
	let linkCounter = 1;
	const seenTexts = new Set();

	// Extract headings (h1-h6) with semantic naming
	const headingRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gis;
	let match;
	const headingCounters = { h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 };

	while ((match = headingRegex.exec(html)) !== null) {
		const tag = match[1];
		const text = match[2]
			.replace(/<[^>]+>/g, '')
			.replace(/\s+/g, ' ')
			.trim();

		if (text && text.length > 0 && !seenTexts.has(text) && !isCounterNumber(text)) {
			const key = generateSemanticKey(text, tag, headingCounters[tag]);
			content.texts[key] = text;
			headingCounters[tag]++;
			seenTexts.add(text);
		}
	}

	// Extract paragraphs
	const paragraphRegex = /<p[^>]*>(.*?)<\/p>/gis;
	let pCounter = 1;
	while ((match = paragraphRegex.exec(html)) !== null) {
		const text = match[1]
			.replace(/<[^>]+>/g, '')
			.replace(/\s+/g, ' ')
			.trim();

		if (text && text.length > 0 && !seenTexts.has(text) && !isCounterNumber(text)) {
			const key = generateSemanticKey(text, 'paragraph', pCounter);
			content.texts[key] = text;
			pCounter++;
			seenTexts.add(text);
		}
	}

	// Extract button text (more specific matching)
	const buttonRegex = /<(?:button|a)[^>]*class="[^"]*(?:button|btn)[^"]*"[^>]*>(.*?)<\/(?:button|a)>/gis;
	let btnCounter = 1;
	while ((match = buttonRegex.exec(html)) !== null) {
		const text = match[1]
			.replace(/<[^>]+>/g, '')
			.replace(/\s+/g, ' ')
			.trim();

		if (text && text.length > 0 && !seenTexts.has(text) && !isCounterNumber(text)) {
			const key = generateSemanticKey(text, 'button', btnCounter);
			content.texts[key] = text;
			btnCounter++;
			seenTexts.add(text);
		}
	}

	// Extract meaningful div text (skip counter animations)
	const divRegex = /<div[^>]*class="[^"]*(?:rt-text-style|rt-button-text|rt-dropdown-link|rt-menu-font|rt-contact-text)[^"]*"[^>]*>(.*?)<\/div>/gis;
	let divCounter = 1;
	while ((match = divRegex.exec(html)) !== null) {
		const text = match[1]
			.replace(/<[^>]+>/g, '')
			.replace(/\s+/g, ' ')
			.trim();

		// Skip counter numbers, empty text, and duplicates
		if (text && text.length > 0 && !seenTexts.has(text) && !isCounterNumber(text)) {
			const key = generateSemanticKey(text, 'text', divCounter);
			content.texts[key] = text;
			divCounter++;
			seenTexts.add(text);
		}
	}

	// Extract images with src and alt
	const imageRegex = /<img[^>]*src=["']([^"']+)["'][^>]*(?:alt=["']([^"']+)["'])?[^>]*>/gi;
	const seenImages = new Set();

	while ((match = imageRegex.exec(html)) !== null) {
		const url = match[1];
		const alt = match[2] || '';

		// Skip duplicate images and tiny icons
		if (seenImages.has(url)) continue;
		seenImages.add(url);

		// Generate semantic key from alt text or URL
		let key = `image_${imageCounter}`;
		if (alt) {
			const altKey = alt.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 30);
			key = altKey || key;
		}

		content.images[key] = { url, alt };
		imageCounter++;
	}

	// Extract links (a tags) - better handling
	const linkRegex = /<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gis;
	const seenLinks = new Set();

	while ((match = linkRegex.exec(html)) !== null) {
		const href = match[1];
		const rawText = match[2];

		// Extract only direct text, ignore nested HTML
		const text = rawText
			.replace(/<(?:img|svg|div|span)[^>]*>.*?<\/(?:img|svg|div|span)>/gis, '') // Remove nested tags
			.replace(/<[^>]+>/g, ' ') // Remove remaining tags
			.replace(/\s+/g, ' ')
			.trim();

		// Skip empty, duplicate, or icon-only links
		if (!text || text.length < 2 || seenLinks.has(href)) continue;
		seenLinks.add(href);

		if (href !== '#') {
			// Generate semantic key
			let key = generateSemanticKey(text, 'link', linkCounter);

			// Common patterns
			if (href.includes('mailto:')) key = 'email_link';
			else if (href.includes('tel:')) key = 'phone_link';
			else if (href.includes('facebook')) key = 'social_facebook';
			else if (href.includes('twitter') || href.includes('x.com')) key = 'social_twitter';
			else if (href.includes('linkedin')) key = 'social_linkedin';
			else if (href.includes('instagram')) key = 'social_instagram';
			else if (text.toLowerCase().includes('home')) key = 'link_home';
			else if (text.toLowerCase().includes('about')) key = 'link_about';
			else if (text.toLowerCase().includes('contact')) key = 'link_contact';
			else if (text.toLowerCase().includes('service')) key = 'link_service';

			content.links[key] = { href, text };
			linkCounter++;
		}
	}

	return content;
}

/**
 * Process a single component file
 */
function processComponent(componentPath, componentName) {
	console.log(`\n📄 Processing: ${componentName}`);

	const html = fs.readFileSync(componentPath, 'utf-8');
	const content = extractTextContent(html, componentName);

	// Count extracted items
	const textCount = Object.keys(content.texts).length;
	const imageCount = Object.keys(content.images).length;
	const linkCount = Object.keys(content.links).length;

	console.log(`   ✓ Extracted ${textCount} text items`);
	console.log(`   ✓ Extracted ${imageCount} images`);
	console.log(`   ✓ Extracted ${linkCount} links`);

	// Write JSON file
	const outputPath = path.join(OUTPUT_DIR, `${componentName}.json`);
	fs.writeFileSync(outputPath, JSON.stringify(content, null, 2));
	console.log(`   ✓ Saved to ${outputPath}`);

	return content;
}

/**
 * Main execution
 */
function main() {
	const args = process.argv.slice(2);

	console.log('🚀 Content Extraction Script (Enhanced)\n');

	// Ensure output directory exists
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
		console.log(`📁 Created output directory: ${OUTPUT_DIR}\n`);
	}

	if (args.length === 0) {
		console.log('❌ Please specify components to extract.');
		console.log('Usage: node extract-content.js <component1> <component2> ...');
		console.log('Example: node extract-content.js HomeA Footer AboutA');
		process.exit(1);
	}

	const results = [];

	for (const componentName of args) {
		// Try different possible paths
		const possiblePaths = [
			path.join(COMPONENTS_DIR, 'home', `${componentName}.svelte`),
			path.join(COMPONENTS_DIR, 'shared', `${componentName}.svelte`),
			path.join(COMPONENTS_DIR, 'about', `${componentName}.svelte`),
			path.join(COMPONENTS_DIR, 'team', `${componentName}.svelte`),
			path.join(COMPONENTS_DIR, 'contact', `${componentName}.svelte`),
			path.join(COMPONENTS_DIR, 'pricing', `${componentName}.svelte`),
			path.join(COMPONENTS_DIR, 'service-one', `${componentName}.svelte`),
			path.join(COMPONENTS_DIR, 'service-two', `${componentName}.svelte`),
			path.join(COMPONENTS_DIR, 'home-one', `${componentName}.svelte`),
			path.join(COMPONENTS_DIR, 'home-two', `${componentName}.svelte`)
		];

		let found = false;
		for (const componentPath of possiblePaths) {
			if (fs.existsSync(componentPath)) {
				const content = processComponent(componentPath, componentName);
				results.push({ componentName, content });
				found = true;
				break;
			}
		}

		if (!found) {
			console.log(`\n⚠️  Component not found: ${componentName}`);
		}
	}

	console.log('\n✅ Extraction complete!\n');
	console.log('📊 Summary:');
	results.forEach(({ componentName, content }) => {
		const total = Object.keys(content.texts).length +
		              Object.keys(content.images).length +
		              Object.keys(content.links).length;
		console.log(`   ${componentName}: ${total} editable items`);
	});
	console.log('\n📂 JSON files saved to: static/content/\n');
}

main();
