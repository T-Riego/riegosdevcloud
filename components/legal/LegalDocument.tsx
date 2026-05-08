import Link from 'next/link'
import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/ui/SmoothScroll'

type LegalSection = {
  id: string
  title: string
  content: ReactNode
}

type LegalDocumentProps = {
  eyebrow: string
  title: string
  description: string
  updatedAt: string
  sections: LegalSection[]
}

const legalLinks = [
  { href: '/privacidade', label: 'Privacidade' },
  { href: '/termos', label: 'Termos' },
  { href: '/exclusao-de-dados', label: 'Exclusao de dados' },
]

export function LegalDocument({
  eyebrow,
  title,
  description,
  updatedAt,
  sections,
}: LegalDocumentProps) {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-clip bg-background">
      <SmoothScroll />
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden border-b border-outline-variant/60 px-6 pb-16 pt-28">
          <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.24),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f7f9fb_100%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-label-sm uppercase text-primary">{eyebrow}</p>
              <h1 className="mt-5 text-h1 text-on-background">{title}</h1>
              <p className="mt-6 text-body-lg text-on-surface-variant">{description}</p>
              <p className="mt-6 text-sm font-semibold text-slate-500">Ultima atualizacao: {updatedAt}</p>
            </div>
            <nav
              aria-label="Paginas legais"
              className="rounded-3xl border border-outline-variant/70 bg-white/80 p-4 shadow-sm backdrop-blur"
            >
              <p className="px-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Documentos</p>
              <div className="mt-3 grid gap-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-surface-container-low hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </section>

        <section className="px-6 py-14">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-3xl border border-outline-variant/60 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Nesta pagina</p>
                <nav className="mt-4 grid gap-2" aria-label="Secoes do documento">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-surface-container-low hover:text-primary"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="rounded-[2rem] border border-outline-variant/60 bg-white p-6 shadow-sm md:p-10">
              <div className="space-y-12">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-h3 text-slate-950">{section.title}</h2>
                    <div className="mt-5 space-y-4 text-body-md text-slate-600 [&_a]:font-semibold [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
