import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/context/LocaleContext'
import { defaultOgImage, siteDescription, siteName, siteTitle, siteUrl } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: ['automação com IA', 'agentes WhatsApp', 'desenvolvimento full stack', 'n8n', 'engenharia de IA', 'Riegos Dev'],
  authors: [{ name: 'Tiago - Riegos Dev' }],
  creator: siteName,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'pt-BR': siteUrl,
    },
  },
  verification: {
    other: {
      'facebook-domain-verification': '1txp2ekkyl8396fc8vuv6gp1aqu76a',
    },
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-body-md overflow-x-hidden`}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
