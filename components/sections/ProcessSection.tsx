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
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-16 leading-tight">
            {content.process.headline}
          </h2>
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
              <p className="font-body text-sm text-secondary leading-relaxed max-w-[200px]">
                {step.description}
              </p>
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
                  <p className="font-body text-sm text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
