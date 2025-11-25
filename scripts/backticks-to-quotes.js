#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/lib/components');

/**
 * Convert template literals in getText calls to single-quoted strings
 */
function convertToSingleQuotes(code) {
	// Find getText calls with template literals
	// Pattern: getText('key', `value`)
	const pattern = /getText\('([^']+)',\s*`([^`]*)`\)/g;

	return code.replace(pattern, (match, key, value) => {
		// Escape single quotes in the value
		const escapedValue = value.replace(/'/g, "\\'");
		return `getText('${key}', '${escapedValue}')`;
	});
}

/**
 * Process a file
 */
function processFile(filePath) {
	const code = fs.readFileSync(filePath, 'utf-8');
	const newCode = convertToSingleQuotes(code);

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
	console.log('🔧 Converting backticks to single quotes...\n');

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
