---
description: How to generate high-quality SEO content for app pages (1,800-2,200 words with citations)
---

# SEO Content Generation Workflow

Generate comprehensive, fact-checked content with Google Search grounding and hero images.

## What You Get (By Default)

- ✅ **App pages**: 1,800-2,200 words
- ✅ **Comparisons**: 2,500-3,000 words
- ✅ **Hero images** (Nano Banana Pro)
- ✅ **Google Search grounding** for fact-checking
- ✅ **Citations** with source links
- ✅ **Semantic entities** for topical authority

## Prerequisites

Set `GEMINI_API_KEY` in `.env.local`

## Generate All Content

// turbo
```bash
npx tsx scripts/generate-seo-content.ts
```

Generates all app pages, comparisons, and hero images.

## Generate Priority Apps First

// turbo
```bash
npx tsx scripts/generate-seo-content.ts --limit=10 --priority=cursor,raycast,zed,warp,alfred
```

## Skip Image Generation

// turbo
```bash
npx tsx scripts/generate-seo-content.ts --skip-images
```

## Generate Only Apps

// turbo
```bash
npx tsx scripts/generate-seo-content.ts --type=apps
```

## Force Regenerate (Ignore Cache)

// turbo
```bash
npx tsx scripts/generate-seo-content.ts --force
```

## Options

| Flag | Description |
|------|-------------|
| `--type=apps\|comparisons\|all` | What to generate (default: all) |
| `--limit=N` | Limit number of items |
| `--priority=id1,id2` | Process these apps first |
| `--force` | Regenerate all, ignore cache |
| `--skip-images` | Skip hero image generation |

## Content Output

### App Pages (1,800-2,200 words)
- Overview (150-200 words)
- 5 features (40-60 words each)
- 3 use cases (60-80 words each)
- Installation guide
- Pricing (verified from Google Search)
- 5 FAQs (40-60 words each)
- Hero image (16:9 WebP)

### Comparison Pages (2,500-3,000 words)
- Quick verdict
- 8-10 feature comparisons
- Pricing comparison
- Decision matrix
- 5-6 user persona recommendations
- 10 FAQs

## Cache Location

```
content/seo/
├── semantic/apps/       # App content
├── semantic/comparisons/ # Comparison content
└── images/              # Hero images
```

## Build Production

// turbo
```bash
npm run build
```
