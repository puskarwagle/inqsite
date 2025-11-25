#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/lib/components');

/**
 * Collapse multiline template literals in getText calls
 */
function collapseTemplates(code) {
	// Find getText calls with template literals that span multiple lines
	// Pattern: getText('key', `...multiline...`)
	const pattern = /getText\('([^']+)',\s*`([^`]*)`\)/gs;

	return code.replace(pattern, (match, key, value) => {
		// Check if value contains newlines
		if (!value.includes('\n')) {
			return match; // No change needed
		}

		// Collapse all whitespace (including newlines) into single spaces
		const collapsed = value.replace(/\s+/g, ' ').trim();

		return `getText('${key}', \`${collapsed}\`)`;
	});
}

/**
 * Process a file
 */
function processFile(filePath) {
	const code = fs.readFileSync(filePath, 'utf-8');
	const newCode = collapseTemplates(code);

	if (code !== newCode) {
		fs.writeFileSync(filePath, newCode);
		return true;
	}

	return false;
}

/**
 * Find all Svelte files
 */
function findSvelteFiles(dir) {
	const files = [];

	function walk(d) {
		const items = fs.readdirSync(d);
		for (const item of items) {
			const fullPath = path.join(d, item);
			const stat = fs.statSync(fullPath);
			if (stat.isDirectory()) {
				walk(fullPath);
			} else if (item.endsWith('.svelte')) {
				files.push(fullPath);
			}
		}
	}

	walk(dir);
	return files;
}

/**
 * Main
 */
function main() {
	console.log('🔧 Collapsing multiline template literals...\n');

	const files = findSvelteFiles(COMPONENTS_DIR);
	let count = 0;

	for (const file of files) {
		if (processFile(file)) {
			count++;
			const rel = path.relative(PROJECT_ROOT, file);
			console.log(`✓ ${rel}`);
		}
	}

	console.log(`\n✅ Fixed ${count} files\n`);
}

main();
