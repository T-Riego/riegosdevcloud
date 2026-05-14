export type AnalyticsEventName =
  | 'page_viewed'
  | 'cta_clicked'
  | 'whatsapp_clicked'
  | 'nav_clicked'
  | 'outbound_link_clicked'
  | 'scroll_depth_reached'
  | 'section_viewed'

type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>

declare global {
  interface Window {
    clarity?: (command: 'event' | 'set', name: string, value?: string) => void
  }
}

const SENSITIVE_PARAMS = new Set(['email', 'phone', 'cpf', 'cnpj', 'token', 'auth', 'code', 'session', 'name', 'document'])

function sanitizePath(path: string) {
  const url = new URL(path, window.location.origin)

  for (const param of Array.from(url.searchParams.keys())) {
    if (SENSITIVE_PARAMS.has(param.toLowerCase())) {
      url.searchParams.delete(param)
    }
  }

  return `${url.pathname}${url.search}${url.hash}`
}

function cleanProperties(properties: AnalyticsProperties = {}) {
  return Object.fromEntries(
    Object.entries(properties)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, String(value)])
  )
}

export function trackEvent(eventName: AnalyticsEventName, properties: AnalyticsProperties = {}) {
  if (typeof window === 'undefined') return

  const payload = {
    event_name: eventName,
    page_path: sanitizePath(window.location.href),
    ...cleanProperties(properties),
  }

  window.clarity?.('event', eventName)
  window.dispatchEvent(new CustomEvent('riegosdev:analytics', { detail: payload }))
}

export function trackWhatsAppClick(ctaId: string, ctaLocation: string) {
  trackEvent('whatsapp_clicked', {
    cta_id: ctaId,
    cta_location: ctaLocation,
    destination_type: 'whatsapp',
  })
}
