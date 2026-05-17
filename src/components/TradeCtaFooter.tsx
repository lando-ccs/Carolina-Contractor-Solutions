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
 * Defaults match the "Carolinas Only · One Per Market" pattern; props override
 * for trades that have nationwide availability (cleaning, etc.).
 */
export default function TradeCtaFooter({
  badge = 'Carolinas Only · One Per Market',
  headingTop = 'Your Market',
  headingBottom = 'Might Still Be Open.',
  body = "We work with one contractor per trade per market. Check if yours is taken.",
  href = '/contact?service=not-sure',
  ctaLabel = 'Check My Market',
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
