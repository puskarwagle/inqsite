#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const componentsDir = 'src/lib/components';

// Find all .svelte files recursively
function findSvelteFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            files = files.concat(findSvelteFiles(fullPath));
        } else if (item.name.endsWith('.svelte')) {
            files.push(fullPath);
        }
    }
    return files;
}

const svelteFiles = findSvelteFiles(componentsDir);

console.log('=== IMAGE ELEMENT ANALYSIS REPORT ===\n');
console.log(`Total Svelte files found: ${svelteFiles.length}\n`);

let totalImgElements = 0;
let imgWithSrcset = 0;
let singleLineImg = 0;
let multiLineImg = 0;
let multiLineSrcset = 0;

const results = [];

svelteFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    // Find all img tags (including multiline)
    const imgRegex = /<img[\s\S]*?>/g;
    const matches = content.matchAll(imgRegex);

    for (const match of matches) {
        totalImgElements++;
        const imgTag = match[0];
        const startPos = match.index;

        // Find line number
        const beforeMatch = content.substring(0, startPos);
        const lineNumber = beforeMatch.split('\n').length;

        // Check if img tag is single or multi-line
        const isSingleLine = !imgTag.includes('\n');
        if (isSingleLine) {
            singleLineImg++;
        } else {
            multiLineImg++;
        }

        // Check for srcset
        const hasSrcset = /srcset\s*=/.test(imgTag);

        if (hasSrcset) {
            imgWithSrcset++;

            // Check if srcset is on its own line
            const srcsetMatch = imgTag.match(/\n\s*srcset\s*=/);
            const isSrcsetMultiline = srcsetMatch !== null;

            if (isSrcsetMultiline) {
                multiLineSrcset++;
            }

            results.push({
                file: file.replace(componentsDir + '/', ''),
                lineNumber,
                isSingleLine,
                isSrcsetMultiline,
                imgTag: imgTag.substring(0, 100) + (imgTag.length > 100 ? '...' : '')
            });
        }
    }
});

console.log('=== SUMMARY ===');
console.log(`Total <img> elements: ${totalImgElements}`);
console.log(`Images with srcset: ${imgWithSrcset}`);
console.log(`Single-line <img> tags: ${singleLineImg}`);
console.log(`Multi-line <img> tags: ${multiLineImg}`);
console.log(`\n=== SRCSET BREAKDOWN ===`);
console.log(`Images with srcset on same line as other attributes: ${imgWithSrcset - multiLineSrcset}`);
console.log(`Images with srcset on its own line: ${multiLineSrcset}`);

if (results.length > 0) {
    console.log('\n=== DETAILED FINDINGS ===');
    console.log('(Images with srcset attribute)\n');

    results.forEach((result, idx) => {
        console.log(`[${idx + 1}] ${result.file}:${result.lineNumber}`);
        console.log(`    Structure: ${result.isSingleLine ? 'SINGLE-LINE' : 'MULTI-LINE'}`);
        console.log(`    Srcset: ${result.isSrcsetMultiline ? 'ON OWN LINE' : 'INLINE WITH OTHER ATTRS'}`);
        console.log(`    Preview: ${result.imgTag.replace(/\n/g, ' ')}`);
        console.log('');
    });
} else {
    console.log('\nNo images with srcset found!');
}

console.log('\n=== ANALYSIS COMPLETE ===');
