---
phase: quick-260406-bb6
plan: "01"
subsystem: animations
tags: [framer-motion, scroll-animations, ux, performance]
dependency_graph:
  requires: [components/ui/AnimateOnScroll.tsx, components/ui/ProcessLine.tsx]
  provides: [scroll-triggered section animations, Hero CTA entrance animation, SVG path draw]
  affects: [ServicesSection, PortfolioSection, TestimonialsSection, AboutSection, ProcessSection, ContactSection, HeroSection, app/page.tsx]
tech_stack:
  added: []
  patterns: [whileInView with once:true, variants + staggerChildren, motion.a for anchor elements, pathLength SVG draw via useInView]
key_files:
  created:
    - components/ui/AnimateOnScroll.tsx
    - components/ui/ProcessLine.tsx
  modified:
    - components/sections/ServicesSection.tsx
    - components/sections/PortfolioSection.tsx
    - components/sections/TestimonialsSection.tsx
    - components/sections/AboutSection.tsx
    - components/sections/ProcessSection.tsx
    - components/sections/ContactSection.tsx
    - components/sections/HeroSection.tsx
    - app/page.tsx
decisions:
  - staggerChildren mode applies grid className to AnimateOnScroll container so motion.div wrappers become the CSS grid cells — no extra wrapper needed
  - ProcessLine is inside the stagger container but positioned absolutely, so it uses its own useInView and draws independently
  - Hero CTAs converted from <a> to <motion.a> directly (cleaner than wrapping in extra motion.div)
  - ScrollAnimations generic wrapper removed from page.tsx — per-section AnimateOnScroll handles animation with correct granularity
metrics:
  duration: ~10 min
  completed: "2026-04-06"
  tasks_completed: 2
  files_changed: 10
---

# Quick 260406-bb6: Implement On-Scroll Animations with Framer Motion — Summary

**One-liner:** Framer Motion scroll animations across all 6 sections using reusable AnimateOnScroll wrapper (fadeUp/staggerChildren variants) plus SVG pathLength draw in the Process timeline and staggered CTA entrance in Hero.

## Tasks Completed

| # | Task | Commit | Key Files |
|---|------|--------|-----------|
| 1 | Create AnimateOnScroll wrapper and ProcessLine SVG component | ce6361c | components/ui/AnimateOnScroll.tsx, components/ui/ProcessLine.tsx |
| 2 | Apply animations to all sections and Hero CTAs | 1124b30 | 8 section/page files modified |

## What Was Built

### AnimateOnScroll (components/ui/AnimateOnScroll.tsx)
Reusable `'use client'` component supporting three modes:
- **`fadeUp`** — fades in from y+28px, duration 0.7s, easeOutExpo cubic bezier `[0.16, 1, 0.3, 1]`
- **`fadeIn`** — fades in without y offset, same duration/easing
- **`staggerChildren`** — container fires `staggerChildren` transition; each direct child is wrapped in `motion.div` with `staggerItemVariants` (y+24px, 0.6s). Grid CSS goes on the container via `className` prop so the `motion.div` wrappers become the grid cells.

All modes use `whileInView="visible"` with `viewport={{ once: true, amount: 0.12 }}`.

### ProcessLine (components/ui/ProcessLine.tsx)
SVG connector line for the Process section desktop layout:
- Uses `useInView(ref, { once: true, amount: 0.3 })` to trigger
- Animates `pathLength` from 0 to 1 via `motion.path`, duration 1.2s, 0.3s delay, easeInOut

### Section Animations Applied
| Section | Title | Cards/Content |
|---------|-------|---------------|
| Services | fadeUp | staggerChildren 0.09s — 6 cards |
| Portfolio | fadeUp | staggerChildren 0.12s — 3 project cards |
| Testimonials | fadeUp | staggerChildren 0.15s — 3 testimonial cards |
| About | fadeUp delay 0.1s | (full content block) |
| Process | fadeUp | staggerChildren 0.12s desktop / 0.1s mobile + ProcessLine SVG draw |
| Contact | fadeUp | (full section) |

### Hero CTA Entrance
Two `<a>` tags converted to `<motion.a>` with `ctaContainerVariants` (stagger 0.12s, delayChildren 0.8s) and `ctaItemVariants` (y+16px, 0.6s, easeOutExpo). Fires on mount with `animate="visible"` (not whileInView).

### page.tsx
Removed `<ScrollAnimations>` generic wrapper and its import. All sections now direct children of `<main>` with per-section animation control.

## Decisions Made

1. **Grid CSS on AnimateOnScroll container** — in `staggerChildren` mode, passing `className="grid grid-cols-... gap-..."` to the wrapper means the `motion.div` item wrappers are direct grid cells. No extra `div` wrapper needed.

2. **ProcessLine inside stagger container** — The `ProcessLine` is `position: absolute`, so it doesn't occupy a grid cell slot. It triggers its own `useInView` draw animation independently of the step stagger.

3. **motion.a instead of wrapping a in motion.div** — Hero CTAs are `<a>` tags; `<motion.a>` is cleaner and avoids adding DOM depth.

4. **ScrollAnimations wrapper removed** — the old wrapper applied identical fadeUp to every section as a single motion. Per-section `AnimateOnScroll` gives correct stagger granularity at the card level.

## Deviations from Plan

None — plan executed exactly as written.

## Self-Check

### Files exist:
- `components/ui/AnimateOnScroll.tsx` — FOUND
- `components/ui/ProcessLine.tsx` — FOUND
- All 6 modified sections — FOUND
- `app/page.tsx` ScrollAnimations removed — CONFIRMED

### Commits exist:
- `ce6361c` — FOUND
- `1124b30` — FOUND

### Build:
- `npx tsc --noEmit` — PASSED (no output = no errors)
- `npm run build` — PASSED (static export, 5 pages generated)

## Self-Check: PASSED
