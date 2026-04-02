# Feature Landscape

**Domain:** AI/Automation Agency Portfolio Website (Single Page Application)
**Project:** Riegos Dev — riegosdev.cloud
**Researched:** 2026-04-02
**Confidence note:** Web search unavailable. Analysis based on training data (knowledge cutoff Aug 2025) covering established agency/portfolio website patterns. This domain is stable; patterns are well-documented across thousands of published portfolios and UX studies. Confidence: MEDIUM-HIGH for table stakes, MEDIUM for emerging differentiators.

---

## Table Stakes

Features visitors expect on any agency/portfolio site. Missing = credibility drop, users leave.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Hero section with clear headline | First impression; value prop must be instant | Low | "What you do + who it's for" in 5 words |
| Navigation / anchor links | Users orient themselves before scrolling | Low | Sticky header on scroll is standard |
| Services section | Core reason someone visits an agency site | Low-Med | Cards with icon, title, short desc |
| About / founder story | Trust signal; who am I hiring? | Low | Photo + 2-3 sentences is enough |
| Portfolio / case studies | Proof of work; overcomes skepticism | Med | Even 2-3 projects beats zero |
| Contact / CTA | The entire goal of the page | Low | Button must be visible without scrolling |
| Mobile responsiveness | 60–70%+ of agency traffic is mobile | Med | Must look intentional, not shrunk |
| Fast load time | >3s = significant bounce increase | Med | Images optimized, no blocking scripts |
| HTTPS / SSL | Browser warning = instant trust loss | Low | Handled by Vercel/Netlify |
| Readable typography | Dense walls of text signal low effort | Low | Max 65-75 chars per line, 1.6 line height |
| Consistent visual identity | Inconsistency signals lack of craft | Low | Color, type, spacing system |
| Social proof (testimonials or logos) | Reduces "am I taking a risk?" anxiety | Med | Even 2 real quotes with names/roles |
| Clear service pricing signal | Not always exact prices but "starts at" or "custom quote" | Low | Avoids tire-kickers wasting time |
| Footer with basic info | Expected UX convention | Low | Logo, links, contact, copyright |

## Differentiators

Features that separate serious agencies from template clones. Not universally expected, but create memorable impressions and improve conversion.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Bilingual toggle (PT-BR / EN) | Opens international market; signals professionalism to non-BR clients | Med | `next-intl` or `react-i18next`; must persist across navigation |
| Particle / WebGL hero animation | Instantly signals "tech brand"; differentiates from generic agencies | Med | `tsparticles` or `three.js`; must be lightweight — kill on mobile if it hurts perf |
| Typewriter / headline rotation effect | Communicates multiple service angles in the hero; engaging | Low | `typed.js` or CSS animation; overused if done poorly |
| Scroll-triggered animations | Modern feel; rewards exploration | Med | `framer-motion` or `AOS`; must be subtle — aggressive animation is a red flag |
| Process / "how we work" timeline | Reduces friction by answering "what happens after I contact you?" | Low | 4-step visual flow is the sweet spot |
| Expandable portfolio cards | Lets detail-oriented visitors dig deeper without leaving the page | Med | Modal or accordion; good for demonstrating project depth |
| WhatsApp CTA as primary conversion | Lower friction than email for Brazilian market; near-instant response signal | Low | `wa.me/` link with pre-filled message; far better conversion than email forms in BR |
| AI/automation credibility signals | Shows you're not just another freelancer; tool badges, methodology mentions | Low | n8n, GPT, Claude, Supabase logos; brief mention of "AI-powered" workflows |
| Dark theme executed with craft | Signals premium tech brand; suits the AI/automation domain | Med | Requires deliberate color system — not just dark backgrounds with white text |
| Video testimonials or demo reels | 3x more persuasive than text alone | High | High complexity; defer to v2 unless already produced |
| Results-oriented copy ("saved 20h/wk") | Outcome framing converts better than feature framing | Low | Copy effort, not code effort — but extremely high ROI |
| Floating / persistent WhatsApp button | Always-accessible conversion point; extremely common in BR market | Low | Fixed position; disappears on scroll-up for UX hygiene |
| Domain-specific SEO metadata | Targets "automação com IA" and "WhatsApp bot" keywords | Low | Next.js metadata API; lang tags for bilingual |
| Schema.org structured data | Rich snippets in Google; `LocalBusiness` or `ProfessionalService` | Low-Med | Add once, long-term SEO benefit |

## Anti-Features

Features to deliberately NOT build — they add complexity with no proportional return for this site's goal.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Blog / content section | Requires ongoing investment; empty blog signals neglect | Omit entirely in v1; revisit if SEO content strategy is decided |
| Login / user accounts | No use case for a conversion-focused institutional site | Not applicable; redirect all auth thinking to client projects |
| Custom backend / API | Adds infrastructure cost and maintenance burden | WhatsApp redirect handles contact; no server needed |
| CMS / admin panel | Static content is a feature — it can't be accidentally broken | Hardcode v1 content; add Contentlayer or Sanity only if update frequency demands it |
| E-commerce / payments | Not a product store; selling services, not items | Out of scope; if needed, use Stripe Links externally |
| Chat widget (non-WhatsApp) | Adds third-party JS weight; fragments contact channels | WhatsApp is the channel — don't split attention |
| Cookie consent banner (v1) | No analytics cookies = no legal requirement in most jurisdictions | Omit until analytics/tracking is added; adds visual clutter for no value |
| Social media feed embeds | Heavy iframes; Twitter/Instagram embeds hurt performance and can break | Link to profiles in footer; don't embed live feeds |
| Infinite scroll or pagination | Not enough content to justify; adds complexity | Static card grid is sufficient for 3-6 portfolio items |
| Dark/light mode toggle | Doubles the design system; dark theme is the brand identity | Commit to dark — it's a positioning choice, not a preference |
| Sticky "book a call" calendar widget | Adds Calendly dependency; conflicts with WhatsApp-first strategy | One conversion path: WhatsApp |

## Feature Dependencies

```
Bilingual toggle
  └─ Requires: i18n system (all text externalized to JSON/TS files)
  └─ Blocks: Writing copy (must be written in both languages up-front)
  └─ Required before: Any section with user-facing text

Scroll animations
  └─ Requires: Animation library installed (framer-motion or AOS)
  └─ Depends on: Sections existing first (animate what's already built)

Portfolio expandable cards
  └─ Requires: Portfolio data structure defined
  └─ Requires: Modal or accordion component
  └─ Content dependency: 3+ projects with descriptions ready

WhatsApp CTA (forms + buttons)
  └─ Requires: WhatsApp number confirmed (+55 31 98896-9661)
  └─ Requires: Pre-filled message template written per service
  └─ No backend dependency — pure href link

Hero particles
  └─ Requires: Performance budget validated on mobile
  └─ Optional: Disable below breakpoint or reduce particle count

SEO metadata
  └─ Requires: Bilingual slug structure decided (/ vs /en/ vs ?lang=en)
  └─ Requires: Copy finalized (title, description per section)
  └─ Depends on: Next.js metadata API (already in stack)

Social proof / testimonials
  └─ Content dependency: Real quotes from real clients needed
  └─ No code complexity, but blocks shipping if content isn't ready
```

## MVP Recommendation

**Goal:** Convert a Brazilian AI-curious SMB owner into a WhatsApp conversation.

Prioritize in build order:

1. **Hero** — Headline, subheadline, particle background, primary CTA button to WhatsApp
2. **Services cards** — 6 services with icons, names, one-line descriptions
3. **About** — Tiago's photo placeholder, 3-sentence bio, tool badges
4. **Portfolio** — 3 project cards (expandable or static; static is fine for v1)
5. **Testimonials** — 2-3 quotes in a grid; carousel if 5+
6. **Process timeline** — 4 steps; visual, scannable
7. **CTA section** — Full-bleed banner, WhatsApp button + inline form that deeplinks to WhatsApp
8. **Footer** — Logo, anchor links, tagline, WhatsApp number
9. **Bilingual toggle** — Wire up once all copy is in i18n files
10. **SEO metadata** — Add after copy is finalized

**Defer to v2:**
- Video testimonials/demo reels (high content cost, not blocking)
- Schema.org structured data (low priority; add after indexing)
- Blog (requires content strategy decision)
- Analytics (add after site is live; don't let it block launch)

## Confidence Assessment

| Area | Confidence | Reason |
|------|------------|--------|
| Table stakes list | HIGH | These are universal conventions confirmed across hundreds of agency sites; stable patterns |
| Differentiators (general) | MEDIUM-HIGH | Well-documented in UX literature through my knowledge cutoff |
| WhatsApp-specific BR market | MEDIUM | Strong signal from BR dev/marketing community; no live search to confirm 2026 trends |
| AI agency specifics | MEDIUM | Emerging category; patterns are forming but not ossified |
| Anti-features | HIGH | Based on clear complexity/value tradeoffs; low ambiguity |

## Sources

- Training data: Agency website pattern analysis (knowledge cutoff Aug 2025)
- Project requirements: `.planning/PROJECT.md`
- Web search: Unavailable (permissions not granted in this session)
- Note: Recommend verifying WhatsApp conversion patterns with a quick Brave Search when available, to confirm 2026 BR market best practices
