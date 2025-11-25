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

console.log('=== SRCSET REMOVAL SCRIPT ===\n');
console.log(`Processing ${svelteFiles.length} Svelte files...\n`);

let totalFilesModified = 0;
let totalSrcsetRemoved = 0;

svelteFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    let modified = false;
    const newLines = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check if this line contains srcset attribute
        // Match lines that have srcset= with optional whitespace
        if (/^\s*srcset\s*=/.test(line)) {
            modified = true;
            totalSrcsetRemoved++;
            console.log(`  Removing from ${file.replace(componentsDir + '/', '')}:${i + 1}`);
            // Skip this line (don't add it to newLines)
            continue;
        }

        newLines.push(line);
    }

    if (modified) {
        totalFilesModified++;
        // Write the modified content back to the file
        fs.writeFileSync(file, newLines.join('\n'), 'utf-8');
    }
});

console.log('\n=== REMOVAL COMPLETE ===');
console.log(`Files modified: ${totalFilesModified}`);
console.log(`Total srcset lines removed: ${totalSrcsetRemoved}`);
