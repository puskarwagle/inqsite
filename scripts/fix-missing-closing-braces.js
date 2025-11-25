#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/lib/components');

/**
 * Fix missing closing braces in getText calls
 * Replace getText(...)< with getText(...)}<
 */
function fixMissingBraces(code) {
	// Find patterns like getText(...))< (where ( is any opening tag)
	// and replace with getText(...))}<
	return code.replace(/getText\(([^)]+)\)(<)/g, 'getText($1)}$2');
}

/**
 * Process a file
 */
function processFile(filePath) {
	const code = fs.readFileSync(filePath, 'utf-8');
	const newCode = fixMissingBraces(code);

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
	console.log('🔧 Fixing missing closing braces...\n');

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
