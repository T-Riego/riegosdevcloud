import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/context/LocaleContext'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Riegos Dev — Automação com IA & Desenvolvimento Full Stack',
  description: 'Automação inteligente, agentes para WhatsApp e desenvolvimento full stack para empresas que querem crescer. Engenharia de IA por Tiago, fundador da Riegos Dev.',
  keywords: ['automação com IA', 'agentes WhatsApp', 'desenvolvimento full stack', 'n8n', 'engenharia de IA', 'Riegos Dev'],
  authors: [{ name: 'Tiago — Riegos Dev' }],
  creator: 'Riegos Dev',
  metadataBase: new URL('https://riegosdev.com'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    siteName: 'Riegos Dev',
    title: 'Riegos Dev — Automação com IA & Desenvolvimento Full Stack',
    description: 'Automação inteligente, agentes para WhatsApp e desenvolvimento full stack para empresas que querem crescer.',
    url: 'https://riegosdev.com',
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
      'pt-BR': 'https://riegosdev.com',
      'en': 'https://riegosdev.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.style.backgroundColor='#0A0A0A';`,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-background text-primary`}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
