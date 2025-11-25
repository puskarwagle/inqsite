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

console.log('=== SRCSET REMOVAL SCRIPT (ALL COMPONENTS) ===\n');
console.log(`Processing ${svelteFiles.length} Svelte files...\n`);

let totalFilesModified = 0;
let totalSrcsetRemoved = 0;

svelteFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    let fileSrcsetCount = 0;
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
                    fileSrcsetCount++;
                    console.log(`  ${file.replace(componentsDir + '/', '')}:${i + 1} - single-line srcset`);
                    continue;
                }
            }

            console.log(`  ${file.replace(componentsDir + '/', '')}:${i + 1}-`, 'multi-line srcset started');
            continue;
        }

        // If we're inside a srcset, keep removing lines until we find the closing quote
        if (insideSrcset) {
            // Check if this line contains the closing quote for srcset
            if (line.includes('"')) {
                insideSrcset = false;
                fileSrcsetCount++;
                console.log(`    └─ finished at line ${i + 1}`);
                continue;
            }
            // Still inside srcset, skip this line
            continue;
        }

        newLines.push(line);
    }

    if (fileSrcsetCount > 0) {
        totalFilesModified++;
        totalSrcsetRemoved += fileSrcsetCount;
        // Write the modified content back to the file
        fs.writeFileSync(file, newLines.join('\n'), 'utf-8');
    }
});

console.log('\n=== REMOVAL COMPLETE ===');
console.log(`Files modified: ${totalFilesModified}`);
console.log(`Total srcset attributes removed: ${totalSrcsetRemoved}`);
