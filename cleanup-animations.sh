#!/bin/bash

# Animation cleanup automation script
# Removes data-w-id attributes from all Svelte components

echo "🧹 Starting animation cleanup..."

# Backup
echo "📦 Creating backup..."
tar -czf components-backup-$(date +%Y%m%d-%H%M%S).tar.gz src/lib/components/

# Remove data-w-id attributes
echo "🗑️  Removing data-w-id attributes..."
find src/lib/components -name "*.svelte" -type f -exec sed -i 's/ data-w-id="[^"]*"//g' {} \;

# Count removals
TOTAL=$(find src/lib/components -name "*.svelte" -type f | wc -l)

echo "✅ Processed $TOTAL components"
echo "📝 Review changes before committing"
echo "💡 To restore: tar -xzf components-backup-*.tar.gz"
