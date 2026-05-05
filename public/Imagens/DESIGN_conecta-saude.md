---
name: RiegosDev Core
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3a4a49'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6a7a7a'
  outline-variant: '#b9cac9'
  surface-tint: '#006a6a'
  primary: '#006a6a'
  on-primary: '#ffffff'
  primary-container: '#00ffff'
  on-primary-container: '#007272'
  inverse-primary: '#00dddd'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#585f6a'
  on-tertiary: '#ffffff'
  tertiary-container: '#dfe6f3'
  on-tertiary-container: '#606772'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#00fbfb'
  primary-fixed-dim: '#00dddd'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dce3f0'
  tertiary-fixed-dim: '#c0c7d3'
  on-tertiary-fixed: '#151c25'
  on-tertiary-fixed-variant: '#404752'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The brand personality is anchored in clarity, technical precision, and approachable innovation. This design system utilizes a **Minimalist-Modern** aesthetic that prioritizes cognitive ease through high "breathability" and a disciplined use of whitespace. 

The goal is to evoke a sense of digital craftsmanship. By stripping away unnecessary ornamentation and relying on structural alignment and subtle depth, the UI communicates reliability. The interaction model is calm and deliberate, avoiding aggressive transitions in favor of smooth, purposeful motion that reflects the company's focus on technology and development.

## Colors
The palette is dominated by high-key neutrals to maintain a clean, "airy" atmosphere. 

- **Primary Cyan:** Used sparingly as a high-energy accent for interactive states, key indicators, and primary call-to-actions.
- **Deep Slate:** Provides the necessary weight for typography and structural elements, ensuring high legibility and a professional tech-focused foundation.
- **Surface Grays:** A tiered system of light grays (#F8FAFC and #F1F5F9) is used to define container boundaries without the visual heaviness of dark borders.
- **Gradients:** Subtle, low-contrast gradients are applied to primary buttons to add a "tech-sheen" and tactile dimension.

## Typography
The system uses **Inter** for its exceptional readability and neutral, systematic character. 

To achieve the desired "clean and modern" look, the type scale utilizes generous line heights (1.6x to 1.7x for body text) to prevent information density from feeling overwhelming. Headlines feature slightly tighter tracking to maintain visual impact, while smaller labels use increased letter spacing and uppercase styling to ensure clarity at a glance. Typographic hierarchy is established primarily through weight shifts and the strategic use of the Slate color vs. the Medium Gray for secondary information.

## Layout & Spacing
This design system employs a **Fixed-Fluid hybrid grid**. Layouts are contained within a maximum width of 1280px for desktop viewing, centered with elastic margins. 

The spacing rhythm follows an 8px linear scale. Large-scale components (sections and major cards) should lean toward the `lg` and `xl` spacing values to create the signature "breathable" feel. Gutters are kept wide at 24px to ensure distinct separation between content blocks, reinforcing the minimalist aesthetic.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layering** rather than heavy borders.

- **Soft Elevation:** Cards and modals use highly diffused shadows with low opacity (4-8%) and a subtle blue-ish tint to the shadow color to harmonize with the Slate palette.
- **Surface Tiering:** The background is #FFFFFF, while secondary containers use #F8FAFC. This creates a natural hierarchy where the most important content physically "floats" above the foundation.
- **Glassmorphism:** Use sparingly for navigation bars or floating action buttons; a 12px backdrop blur with a 40% white tint provides a modern, translucent feel without sacrificing legibility.

## Shapes
The shape language is defined by modern, medium-radius curves that soften the technical precision of the typography.

Elements follow a `rounded-lg` standard of 16px (1rem) for primary cards and containers. This specific radius is large enough to be perceived as friendly and modern, but sharp enough to feel professional. Smaller interactive components like buttons and input fields utilize an 8px radius to maintain a cohesive visual rhythm across different scales.

## Components

- **Cards:** White backgrounds (#FFFFFF) with 16px corner radius and a 1px border in #F1F5F9. Shadows should be wide and soft (e.g., `0px 10px 30px rgba(30, 41, 59, 0.05)`).
- **Buttons:** 
    - *Primary:* Gradient fill (Cyan to Dark Cyan) with white text. No shadow on rest; subtle lift and shadow on hover.
    - *Secondary:* Ghost style with #F1F5F9 background and Slate text.
- **Input Fields:** Minimalist design with a 1px #E2E8F0 border. On focus, the border transitions to Primary Cyan with a soft glow (2px spread).
- **Chips/Badges:** Small, 100px radius (pill-shaped) with low-saturation backgrounds (e.g., light cyan tint) and high-saturation text for status indicators.
- **Lists:** No bullet points; use generous vertical padding (16px) and subtle #F8FAFC separators to define rows.
- **Data Tables:** High whitespace, sans vertical lines. Header rows use `label-sm` typography with a subtle bottom border.