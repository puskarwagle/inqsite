#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const routesDir = 'src/routes';

// Find all .svelte files recursively
function findSvelteFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            files = files.concat(findSvelteFiles(fullPath));
        } else if (item.name.endsWith('.svelte') && !item.name.startsWith('+')) {
            files.push(fullPath);
        }
    }
    return files;
}

const svelteFiles = findSvelteFiles(routesDir);

console.log('=== PROCESSING ROUTES - SRCSET & ALT REPLACEMENT ===\n');
console.log(`Found ${svelteFiles.length} component files in routes...\n`);

let totalFilesModified = 0;
let totalSrcsetRemoved = 0;
let totalAltsReplaced = 0;

svelteFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    // Get component name from file path
    const componentName = path.basename(file, '.svelte');

    // STEP 1: Remove srcset attributes
    let fileSrcsetCount = 0;
    const newLines = [];
    let insideSrcset = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (/^\s*srcset\s*=/.test(line)) {
            insideSrcset = true;

            if (line.includes('"') && line.lastIndexOf('"') > line.indexOf('srcset')) {
                const quoteCount = (line.match(/"/g) || []).length;
                if (quoteCount >= 2) {
                    insideSrcset = false;
                    fileSrcsetCount++;
                    continue;
                }
            }
            continue;
        }

        if (insideSrcset) {
            if (line.includes('"')) {
                insideSrcset = false;
                fileSrcsetCount++;
                continue;
            }
            continue;
        }

        newLines.push(line);
    }

    let newContent = newLines.join('\n');

    // STEP 2: Replace alt attributes
    const altPatterns = [
        /alt=\{getText\([^)]+\)\}/g,
        /alt=\{getImage\([^}]+\}\}/g,
        /alt="[^"]*"/g,
        /alt='[^']*'/g,
        /alt=""/g
    ];

    const imgRegex = /<img[^>]*>/gs;
    let fileAltsCount = 0;

    newContent = newContent.replace(imgRegex, (imgTag) => {
        let modifiedTag = imgTag;
        for (const pattern of altPatterns) {
            if (pattern.test(modifiedTag)) {
                modifiedTag = modifiedTag.replace(pattern, `alt="${componentName}"`);
                fileAltsCount++;
                break;
            }
        }
        return modifiedTag;
    });

    // Write if modified
    if (fileSrcsetCount > 0 || fileAltsCount > 0) {
        totalFilesModified++;
        totalSrcsetRemoved += fileSrcsetCount;
        totalAltsReplaced += fileAltsCount;
        fs.writeFileSync(file, newContent, 'utf-8');
        console.log(`  ✓ ${file.replace(routesDir + '/', '')}`);
        if (fileSrcsetCount > 0) console.log(`    - Removed ${fileSrcsetCount} srcset attribute(s)`);
        if (fileAltsCount > 0) console.log(`    - Replaced ${fileAltsCount} alt attribute(s) with "${componentName}"`);
    }
});

console.log('\n=== PROCESSING COMPLETE ===');
console.log(`Files modified: ${totalFilesModified}`);
console.log(`Total srcset removed: ${totalSrcsetRemoved}`);
console.log(`Total alts replaced: ${totalAltsReplaced}`);
