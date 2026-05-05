// app/page.tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { WhatsAppFab } from '@/components/ui/WhatsAppFab'
import { SmoothScroll } from '@/components/ui/SmoothScroll'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SmoothScroll />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
