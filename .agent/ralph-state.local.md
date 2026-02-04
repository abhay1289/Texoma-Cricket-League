---
active: true
iteration: 1
max_iterations: 10
completion_promise: "FIX BLURRYNESS AND INVISIBLE TEXT ON HERO SECTIONS"
started_at: "2026-02-04T04:14:03Z"
---

## Task: Fix Hero Visibility and Blur Issues

### Issues Identified by User
1. Text is "invisible" (likely due to opacity-0 without animation running)
2. "Blurryness" on all pages (likely backdrop-blur or text-shadow blur effects)

### Plan
1. Check if `animate-fade-in-up` is defined in Tailwind config/CSS
2. If missing, add it or remove the animation classes
3. Reduce/Remove `blur-lg` and other heavy blur effects from Hero components
4. Restore text visibility (remove `opacity-0` default)
