import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://riegosdev.cloud'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': baseUrl,
          en: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/exclusao-de-dados`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
