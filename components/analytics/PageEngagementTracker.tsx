'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

const SCROLL_MILESTONES = [25, 50, 75, 90, 100] as const

function getReferrerDomain() {
  if (!document.referrer) return ''

  try {
    return new URL(document.referrer).hostname
  } catch {
    return ''
  }
}

export function PageEngagementTracker() {
  useEffect(() => {
    const startedAt = Date.now()
    const reached = new Set<number>()

    trackEvent('page_viewed', {
      page_title: document.title,
      referrer_domain: getReferrerDomain(),
      viewport_bucket: window.innerWidth < 640 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
    })

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const percent = maxScroll <= 0 ? 100 : Math.round((window.scrollY / maxScroll) * 100)

      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone)
          trackEvent('scroll_depth_reached', {
            milestone_percent: milestone,
            time_to_milestone_ms: Date.now() - startedAt,
          })
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = entry.target.getAttribute('data-section-id')
          if (entry.isIntersecting && sectionId) {
            trackEvent('section_viewed', {
              section_id: sectionId,
              time_to_view_ms: Date.now() - startedAt,
            })
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.45 }
    )

    document.querySelectorAll('[data-section-id]').forEach((section) => observer.observe(section))
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return null
}
