# CMS Content Extraction Guide

This guide explains the dual-mode content extraction system for the CMS.

## Overview

The CMS uses a JSON-based content management system where content is extracted from Svelte components and stored in static JSON files. The extraction script automatically detects whether a component is integrated with the CMS and uses the appropriate extraction method.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Content Flow                              │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Component.svelte ──► extract-content.js ──► Component.json │
│         │                     │                      │       │
│         │                     ▼                      ▼       │
│         │            Dual-Mode Detection      +page.server.js│
│         │                │       │                   │       │
│         │                ▼       ▼                   ▼       │
│         │          Integrated  HTML           Loads JSON     │
│         │           Extraction Extraction           │       │
│         │                │       │                   ▼       │
│         │                └───────┴────►        +page.svelte  │
│         │                                            │       │
│         └────────────────────────────────────────────┘       │
│                      Receives content prop                   │
└─────────────────────────────────────────────────────────────┘
```

## Dual-Mode Extraction

The extraction script supports two modes:

### 1. Integrated Component Mode

**When detected:**
- Component has `export let content` prop
- Component uses helper functions like `getText()`, `getImage()`, `getLink()`

**What it does:**
- Extracts fallback values from template literals
- Example: `{getText('hero_heading', 'Welcome')}` → extracts `"Welcome"`
- Preserves all Webflow markup and data-w-id attributes

**Pattern matching:**
```javascript
// Texts
{getText('key', 'fallback value')}  →  texts: { key: 'fallback value' }

// Images
getImage('key').url || 'https://...'  →  images: { key: { url: 'https://...' } }
getImage('key').alt || 'Alt text'     →  images: { key: { alt: 'Alt text' } }

// Links
getLink('key').href || '/path'  →  links: { key: { href: '/path' } }
getLink('key').text || 'Text'   →  links: { key: { text: 'Text' } }
```

### 2. HTML Extraction Mode

**When detected:**
- Component does NOT have `export let content`
- Component has hardcoded content in HTML

**What it does:**
- Extracts text from HTML tags
- Extracts images from `<img>` tags
- Extracts links from `<a>` tags
- Generates semantic keys automatically

**Key generation:**
```javascript
// Headings → section_heading, hero_heading
<h1>Welcome</h1>  →  { section_heading: 'Welcome' }

// Paragraphs → numbered automatically
<p>Text 1</p>  →  { paragraph_1: 'Text 1' }
<p>Text 2</p>  →  { paragraph_2: 'Text 2' }

// Images → image_1, image_2, etc.
<img src="..." alt="Hero" />  →  { image_1: { url: '...', alt: 'Hero' } }
```

## Component Integration

### Adding CMS Support to a Component

Use the auto-integration script:

```bash
node scripts/integrate-component.js ComponentName
```

This will:
1. Add the CMS script block
2. Replace hardcoded content with template patterns
3. Preserve all Webflow attributes and styling

### Manual Integration

If you prefer to integrate manually:

```svelte
<script>
  // Accept content from parent page
  export let content = {
    texts: {},
    images: {},
    links: {}
  };

  // Helper functions to get content with fallback
  const getText = (key, fallback) => content.texts?.[key] || fallback;
  const getImage = (key) => content.images?.[key] || {};
  const getLink = (key) => content.links?.[key] || {};
</script>

<!-- Replace hardcoded text -->
<h1>{getText('hero_heading', 'Original Heading')}</h1>

<!-- Replace image src -->
<img
  src={getImage('hero_image').url || 'https://original-url.com/image.jpg'}
  alt={getImage('hero_image').alt || 'Original Alt Text'}
/>

<!-- Replace links -->
<a href={getLink('cta_button').href || '/original'}>
  {getLink('cta_button').text || 'Original Text'}
</a>
```

## Extraction Script Usage

### Extract Single Component

```bash
node scripts/extract-content.js ComponentName
```

### Extract Multiple Components

```bash
node scripts/extract-content.js HomeA HomeB AboutA
```

### Extract All Components

```bash
node scripts/extract-content.js --all
```

### Dry Run (Preview without saving)

```bash
node scripts/extract-content.js ComponentName --dry-run
```

## Content JSON Structure

Each component gets a JSON file in `static/content/`:

```json
{
  "componentName": "HomeA",
  "lastModified": "2025-11-24T19:36:27.752Z",
  "texts": {
    "hero_heading": "Welcome to Our Site",
    "hero_paragraph": "Lorem ipsum dolor sit amet...",
    "button_text": "Get Started"
  },
  "images": {
    "hero_image": {
      "url": "https://cdn.example.com/hero.jpg",
      "alt": "Hero Image"
    },
    "logo": {
      "url": "https://cdn.example.com/logo.svg"
    }
  },
  "links": {
    "cta_button": {
      "href": "/contact",
      "text": "Contact Us"
    }
  }
}
```

## Registry System

The `_registry.json` file tracks component-to-page relationships:

```json
{
  "pages": {
    "/": ["HomeA", "HomeB", "HomeC"],
    "/aboutus": ["AboutA", "AboutB"],
    "/team": ["TeamA", "TeamB"]
  },
  "sharedComponents": ["Header", "Footer"],
  "lastUpdated": "2025-11-24T19:46:48.720Z"
}
```

## Server Load Functions

Each page has a `+page.server.js` that loads content:

```javascript
import { readFileSync } from 'fs';
import { join } from 'path';

export async function load() {
  const contentDir = join(process.cwd(), 'static', 'content');
  const content = {};

  // Load component-specific content
  const components = ['HomeA', 'HomeB', 'Header', 'Footer'];

  for (const componentName of components) {
    try {
      const jsonPath = join(contentDir, `${componentName}.json`);
      const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));
      content[componentName] = data;
    } catch (err) {
      console.error(`Failed to load ${componentName}:`, err);
    }
  }

  return { content };
}
```

## Page Integration

Pass content to components in your page files:

```svelte
<script>
  import HomeA from '$lib/components/home/HomeA.svelte';

  export let data;
</script>

<HomeA content={data.content?.HomeA || {}} />
```

## Validation

The extraction script validates extracted content:

```javascript
// Checks for:
✓ No template literals in JSON (no {getText(...)} strings)
✓ Valid JSON structure
✓ All required fields present
✓ Proper data types (strings, objects)
```

## Troubleshooting

### Content shows `{getText('key', 'value')}` on the page

**Problem:** JSON contains template literal strings instead of values

**Solution:** Re-run extraction script - it will now detect this and extract fallback values

```bash
node scripts/extract-content.js ComponentName
```

### Images not loading

**Problem:** Image URLs are not being passed correctly

**Check:**
1. JSON file has `images` object with `url` property
2. Component uses `getImage('key').url || 'fallback'`
3. Page file passes content prop: `content={data.content?.ComponentName || {}}`

### Content not updating in CMS

**Problem:** Changes in admin panel don't appear on site

**Check:**
1. JSON file was saved correctly
2. Server is restarted (in dev mode)
3. Component is using `getText/getImage/getLink` helpers
4. Page is passing content prop to component

## Best Practices

1. **Always use fallback values** - Ensures content displays even if JSON is missing
   ```svelte
   {getText('heading', 'Fallback Heading')}
   ```

2. **Keep semantic key names** - Use descriptive names for easier content management
   ```javascript
   'hero_heading'  // Good
   'text1'         // Bad
   ```

3. **Test after integration** - Run extraction and verify JSON is clean
   ```bash
   node scripts/extract-content.js ComponentName
   cat static/content/ComponentName.json  # Check for {getText
   ```

4. **Preserve Webflow attributes** - Never remove data-w-id attributes (needed for animations)
   ```svelte
   <div data-w-id="abc-123" class="rt-hero">
     {getText('heading', 'Welcome')}
   </div>
   ```

5. **Use integration script** - Automates the tedious work and reduces errors
   ```bash
   node scripts/integrate-component.js ComponentName
   ```

## Testing

Run tests to verify CMS functionality:

```bash
# Unit tests (CMS helpers and content loading)
npm run test:unit

# E2E tests (full CMS workflow)
npm run test:e2e

# All tests
npm test
```

## Advanced: Custom Extraction Rules

You can modify `scripts/extract-content.js` to add custom extraction patterns:

```javascript
// Add custom pattern matching
const customPattern = /customPattern\(['"]([^'"]+)['"]\)/g;
let match;
while ((match = customPattern.exec(html)) !== null) {
  content.customData[match[1]] = match[2];
}
```

## Performance Considerations

- **JSON files are cached** - Changes require server restart in dev
- **Extraction is fast** - ~50ms per component
- **No runtime overhead** - Content loaded once per page request
- **Static exports supported** - JSON files work with `adapter-static`

## Security

- **No user input in JSON** - Admin panel validates and sanitizes
- **No script injection** - Content is text-only, no HTML parsing
- **File permissions** - JSON files are read-only at runtime
- **Path validation** - Component names validated against registry

## Migration Guide

### From Hardcoded to CMS

1. Run integration script:
   ```bash
   node scripts/integrate-component.js ComponentName
   ```

2. Extract content:
   ```bash
   node scripts/extract-content.js ComponentName
   ```

3. Update page file to pass content prop:
   ```svelte
   <Component content={data.content?.ComponentName || {}} />
   ```

4. Test the component loads correctly

### Reverting to Hardcoded

If you need to revert:

1. The original fallback values are preserved in the component
2. Simply stop passing the content prop
3. The component will use fallback values automatically

## Support

For issues or questions:
- Check test files for usage examples
- Review `scripts/extract-content.js` for extraction logic
- See `scripts/integrate-component.js` for integration logic
- Run with `--dry-run` flag to preview changes
