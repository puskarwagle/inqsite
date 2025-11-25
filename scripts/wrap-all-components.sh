#!/bin/bash

# Batch process all components with auto-wrap-lorem.js

echo "🚀 Batch Wrapping All Components"
echo "=================================="
echo ""

# Arrays to track results
declare -a success_list
declare -a error_list
declare -a skipped_list

total=0
success=0
errors=0
skipped=0
total_items=0

# Find all svelte components
for file in src/lib/components/**/*.svelte; do
  name=$(basename "$file" .svelte)
  ((total++))

  echo "[$total] Processing: $name"

  # Run auto-wrap-lorem.js (without --dry-run)
  output=$(node scripts/auto-wrap-lorem.js "$name" 2>&1)
  exit_code=$?

  if echo "$output" | grep -q "Wrapped [0-9]* items"; then
    # Extract number of items wrapped
    count=$(echo "$output" | grep -oP "Wrapped \K[0-9]+")

    if [ "$count" -gt 0 ]; then
      echo "    ✅ Wrapped $count items"
      success_list+=("$name ($count items)")
      ((success++))
      ((total_items += count))
    else
      echo "    ⏭️  No wrappable content found"
      skipped_list+=("$name")
      ((skipped++))
    fi
  else
    echo "    ❌ Error occurred"
    error_list+=("$name")
    ((errors++))
  fi

  echo ""
done

# Print summary
echo ""
echo "=================================="
echo "📊 FINAL SUMMARY"
echo "=================================="
echo ""
echo "Total components processed: $total"
echo "  ✅ Successfully wrapped: $success ($total_items items total)"
echo "  ⏭️  Skipped (no content): $skipped"
echo "  ❌ Errors: $errors"
echo ""

if [ $success -gt 0 ]; then
  echo "✅ Successfully wrapped components:"
  for item in "${success_list[@]}"; do
    echo "   - $item"
  done
  echo ""
fi

if [ $skipped -gt 0 ]; then
  echo "⏭️  Skipped components (no wrappable content):"
  for item in "${skipped_list[@]}"; do
    echo "   - $item"
  done
  echo ""
fi

if [ $errors -gt 0 ]; then
  echo "❌ Components with errors:"
  for item in "${error_list[@]}"; do
    echo "   - $item"
  done
  echo ""
fi

echo "=================================="
echo "✨ Batch processing complete!"
echo "=================================="
echo ""
echo "Next steps:"
echo "  1. Review changes with: git diff"
echo "  2. Run extract-content.js to update JSON files"
echo "  3. Test components in dev server"
echo ""
