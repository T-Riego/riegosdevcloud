'use client'

import { useLocale } from '@/context/LocaleContext'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { ProcessLine } from '@/components/ui/ProcessLine'

export function ProcessSection() {
  const { content } = useLocale()
  const steps = content.process.steps

  return (
    <section id="processo" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fadeUp">
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
            {content.process.sectionTitle}
          </p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-6 leading-tight">
            {content.process.headline}
          </h2>
          {content.process.subheadline && (
            <p className="font-body text-base text-secondary mb-16 max-w-3xl">
              {content.process.subheadline}
            </p>
          )}
        </AnimateOnScroll>

        {/* Desktop: horizontal timeline */}
        <AnimateOnScroll
          animation="staggerChildren"
          staggerDelay={0.12}
          className="hidden md:grid md:grid-cols-4 relative"
        >
          {/* Connector line across all steps — positioned absolutely, animates independently */}
          <ProcessLine />

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent bg-background flex items-center justify-center mb-5 z-10 shadow-[0_0_16px_rgba(0,255,255,0.1)]">
                <span className="text-accent font-heading font-bold text-sm">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-primary mb-2">
                {step.title}
              </h3>
              {step.description && (
                <p className="font-body text-sm text-secondary leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </AnimateOnScroll>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-[23px] w-px bg-accent/20" />

          <AnimateOnScroll
            animation="staggerChildren"
            staggerDelay={0.1}
            className="flex flex-col gap-10"
          >
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="absolute -left-8 top-0 w-12 h-12 rounded-full border-2 border-accent bg-background flex items-center justify-center z-10 shadow-[0_0_16px_rgba(0,255,255,0.1)]">
                  <span className="text-accent font-heading font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                <div className="pl-8 pt-1">
                  <h3 className="font-heading font-bold text-base text-primary mb-1.5">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="font-body text-sm text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </AnimateOnScroll>
        </div>

        {/* Antes e Depois */}
        {content.process.beforeAfter && (
          <AnimateOnScroll animation="fadeUp" className="mt-24 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Antes */}
              <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden transition-all hover:border-red-500/40">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
                <h3 className="font-heading font-bold text-red-400 text-xl mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {content.process.beforeAfter.beforeTitle}
                </h3>
                <ul className="space-y-4">
                  {content.process.beforeAfter.before.map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-secondary text-base">
                      <span className="text-red-500 mr-3 mt-0.5">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Depois */}
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 relative overflow-hidden transition-all hover:border-accent/40">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent/50" />
                <h3 className="font-heading font-bold text-accent text-xl mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {content.process.beforeAfter.afterTitle}
                </h3>
                <ul className="space-y-4">
                  {content.process.beforeAfter.after.map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-secondary text-base">
                      <span className="text-accent mr-3 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  )
}
