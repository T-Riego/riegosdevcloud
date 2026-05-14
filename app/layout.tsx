import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/context/LocaleContext'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Riegos Dev — Automação com IA & Desenvolvimento Full Stack',
  description: 'Automação inteligente, agentes para WhatsApp e desenvolvimento full stack para empresas que querem crescer. Engenharia de IA por Tiago, fundador da Riegos Dev.',
  keywords: ['automação com IA', 'agentes WhatsApp', 'desenvolvimento full stack', 'n8n', 'engenharia de IA', 'Riegos Dev'],
  authors: [{ name: 'Tiago — Riegos Dev' }],
  creator: 'Riegos Dev',
  metadataBase: new URL('https://riegosdev.cloud'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    siteName: 'Riegos Dev',
    title: 'Riegos Dev — Automação com IA & Desenvolvimento Full Stack',
    description: 'Automação inteligente, agentes para WhatsApp e desenvolvimento full stack para empresas que querem crescer.',
    url: 'https://riegosdev.cloud',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riegos Dev — Automação com IA & Desenvolvimento Full Stack',
    description: 'Automação inteligente, agentes para WhatsApp e desenvolvimento full stack para empresas que querem crescer.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      'pt-BR': 'https://riegosdev.cloud',
      'en': 'https://riegosdev.cloud',
    },
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
        <meta name="facebook-domain-verification" content="1txp2ekkyl8396fc8vuv6gp1aqu76a" />
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
