import { defaultOgImage, siteDescription, siteName, siteUrl } from '@/lib/seo'

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export function buildHomeJsonLd() {
  const organizationId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteName,
        url: siteUrl,
        logo: defaultOgImage.url,
        image: defaultOgImage.url,
        description: siteDescription,
        email: 'contato@riegosdev.cloud',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'contato@riegosdev.cloud',
            availableLanguage: ['pt-BR'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: siteName,
        url: siteUrl,
        publisher: { '@id': organizationId },
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service-ai-automation`,
        name: 'Automação com IA e desenvolvimento full stack',
        serviceType: 'Automação com IA, agentes para WhatsApp, n8n e desenvolvimento full stack',
        provider: { '@id': organizationId },
        areaServed: 'BR',
        url: siteUrl,
        description: siteDescription,
      },
    ],
  }
}
