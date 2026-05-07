// app/page.tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { DiagnosticSection } from '@/components/sections/DiagnosticSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { WhatsAppFab } from '@/components/ui/WhatsAppFab'
import { SmoothScroll } from '@/components/ui/SmoothScroll'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-clip">
      <SmoothScroll />
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <DiagnosticSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
