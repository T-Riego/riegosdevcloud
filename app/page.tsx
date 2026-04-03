// app/page.tsx
// Phase 1: Header + Footer shell — sections assembled in Phase 2
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Phase 2: Sections assembled here */}
      </main>
      <Footer />
    </div>
  )
}
