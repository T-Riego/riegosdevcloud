// app/page.tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { WhatsAppFab } from '@/components/ui/WhatsAppFab'
import { SmoothScroll } from '@/components/ui/SmoothScroll'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SmoothScroll />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <SectionDivider />
        <PortfolioSection />
        <SectionDivider />
        <ProcessSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
