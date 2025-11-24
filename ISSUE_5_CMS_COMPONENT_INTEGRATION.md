# Issue #5: CMS Only Works for HomeA Component

## Problem
The CMS admin panel works perfectly for HomeA but fails for other components (HomeB, AboutA, AboutB, AboutC). Image uploads don't work at all for these components.

## Root Cause Analysis

### HomeA.svelte - ✅ WORKING
```svelte
<script>
  export let content = {
    texts: {},
    images: {},
    links: {}
  };

  const getText = (key, fallback) => content.texts?.[key] || fallback;
  const getImage = (key) => content.images?.[key] || {};
  const getLink = (key) => content.links?.[key] || {};
</script>

<img
  src={getImage('robot_main').url || 'fallback-url'}
  alt={getImage('robot_main').alt || 'Spline Image one'}
/>
```

### HomeB.svelte - ❌ NOT WORKING
```svelte
<section class="rt-operations-v1">
  <h2>AI-Powered Automation for Seamless Business Operations</h2>
  <img src="https://wubflow-shield.NOCODEXPORT.DEV/67a1ea8462c51e3f81e40a7e/67dcf627abf34dbb0271d798_Operation.webp" />
</section>
```

**Issue**: HomeB has hardcoded values - no content prop, no helper functions, no dynamic bindings.

### AboutA.svelte, AboutB.svelte, AboutC.svelte - ❌ NOT WORKING
Same issue as HomeB - hardcoded content with no dynamic integration.

## Data Files Status

### HomeA.json - ✅ Has proper structure
```json
{
  "componentName": "HomeA",
  "texts": { "hero_heading": "..." },
  "images": { "robot_main": { "url": "...", "alt": "..." } },
  "links": { "cta_button": { "href": "...", "text": "..." } }
}
```

### HomeB.json - ⚠️ JSON exists but component doesn't use it
```json
{
  "componentName": "HomeB",
  "texts": { "section_heading": "AI-Powered Automation..." },
  "images": { "image_1": { "url": "...", "alt": "" } }
}
```

## Server-Side Integration Issue

### +page.server.js (Home route)
```javascript
// ONLY loads HomeA and Footer
return {
  content: {
    HomeA: homeAContent,
    Footer: footerContent
  }
};
```

**Missing**: HomeB, HomeC, HomeD, HomeE, etc. are not loaded from server.

### +page.svelte (Home page)
```svelte
<HomeA content={data.content?.HomeA} />
<HomeB /> <!-- NO content prop passed! -->
<HomeC /> <!-- NO content prop passed! -->
```

## Complete Fix Required

### Step 1: Update All Component Files
Add to each component (HomeB, HomeC, AboutA, AboutB, AboutC, etc.):
```svelte
<script>
  export let content = {
    texts: {},
    images: {},
    links: {}
  };

  const getText = (key, fallback) => content.texts?.[key] || fallback;
  const getImage = (key) => content.images?.[key] || {};
  const getLink = (key) => content.links?.[key] || {};
</script>
```

### Step 2: Replace Hardcoded Values
Change:
```svelte
<h2>AI-Powered Automation for Seamless Business Operations</h2>
<img src="https://..." alt="..." />
```

To:
```svelte
<h2>{getText('section_heading', 'AI-Powered Automation for Seamless Business Operations')}</h2>
<img src={getImage('image_1').url || 'https://...'} alt={getImage('image_1').alt || '...'} />
```

### Step 3: Update Server Load Functions
Use the auto-generated server files from extract-content.js or manually add all components:

```javascript
// +page.server.js
return {
  content: {
    HomeA: homeAContent,
    HomeB: homeBContent,  // ADD
    HomeC: homeCContent,  // ADD
    // ... etc
  }
};
```

### Step 4: Update Page Templates
```svelte
<HomeA content={data.content?.HomeA} />
<HomeB content={data.content?.HomeB} /> <!-- ADD prop -->
<HomeC content={data.content?.HomeC} /> <!-- ADD prop -->
```

### Step 5: Run extract-content.js
Regenerate all JSON files and server files:
```bash
node scripts/extract-content.js HomeB HomeC HomeD HomeE HomeF AboutA AboutB AboutC
```

## Why Image Upload Fails

1. CMS saves image URL to JSON file ✅
2. But component doesn't read from JSON ❌
3. Component uses hardcoded URL instead
4. Result: Changes not visible even though they're saved

## Registry Integration

The `_registry.json` shows:
```json
{
  "pages": {
    "/aboutus": ["AboutA", "AboutB", "AboutC"]
  },
  "sharedComponents": ["Header", "Footer"]
}
```

Need to ensure all components in registry are:
1. Extracted to JSON
2. Added to their page's +page.server.js
3. Passed as props in +page.svelte
4. Integrated with content prop in component file

## Testing Checklist
- [ ] Text edits work in CMS
- [ ] Text changes appear on site after save
- [ ] Image URL edits work in CMS
- [ ] Image uploads work in CMS
- [ ] Uploaded images appear on site after save
- [ ] Link edits work in CMS
- [ ] Link changes appear on site after save
- [ ] All components listed in CMS sidebar
- [ ] No console errors when switching components
