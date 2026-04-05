'use client'

import { useState } from 'react'
import { useLocale } from '@/context/LocaleContext'
import { MessageCircle } from 'lucide-react'

export function ContactSection() {
  const { content } = useLocale()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const phone = content.contact.whatsappNumber.replace(/\D/g, '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = [
      content.contact.whatsappMessage,
      '',
      `${content.contact.form.name}: ${name}`,
      `${content.contact.form.email}: ${email}`,
      `${content.contact.form.message}: ${message}`,
    ].join('\n')
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
          {content.contact.sectionTitle}
        </p>
        <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-4 leading-tight">
          {content.contact.headline}
        </h2>
        <p className="font-body text-secondary text-base md:text-lg mb-12 max-w-xl mx-auto">
          {content.contact.subheadline}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <div>
            <label htmlFor="contact-name" className="block font-body text-sm text-secondary mb-1.5">
              {content.contact.form.name}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={content.contact.form.namePlaceholder}
              className="w-full px-4 py-3 min-h-[44px] rounded-lg bg-surface border border-surface text-primary font-body text-base placeholder:text-secondary/40 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block font-body text-sm text-secondary mb-1.5">
              {content.contact.form.email}
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.contact.form.emailPlaceholder}
              className="w-full px-4 py-3 min-h-[44px] rounded-lg bg-surface border border-surface text-primary font-body text-base placeholder:text-secondary/40 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block font-body text-sm text-secondary mb-1.5">
              {content.contact.form.message}
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={content.contact.form.messagePlaceholder}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-surface text-primary font-body text-base placeholder:text-secondary/40 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] rounded-lg bg-accent text-background font-heading font-bold text-base hover:brightness-110 active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent mt-2"
          >
            <MessageCircle className="w-5 h-5" />
            {content.contact.form.submit}
          </button>
        </form>

        {/* Direct WhatsApp link */}
        <div className="mt-10 pt-8 border-t border-surface">
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(content.contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-accent hover:text-accent/80 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{content.contact.whatsappLabel}</span>
            <span className="text-secondary/60 text-sm">{content.contact.whatsappNumber}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
