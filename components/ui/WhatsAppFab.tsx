'use client'

import { useLocale } from '@/context/LocaleContext'
import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { TrackedWhatsAppLink } from '@/components/analytics/TrackedWhatsAppLink'

export function WhatsAppFab() {
  const { content } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const phone = content.contact.whatsappNumber.replace(/\D/g, '')
  const msg = encodeURIComponent(content.contact.whatsappMessage)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.innerWidth >= 640 || window.scrollY > 520)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  return (
    <TrackedWhatsAppLink
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      ctaId="whatsapp_fab"
      ctaLocation="floating_fab"
      aria-label="WhatsApp"
      className={`${isVisible ? 'flex' : 'hidden'} fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-[#25D366] items-center justify-center shadow-lg transition-transform duration-200 ease-out cursor-pointer hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14`}
    >
      <MessageCircle className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="white" strokeWidth={0} />
    </TrackedWhatsAppLink>
  )
}
