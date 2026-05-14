'use client'

import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { trackWhatsAppClick } from '@/lib/analytics'

type TrackedWhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  ctaId: string
  ctaLocation: string
}

export function TrackedWhatsAppLink({
  ctaId,
  ctaLocation,
  onClick,
  children,
  ...props
}: TrackedWhatsAppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppClick(ctaId, ctaLocation)
    onClick?.(event)
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  )
}
