import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/context/LocaleContext'

// D-01, D-02, D-03: Two-font system via next/font — zero layout shift, self-hosted
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
  title: 'Riegos Dev',
  description: 'Engenharia de IA e automação inteligente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning: prevents React warning from FOUC inline script — D-18
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* D-18: Blocking inline script — runs synchronously before first paint.
            Sets dark background before ANY React hydration. Prevents white flash. */}
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
