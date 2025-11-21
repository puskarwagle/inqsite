# Animation System Cleanup Plan

## ✅ Completed
1. **animations-config.json** - Config-driven animation system
2. **animations.js** - Robust IntersectionObserver + RAF engine

## 📋 Cleanup Tasks

### Priority 1: Remove Hero.svelte Manual Script
**File**: `src/lib/components/Hero.svelte:4-27`
- Remove entire `<script>` block (manual RAF for robot/cloud/rocket/user)
- System now handles via config

### Priority 2: Clean Inline Styles

**Pattern**: Remove inline `style="transform: ... opacity: ... will-change:"`

**Files with heavy inline styles**:
- `Hero.svelte` - 40+ instances (lines 34,35,41,45,48,53,56,59,65,69,72,94,115+)
- `Section2.svelte` - 9 instances (lines 5,10,15,34,39,60,65)
- `Section4.svelte` - 3 instances (60,73,80)
- `Section6.svelte` - 3 instances (26,47,68)
- `Header.svelte` - 3 instances (605,650,653)

**Strategy**:
- Keep `class` attributes
- Remove `style="..."` attributes
- Remove `data-w-id` (145 total across 53 files)

### Priority 3: Components List (53 files)

**Heavy animation components** (10+ data-w-id):
- Hero.svelte
- Section2.svelte
- Section6.svelte
- Header.svelte

**Medium animation components** (1-5 data-w-id):
- Aservice-one.svelte
- Aservice-two.svelte
- Aservicetwo.svelte
- AboutD.svelte
- AboutE.svelte
- Bservice-two.svelte
- Cservice-two.svelte
- Section3-12.svelte (all 10 files)

**Light/no animation**:
- Footer.svelte
- Team components (Ateam, Bteam, Cteam, Dteam, Teamm)
- Pricing (Apricingone, Bpricingone)
- Contact (Acontacttwo, Bcontacttwo)
- About (A-H variants)

## 🎯 Automation Script

```bash
# Remove data-w-id attributes
find src/lib/components -name "*.svelte" -exec sed -i 's/ data-w-id="[^"]*"//g' {} \;

# Remove inline transform/opacity/will-change (preserve other styles)
# Manual review needed - too risky to automate fully
```

## 🧪 Testing Checklist

- [ ] Hero floating animations (robot, cloud, rocket, user)
- [ ] Section2 cards fade-up
- [ ] Section4 circular encryption scale
- [ ] Section6 dropdown rotation
- [ ] Header nav arrows
- [ ] Button hover states (preserve existing)
- [ ] Counter animations (preserve existing)
- [ ] All scroll-triggered animations

## 📊 Stats

- **Total components**: 53
- **data-w-id count**: 145
- **Inline style instances**: ~60
- **Floating elements**: 4 (robot, cloud, rocket, user)
- **Config presets**: 7
- **Element mappings**: 20+

## 🚀 Migration Order

1. Test new system on Hero.svelte only
2. Remove Hero.svelte script block
3. Clean Section2 (simple test case)
4. Automate remaining 51 files
5. Remove webflow mentions
6. Final QA pass
