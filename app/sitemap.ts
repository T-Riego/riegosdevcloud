import type { MetadataRoute } from 'next'
import { contentLastModified, siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: contentLastModified.home,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/privacidade`,
      lastModified: contentLastModified.legal,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/termos`,
      lastModified: contentLastModified.legal,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/exclusao-de-dados`,
      lastModified: contentLastModified.legal,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
