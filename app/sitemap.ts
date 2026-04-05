import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://riegosdev.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': 'https://riegosdev.com',
          en: 'https://riegosdev.com',
        },
      },
    },
  ]
}
