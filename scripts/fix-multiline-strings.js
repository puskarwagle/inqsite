#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/lib/components');

/**
 * Fix multiline strings in getText calls
 * Converts getText('key', 'multiline...') to getText('key', `multiline...`)
 */
function fixMultilineStrings(code) {
	let modifiedCode = code;
	const replacements = [];

	// Find all getText calls with single-quoted fallback values
	// Pattern: getText('key', '...')
	const getTextRegex = /getText\('([^']+)',\s*'((?:[^'\\]|\\.)*)'\)/gs;

	let match;
	const allMatches = [];

	// Collect all matches first
	while ((match = getTextRegex.exec(code)) !== null) {
		allMatches.push({
			fullMatch: match[0],
			key: match[1],
			value: match[2],
			index: match.index,
			length: match[0].length
		});
	}

	// Process matches in reverse order
	allMatches.reverse();

	for (const m of allMatches) {
		const value = m.value;

		// Check if value contains newlines or is multiline (has unescaped newlines)
		// The regex above doesn't capture newlines properly, so let's extract it manually
		const startQuote = code.indexOf("'", m.index + `getText('${m.key}', `.length);
		let endQuote = startQuote + 1;
		let depth = 1;
		let escaped = false;

		// Find the matching closing quote, accounting for escapes
		while (depth > 0 && endQuote < code.length) {
			const char = code[endQuote];

			if (escaped) {
				escaped = false;
			} else if (char === '\\') {
				escaped = true;
			} else if (char === "'") {
				depth--;
				if (depth === 0) break;
			}

			endQuote++;
		}

		if (depth !== 0) {
			// Couldn't find closing quote - this is likely the broken case
			// Try to find the closing )
			const closeParen = code.indexOf(')', m.index);
			if (closeParen === -1) continue;

			// Extract the actual value including newlines
			const actualValue = code.substring(startQuote + 1, closeParen);

			// Check if it contains newlines
			if (!actualValue.includes('\n')) continue;

			// Collapse whitespace and newlines into single spaces
			const collapsedValue = actualValue
				.replace(/\s+/g, ' ')  // Replace all whitespace (including newlines) with single space
				.trim();  // Trim leading/trailing whitespace

			// Escape backticks and template expressions (don't need to escape backslashes since we're using template literals)
			const escapedValue = collapsedValue
				.replace(/`/g, '\\`')     // Escape backticks
				.replace(/\$\{/g, '\\${'); // Escape template expressions

			// Create the replacement
			const replacement = `getText('${m.key}', \`${escapedValue}\`)`;

			// Find the full getText call including the broken closing
			const fullCallStart = m.index;
			const fullCallEnd = closeParen + 1;
			const fullCall = code.substring(fullCallStart, fullCallEnd);

			// Apply replacement
			const before = modifiedCode.substring(0, fullCallStart);
			const after = modifiedCode.substring(fullCallEnd);
			modifiedCode = before + replacement + after;

			replacements.push({
				key: m.key,
				line: code.substring(0, m.index).split('\n').length
			});
		} else {
			// Found closing quote - check if value contains newlines anyway
			const actualValue = code.substring(startQuote + 1, endQuote);

			if (!actualValue.includes('\n')) continue;

			// Collapse whitespace and newlines into single spaces
			const collapsedValue = actualValue
				.replace(/\s+/g, ' ')  // Replace all whitespace (including newlines) with single space
				.trim();  // Trim leading/trailing whitespace

			// Escape backticks and template expressions
			const escapedValue = collapsedValue
				.replace(/`/g, '\\`')     // Escape backticks
				.replace(/\$\{/g, '\\${'); // Escape template expressions

			// Create the replacement
			const replacement = `getText('${m.key}', \`${escapedValue}\`)`;

			// Find the full getText call
			const fullCallStart = m.index;
			const fullCallEnd = code.indexOf(')', endQuote) + 1;

			// Apply replacement
			const before = modifiedCode.substring(0, fullCallStart);
			const after = modifiedCode.substring(fullCallEnd);
			modifiedCode = before + replacement + after;

			replacements.push({
				key: m.key,
				line: code.substring(0, m.index).split('\n').length
			});
		}
	}

	return { code: modifiedCode, replacements };
}

/**
 * Process a component file
 */
function processFile(filePath) {
	const relativePath = path.relative(PROJECT_ROOT, filePath);

	// Read file
	const code = fs.readFileSync(filePath, 'utf-8');

	// Fix multiline strings
	const result = fixMultilineStrings(code);

	if (result.replacements.length === 0) {
		return null;
	}

	// Write back
	fs.writeFileSync(filePath, result.code);

	return {
		path: relativePath,
		count: result.replacements.length,
		replacements: result.replacements
	};
}

/**
 * Find all component files
 */
function findComponentFiles() {
	const files = [];

	function walk(dir) {
		const items = fs.readdirSync(dir);

		for (const item of items) {
			const fullPath = path.join(dir, item);
			const stat = fs.statSync(fullPath);

			if (stat.isDirectory()) {
				walk(fullPath);
			} else if (item.endsWith('.svelte')) {
				files.push(fullPath);
			}
		}
	}

	walk(COMPONENTS_DIR);
	return files;
}

/**
 * Main
 */
function main() {
	console.log('🔧 Fixing multiline strings in getText calls...\n');

	const files = findComponentFiles();
	console.log(`Found ${files.length} component files\n`);

	let processedCount = 0;
	let totalReplacements = 0;

	for (const file of files) {
		const result = processFile(file);

		if (result) {
			processedCount++;
			totalReplacements += result.count;
			console.log(`✓ ${result.path} (${result.count} fixes)`);
		}
	}

	console.log(`\n✅ Fixed ${totalReplacements} multiline strings in ${processedCount} components\n`);
}

main();
