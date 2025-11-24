Strategy: Improve Script & Regenerate (Better than     │ │
│ │ Cleaning)                                              │ │
│ │                                                        │ │
│ │ Why Regeneration > Cleaning:                           │ │
│ │                                                        │ │
│ │ - ✅ Fixes root cause (extraction logic bug)            │ │
│ │ - ✅ Works for all future extractions                   │ │
│ │ - ✅ Automatic and reproducible                         │ │
│ │ - ✅ Can validate success immediately                   │ │
│ │ - ✅ No risk of manual JSON corruption                  │ │
│ │                                                        │ │
│ │ ---                                                    │ │
│ │ Phase 1: Enhance extract-content.js (1.5 hours)        │ │
│ │                                                        │ │
│ │ Add Smart Detection:                                   │ │
│ │                                                        │ │
│ │ 1. Detect integrated components:                       │ │
│ │   - Check if file contains export let content          │ │
│ │   - Check if file uses getText/getImage/getLink        │ │
│ │ patterns                                               │ │
│ │ 2. Add dual extraction modes:                          │ │
│ │   - Mode A - Integrated Component Extraction:          │ │
│ │       - Use regex to extract fallback values from      │ │
│ │ template patterns:                                     │ │
│ │           - {getText('key', 'FALLBACK')} → extract     │ │
│ │ FALLBACK                                               │ │
│ │       - {getImage('key').url || 'FALLBACK'} → extract  │ │
│ │ FALLBACK                                               │ │
│ │       - {getLink('key').href || 'FALLBACK'} → extract  │ │
│ │ FALLBACK                                               │ │
│ │   - Mode B - Non-Integrated HTML Extraction:           │ │
│ │       - Use current regex (works perfectly for HomeB,  │ │
│ │ HomeC, etc.)                                           │ │
│ │     - Extract from static HTML tags                    │ │
│ │ 3. Regex patterns needed:                              │ │
│ │ // Extract from getText patterns                       │ │
│ │ const getTextRegex = /\{getText\(['"]([^'"]+)['"]\s*,\ │ │
│ │ s*['"](.*?)['"]\)\}/g;                                 │ │
│ │                                                        │ │
│ │ // Extract from getImage patterns                      │ │
│ │ const getImageUrlRegex = /getImage\(['"]([^'"]+)['"]\) │ │
│ │ \.url\s*\|\|\s*['"](.*?)['"]/g;                        │ │
│ │ const getImageAltRegex = /getImage\(['"]([^'"]+)['"]\) │ │
│ │ \.alt\s*\|\|\s*['"](.*?)['"]/g;                        │ │
│ │                                                        │ │
│ │ // Extract from getLink patterns                       │ │
│ │ const getLinkHrefRegex = /getLink\(['"]([^'"]+)['"]\)\ │ │
│ │ .href\s*\|\|\s*['"](.*?)['"]/g;                        │ │
│ │ const getLinkTextRegex = /\{getLink\(['"]([^'"]+)['"]\ │ │
│ │ )\.text\s*\|\|\s*['"](.*?)['"]\}/g;                    │ │
│ │                                                        │ │
│ │ 4. Add validation:                                     │ │
│ │   - After extraction, check no values contain          │ │
│ │ {getText(, {getImage(, {getLink(                       │ │
│ │   - Warn if suspicious patterns found                  │ │
│ │   - Count items extracted and show summary             │ │
│ │ 5. Add flags:                                          │ │
│ │   - --mode=integrated - Force integrated extraction    │ │
│ │   - --mode=html - Force HTML extraction                │ │
│ │   - --validate-only - Check files without extracting   │ │
│ │   - --dry-run - Show what would be extracted           │ │
│ │                                                        │ │
│ │ ---                                                    │ │
│ │ Phase 2: Test Enhanced Script (30 min)                 │ │
│ │                                                        │ │
│ │ 1. Test on integrated components:                      │ │
│ │   - Run on HomeA: node scripts/extract-content.js      │ │
│ │ HomeA                                                  │ │
│ │   - Verify JSON has clean values (no {getText(...)})   │ │
│ │   - Verify fallback values extracted correctly         │ │
│ │ 2. Test on non-integrated components:                  │ │
│ │   - Run on HomeB: node scripts/extract-content.js      │ │
│ │ HomeB                                                  │ │
│ │   - Verify extraction works like before                │ │
│ │   - Verify HTML content extracted properly             │ │
│ │ 3. Test edge cases:                                    │ │
│ │   - Component with mixed content                       │ │
│ │   - Component with no text                             │ │
│ │   - Component with special characters in fallbacks     │ │
│ │                                                        │ │
│ │ ---                                                    │ │
│ │ Phase 3: Regenerate All JSON Files (30 min)            │ │
│ │                                                        │ │
│ │ 1. Backup current JSON:                                │ │
│ │ cp -r static/content static/content.backup             │ │
│ │ 2. Regenerate all components:                          │ │
│ │ node scripts/extract-content.js HomeA HomeB HomeC      │ │
│ │ HomeD HomeE HomeF HomeG HomeH HomeI HomeL \            │ │
│ │   AboutA AboutB AboutC AboutD AboutE AboutF AboutG     │ │
│ │ AboutH \                                               │ │
│ │   TeamA TeamB TeamC TeamD \                            │ │
│ │   ContactA ContactB \                                  │ │
│ │   HomeOneA HomeOneB HomeOneC HomeOneD HomeOneE         │ │
│ │ HomeOneF HomeOneG HomeOneH \                           │ │
│ │   HomeTwoA HomeTwoB HomeTwoC HomeTwoD HomeTwoE         │ │
│ │ HomeTwoF HomeTwoG HomeTwoH HomeTwoI HomeTwoJ \         │ │
│ │   Header Footer                                        │ │
│ │ 3. Validate regenerated JSON:                          │ │
│ │   - Check no files contain {getText(, {getImage(,      │ │
│ │ {getLink(                                              │ │
│ │   - Verify all 45 JSON files present                   │ │
│ │   - Spot-check 5-10 files manually                     │ │
│ │ 4. Regenerate server files:                            │ │
│ │   - Script auto-generates +page.server.js files        │ │
│ │   - Verify all routes have correct component lists     │ │
│ │                                                        │ │
│ │ ---                                                    │ │
│ │ Phase 4: Auto-Integration Script (2 hours)             │ │
│ │                                                        │ │
│ │ Create /scripts/integrate-component.js:                │ │
│ │                                                        │ │
│ │ This script will add CMS integration to non-integrated │ │
│ │  components (HomeB, HomeC, etc.)                       │ │
│ │                                                        │ │
│ │ 1. Read component file                                 │ │
│ │ 2. Add script block if missing:                        │ │
│ │ export let content = { texts: {}, images: {}, links:   │ │
│ │ {} };                                                  │ │
│ │ const getText = (key, fallback) =>                     │ │
│ │ content.texts?.[key] || fallback;                      │ │
│ │ const getImage = (key) => content.images?.[key] || {}; │ │
│ │ const getLink = (key) => content.links?.[key] || {};   │ │
│ │                                                        │ │
│ │ 3. Parse existing JSON to get keys                     │ │
│ │ 4. Replace content intelligently:                      │ │
│ │   - Headings: <h1>Original Text</h1> →                 │ │
│ │ <h1>{getText('key', 'Original Text')}</h1>             │ │
│ │   - Images: src="url" → src={getImage('key').url ||    │ │
│ │ 'url'}                                                 │ │
│ │   - Links: href="url" → href={getLink('key').href ||   │ │
│ │ 'url'}                                                 │ │
│ │ 5. Preserve Webflow markup:                            │ │
│ │   - Keep all data-w-id attributes                      │ │
│ │   - Keep all class names                               │ │
│ │   - Keep all inline styles                             │ │
│ │   - Only replace content, not structure                │ │
│ │ 6. Validation:                                         │ │
│ │   - Ensure syntax is valid Svelte                      │ │
│ │   - Ensure all quotes are escaped                      │ │
│ │   - Ensure no duplicate keys                           │ │
│ │                                                        │ │
│ │ ---                                                    │ │
│ │ Phase 5: Integrate Remaining Components (1 hour)       │ │
│ │                                                        │ │
│ │ 1. Run on priority components:                         │ │
│ │ node scripts/integrate-component.js HomeB HomeC HomeD  │ │
│ │ HomeE                                                  │ │
│ │ 2. Test each in dev server:                            │ │
│ │   - Verify component renders                           │ │
│ │   - Verify no console errors                           │ │
│ │   - Verify Webflow animations still work               │ │
│ │ 3. Once validated, run on all remaining:               │ │
│ │ node scripts/integrate-component.js HomeF HomeG HomeH  │ │
│ │ HomeI HomeL AboutB AboutC AboutD ...                   │ │
│ │ 4. Update page files:                                  │ │
│ │   - Add content props: <HomeB                          │ │
│ │ content={data.content?.HomeB || {}} />                 │ │
│ │   - Script can automate this too                       │ │
│ │                                                        │ │
│ │ ---                                                    │ │
│ │ Phase 6: Testing (2 hours)                             │ │
│ │                                                        │ │
│ │ Unit Tests (Vitest):                                   │ │
│ │ - Test extraction functions (integrated mode)          │ │
│ │ - Test extraction functions (HTML mode)                │ │
│ │ - Test detection logic                                 │ │
│ │ - Test validation functions                            │ │
│ │                                                        │ │
│ │ E2E Tests (Playwright):                                │ │
│ │ - Test CMS workflow (edit text/image/link → save →     │ │
│ │ verify)                                                │ │
│ │ - Test all pages load without errors                   │ │
│ │ - Test fallback values work when JSON empty            │ │
│ │ - Test no {getText(...)} visible on any page           │ │
│ │                                                        │ │
│ │ Manual Testing:                                        │ │
│ │ - Visit all pages                                      │ │
│ │ - Check admin panel for all components                 │ │
│ │ - Edit content in 5-10 components                      │ │
│ │ - Verify changes appear on site                        │ │
│ │                                                        │ │
│ │ ---                                                    │ │
│ │ Phase 7: Documentation (30 min)                        │ │
│ │                                                        │ │
│ │ 1. Update extract-content.js comments:                 │ │
│ │   - Document integrated vs HTML extraction modes       │ │
│ │   - Add usage examples                                 │ │
│ │   - Document regex patterns                            │ │
│ │ 2. Create EXTRACTION_GUIDE.md:                         │ │
│ │   - How the dual-mode extraction works                 │ │
│ │   - When to use each mode                              │ │
│ │   - How to add new components                          │ │
│ │   - Troubleshooting                                    │ │
│ │ 3. Update main README:                                 │ │
│ │   - How to regenerate JSON files                       │ │
│ │   - How to integrate new components                    │ │
│ │   - Testing instructions                               │ │
│ │                                                        │ │
│ │ ---                                                    │ │
│ │ Total Time: ~8 hours                                   │ │
│ │                                                        │ │
│ │ Risk Level: Low (automated, reversible with backup)    │ │
│ │                                                        │ │
│ │ Success Criteria:                                      │ │
│ │                                                        │ │
│ │ - ✅ All 45 JSON files clean (no template literals)     │ │
│ │ - ✅ All 56 components integrated (or clear path to     │ │
│ │ integrate)                                             │ │
│ │ - ✅ CMS works for all components                       │ │
│ │ - ✅ All tests passing                                  │ │
│ │ - ✅ No visible {getText(...)} on any page              │ │