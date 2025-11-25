#!/bin/bash

# Test auto-wrap-lorem.js on all components

echo "Testing auto-wrap-lorem.js on all components..."
echo "================================================"
echo ""

total=0
has_wrapping=0
no_wrapping=0

for file in src/lib/components/**/*.svelte; do
  name=$(basename "$file" .svelte)
  ((total++))

  echo "[$total] Testing: $name"

  output=$(node scripts/auto-wrap-lorem.js --dry-run "$name" 2>&1)

  if echo "$output" | grep -q "Wrapped [0-9]* items"; then
    count=$(echo "$output" | grep -oP "Wrapped \K[0-9]+")
    if [ "$count" -gt 0 ]; then
      echo "    ✓ Would wrap $count items"
      ((has_wrapping++))
    else
      echo "    ℹ️  No Lorem Ipsum found"
      ((no_wrapping++))
    fi
  else
    echo "    ⚠️  Error or not found"
  fi
done

echo ""
echo "================================================"
echo "Summary:"
echo "  Total components: $total"
echo "  Components with wrappable content: $has_wrapping"
echo "  Components with no wrappable content: $no_wrapping"
echo "================================================"
