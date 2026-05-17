import React from 'react'
import Link from 'next/link'

interface Props {
  /** Override the small badge text above the heading */
  badge?: string
  /** Override the heading (split into two lines with red on 2nd) */
  headingTop?: string
  headingBottom?: string
  /** Override the body line */
  body?: string
  /** Where the primary CTA points */
  href?: string
  ctaLabel?: string
}

/**
 * Closing CTA block used at the bottom of every trade page.
 * Defaults close on the core "get a site that books jobs" pitch. The
 * one-per-market exclusivity claim is Market-Domination-only and lives on
 * that services page — never default it onto trade pages, which also pitch
 * Build Only and Web Care.
 */
export default function TradeCtaFooter({
  badge = 'Sites Live In 7–10 Days',
  headingTop = 'Get A Site That',
  headingBottom = 'Actually Books Jobs.',
  body = "Tell us about your business and we'll have your site spec ready within 48 hours. No retainer required to start.",
  href = '/contact?service=not-sure',
  ctaLabel = 'Start My Site',
}: Props) {
  return (
    <section className="cta-footer">
      <div className="cta-footer-inner">
        <div className="badge badge-dark"><span className="pulse" />{badge}</div>
        <h2>{headingTop}<br />{headingBottom.split(' ').slice(0, -1).join(' ')} <span className="red">{headingBottom.split(' ').slice(-1)[0]}</span></h2>
        <p>{body}</p>
        <div className="cta-footer-cta">
          <Link href={href} className="btn btn-primary btn-lg">{ctaLabel} <span className="arrow">&rarr;</span></Link>
        </div>
        <div className="cta-footer-contact">
          <a href="tel:8437429776" className="cta-phone">(843) 742-9776</a>
          <a href="tel:8437429776" className="cta-text-link">Or text us directly &rarr;</a>
        </div>
      </div>
    </section>
  )
}
