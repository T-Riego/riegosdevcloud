import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const layout = readFileSync(join(root, 'app', 'layout.tsx'), 'utf8')
const sitemap = readFileSync(join(root, 'app', 'sitemap.ts'), 'utf8')
const seo = existsSync(join(root, 'lib', 'seo.ts'))
  ? readFileSync(join(root, 'lib', 'seo.ts'), 'utf8')
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
