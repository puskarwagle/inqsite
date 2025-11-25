#!/usr/bin/env node

import fs from 'fs';

const file = 'src/lib/components/home/HomeF.svelte';

console.log('=== SRCSET REMOVAL SCRIPT (Single File Test) ===\n');
console.log(`Processing: ${file}\n`);

const content = fs.readFileSync(file, 'utf-8');
const lines = content.split('\n');

let totalSrcsetRemoved = 0;
const newLines = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this line contains srcset attribute
    if (/^\s*srcset\s*=/.test(line)) {
        totalSrcsetRemoved++;
        console.log(`  Removing line ${i + 1}: ${line.trim().substring(0, 80)}...`);
        // Skip this line (don't add it to newLines)
        continue;
    }

    newLines.push(line);
}

if (totalSrcsetRemoved > 0) {
    // Write the modified content back to the file
    fs.writeFileSync(file, newLines.join('\n'), 'utf-8');
    console.log(`\n✓ Removed ${totalSrcsetRemoved} srcset line(s) from ${file}`);
} else {
    console.log(`\nNo srcset attributes found in ${file}`);
}
