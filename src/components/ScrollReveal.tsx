'use client'

import { useEffect } from 'react'

const SELECTORS = [
  '.section-label',
  '.why-h2', '.why-sub',
  '.industry-card',
  '.services-h2', '.services-sub',
  '.service-card',
  '.full-service-banner',
  '.hiw-h2', '.hiw-sub',
  '.step',
  '.promo-card',
  '.portfolio-h2',
  '.port-section-label',
  '.port-card',
  '.test-h2', '.test-sub',
  '.tcard',
  '.contact-h2', '.contact-sub',
  '.contact-info',
  '.contact-form-card',
  '.cta-banner h2',
  '.cta-banner p',
  '.cta-banner .btn',
].join(', ')

export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS))
    if (!els.length) return

    els.forEach((el) => el.classList.add('reveal'))

    const groupDelay = (el: HTMLElement) => {
      const parent = el.parentElement
      if (!parent) return 0
      const siblings = Array.from(parent.children).filter((c) => c.classList.contains('reveal'))
      const idx = siblings.indexOf(el)
      return idx >= 0 ? idx * 80 : 0
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = groupDelay(el)
            el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
