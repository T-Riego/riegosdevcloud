import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const layout = readFileSync(join(root, 'app', 'layout.tsx'), 'utf8')
const sitemap = readFileSync(join(root, 'app', 'sitemap.ts'), 'utf8')
const page = readFileSync(join(root, 'app', 'page.tsx'), 'utf8')
const hero = readFileSync(join(root, 'components', 'sections', 'HeroSection.tsx'), 'utf8')
const diagnostic = readFileSync(join(root, 'components', 'sections', 'DiagnosticSection.tsx'), 'utf8')
const cta = readFileSync(join(root, 'components', 'sections', 'CtaSection.tsx'), 'utf8')
const fab = readFileSync(join(root, 'components', 'ui', 'WhatsAppFab.tsx'), 'utf8')
const seo = existsSync(join(root, 'lib', 'seo.ts'))
  ? readFileSync(join(root, 'lib', 'seo.ts'), 'utf8')
  : ''
const jsonLd = existsSync(join(root, 'lib', 'jsonLd.ts'))
  ? readFileSync(join(root, 'lib', 'jsonLd.ts'), 'utf8')
  : ''
const analytics = existsSync(join(root, 'lib', 'analytics.ts'))
  ? readFileSync(join(root, 'lib', 'analytics.ts'), 'utf8')
  : ''
const clarity = existsSync(join(root, 'components', 'analytics', 'ClarityAnalytics.tsx'))
  ? readFileSync(join(root, 'components', 'analytics', 'ClarityAnalytics.tsx'), 'utf8')
  : ''
const pageEngagement = existsSync(join(root, 'components', 'analytics', 'PageEngagementTracker.tsx'))
  ? readFileSync(join(root, 'components', 'analytics', 'PageEngagementTracker.tsx'), 'utf8')
  : ''

const checks = [
  ['lib/seo.ts exists', Boolean(seo)],
  ['home canonical is explicit', layout.includes('canonical: siteUrl')],
  ['Open Graph image is configured', layout.includes('images: [defaultOgImage]')],
  ['Twitter image is configured', layout.includes('images: [defaultOgImage.url]')],
  ['Google verification is environment based', layout.includes('NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION')],
  ['false English hreflang removed', !layout.includes("'en': 'https://riegosdev.cloud'") && !sitemap.includes('en: baseUrl')],
  ['sitemap uses stable content dates', seo.includes("new Date('2026-05-14T00:00:00.000Z')") && sitemap.includes('contentLastModified.home')],
  ['OG image asset exists', existsSync(join(root, 'public', 'og-riegosdev.jpg'))],
  ['JSON-LD graph is configured', jsonLd.includes('@graph') && jsonLd.includes('Organization') && jsonLd.includes('Service')],
  ['JSON-LD is rendered on home', page.includes('buildHomeJsonLd') && page.includes('application/ld+json')],
  ['analytics wrapper exists', analytics.includes('trackEvent') && analytics.includes('whatsapp_clicked')],
  ['Clarity component is env gated', clarity.includes('NEXT_PUBLIC_CLARITY_PROJECT_ID') && clarity.includes('clarity.ms/tag')],
  ['Clarity component is mounted', layout.includes('<ClarityAnalytics />')],
  ['page engagement tracker is mounted', page.includes('<PageEngagementTracker />') && pageEngagement.includes('scroll_depth_reached') && pageEngagement.includes('section_viewed')],
  ['CTA events are instrumented', hero.includes("ctaId=\"hero_whatsapp\"") && diagnostic.includes("ctaId=\"diagnostic_whatsapp\"") && cta.includes("ctaId=\"final_whatsapp\"") && fab.includes("ctaId=\"whatsapp_fab\"")],
]

const failed = checks.filter(([, passed]) => !passed)

if (failed.length > 0) {
  console.error('SEO phase 1 checks failed:')
  for (const [name] of failed) {
    console.error(`- ${name}`)
  }
  process.exit(1)
}

console.log(`SEO phase 1 checks passed: ${checks.length}/${checks.length}`)
