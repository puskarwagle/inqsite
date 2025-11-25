#!/usr/bin/env node

import fs from 'fs';

const file = 'src/lib/components/home/HomeG.svelte';

console.log('=== SRCSET REMOVAL SCRIPT (Improved - Multi-line Support) ===\n');
console.log(`Processing: ${file}\n`);

const content = fs.readFileSync(file, 'utf-8');
const lines = content.split('\n');

let totalSrcsetRemoved = 0;
const newLines = [];
let insideSrcset = false;
let srcsetStartLine = -1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this line starts a srcset attribute
    if (/^\s*srcset\s*=/.test(line)) {
        insideSrcset = true;
        srcsetStartLine = i + 1;

        // Check if srcset ends on the same line (e.g., srcset="...")
        if (line.includes('"') && line.lastIndexOf('"') > line.indexOf('srcset')) {
            // Single line srcset
            const quoteCount = (line.match(/"/g) || []).length;
            if (quoteCount >= 2) {
                // Complete srcset on one line
                insideSrcset = false;
                totalSrcsetRemoved++;
                console.log(`  Removing single-line srcset at line ${i + 1}`);
                continue;
            }
        }

        console.log(`  Started removing multi-line srcset at line ${i + 1}`);
        continue;
    }

    // If we're inside a srcset, keep removing lines until we find the closing quote
    if (insideSrcset) {
        // Check if this line contains the closing quote for srcset
        if (line.includes('"')) {
            insideSrcset = false;
            totalSrcsetRemoved++;
            console.log(`  Finished removing multi-line srcset (lines ${srcsetStartLine}-${i + 1})`);
            continue;
        }
        // Still inside srcset, skip this line
        continue;
    }

    newLines.push(line);
}

if (totalSrcsetRemoved > 0) {
    // Write the modified content back to the file
    fs.writeFileSync(file, newLines.join('\n'), 'utf-8');
    console.log(`\n✓ Removed ${totalSrcsetRemoved} srcset attribute(s) from ${file}`);
} else {
    console.log(`\nNo srcset attributes found in ${file}`);
}

console.log('\n=== TEST COMPLETE ===');
