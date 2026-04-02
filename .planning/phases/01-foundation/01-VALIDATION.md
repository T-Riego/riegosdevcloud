---
phase: 1
slug: foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-02
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual verification + curl + browser dev tools |
| **Config file** | none — Wave 0 installs |
| **Quick run command** | `npm run dev` + visual check |
| **Full suite command** | `npm run build && npm run start` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run dev` + visual check
- **After every plan wave:** Run `npm run build && npm run start`
- **Before `/gsd:verify-work`:** Full build must succeed, no console errors
- **Max feedback latency:** 15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| TBD | TBD | TBD | DSGN-01 | Visual | `curl localhost:3000` check dark bg | N/A | Pending |
| TBD | TBD | TBD | DSGN-02 | Visual | Check font-family in computed styles | N/A | Pending |
| TBD | TBD | TBD | I18N-01 | File | `test -f lib/content/pt-BR.ts && test -f lib/content/en.ts` | N/A | Pending |
| TBD | TBD | TBD | NAV-01 | Visual | Header sticky on scroll, anchor links work | N/A | Pending |
| TBD | TBD | TBD | FOOT-01 | Visual | Footer renders with logo, links, brand phrase | N/A | Pending |
| TBD | TBD | TBD | FOOT-02 | Visual | Social media placeholder links present | N/A | Pending |

---

## Validation Architecture

Derived from 01-RESEARCH.md findings:

1. **FOUC Test:** `curl localhost:3000 | grep 'background-color.*#0A0A0A'` — must find inline dark background
2. **Font Loading:** DevTools check that Space Grotesk and Inter load without layout shift
3. **i18n Content:** Both content files exist and export typed objects with identical key sets
4. **Header/Footer:** Visual inspection at multiple viewport widths (375px, 768px, 1280px)
5. **Build Success:** `npm run build` exits 0 with no type errors
