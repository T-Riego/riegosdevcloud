'use client'

import { useLocale } from '@/context/LocaleContext'
import { MessageCircle } from 'lucide-react'

export function WhatsAppFab() {
  const { content } = useLocale()
  const phone = content.contact.whatsappNumber.replace(/\D/g, '')
  const msg = encodeURIComponent(content.contact.whatsappMessage)

  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle className="w-6 h-6 text-white" fill="white" strokeWidth={0} />
    </a>
  )
}
