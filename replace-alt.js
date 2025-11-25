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

console.log('=== ALT ATTRIBUTE REPLACEMENT SCRIPT ===\n');
console.log(`Processing ${svelteFiles.length} Svelte files...\n`);

let totalFilesModified = 0;
let totalAltsReplaced = 0;

svelteFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');

    // Get component name from file path (e.g., HomeG.svelte -> HomeG)
    const componentName = path.basename(file, '.svelte');

    // Find all <img> tags and their alt attributes
    let modified = false;
    let newContent = content;

    // Match alt attributes that are either:
    // 1. alt={getText(...)} or alt={getImage(...).alt || ...}
    // 2. alt="some static text"
    // Replace with alt="ComponentName"

    const altPatterns = [
        // Match: alt={getImage('key').alt || getText('key', 'fallback')}
        /alt=\{getImage\([^}]+\|\|[^}]+\}/g,
        // Match: alt={getText('key', 'fallback')}
        /alt=\{getText\([^)]+\)\}/g,
        // Match: alt={getImage('key').alt}
        /alt=\{getImage\([^}]+\)\.alt\}/g,
        // Match: alt="static text"
        /alt="[^"]*"/g,
        // Match: alt=''
        /alt='[^']*'/g,
        // Match: alt=""
        /alt=""/g
    ];

    // Create a unified regex to find all img tags
    const imgRegex = /<img[^>]*>/gs;

    newContent = content.replace(imgRegex, (imgTag) => {
        let modifiedTag = imgTag;
        let hadAlt = false;

        // Check if this img tag has an alt attribute
        for (const pattern of altPatterns) {
            if (pattern.test(modifiedTag)) {
                hadAlt = true;
                modifiedTag = modifiedTag.replace(pattern, `alt="${componentName}"`);
                modified = true;
                totalAltsReplaced++;
                break;
            }
        }

        return modifiedTag;
    });

    if (modified) {
        totalFilesModified++;
        fs.writeFileSync(file, newContent, 'utf-8');
        console.log(`  ✓ ${file.replace(componentsDir + '/', '')} - ${totalAltsReplaced} alt(s) replaced with "${componentName}"`);
        totalAltsReplaced = 0; // Reset for next file
    }
});

console.log('\n=== REPLACEMENT COMPLETE ===');
console.log(`Files modified: ${totalFilesModified}`);
