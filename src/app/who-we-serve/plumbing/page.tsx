import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Plumbers in NC & SC — CCS',
  description: 'Plumber marketing in NC & SC. Fast sites for emergency calls, click-to-call built in, and ads that ring your phone year-round.',
}

const tiers = [
  {
    num: '01',
    name: 'Build Only',
    price: '$500–$2,000 one-time',
    body: 'A fast, mobile-first plumbing site. Click-to-call everywhere, emergency-search optimized. Built once, yours forever.',
    href: '/services/build-only',
    cta: 'Learn More',
  },
  {
    num: '02',
    name: 'Web Care Plan',
    price: '$500/mo + build',
    body: 'Site updated monthly with new services, pricing, and seasonal copy. Hosting included, updates within 48 hours.',
    href: '/services/web-care-plan',
    cta: 'Learn More',
  },
  {
    num: '03',
    name: 'Market Domination',
    price: '$5,000/mo + ad spend',
    body: 'Emergency-search ads + content shoots of real jobs + automated lead follow-up. One plumber per market.',
    href: '/services/market-domination',
    cta: 'Check Availability',
    featured: true,
  },
]

const why = [
  { num: '01', title: 'Fast Sites Win Emergency Calls', body: 'When a pipe bursts at 9pm, the homeowner calls whoever shows up first. Sub-2-second mobile loads, click-to-call on every page, no friction.', checks: ['Sub-2s mobile load', 'Click-to-call site-wide', 'Emergency-search optimized', 'Mobile-first design'] },
  { num: '02', title: 'Trust Signals That Convert', body: 'Licensed. Insured. Background-checked. License badges, insurance, and reviews — placed where they actually matter, above the fold and near every CTA.', checks: ['License badges visible', 'Insurance verification', 'Reviews placement', 'Service guarantees'] },
  { num: '03', title: 'Year-Round Campaign Calendar', body: 'Frozen pipes in winter. Drain backups in summer. We run campaigns matched to the season, with leads texted to your phone in real time.', checks: ['Seasonal ad calendar', 'Emergency keyword targeting', 'Repair vs install split', 'Real-time lead alerts'] },
]

const steps = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs = [
  { q: 'Will the site handle emergency call traffic?', a: 'Yes — sub-2-second mobile load plus click-to-call site-wide. When the phone is the conversion, we make it the easiest thing on the page.' },
  { q: 'Will I rank for "plumber near me" searches?', a: 'Yes — local SEO and Google Business Profile optimization is part of every build.' },
  { q: 'Can homeowners book a quote from the site?', a: 'Yes — form submissions text your phone in real time so you can call back before the next plumber does.' },
  { q: 'Do you display certifications and insurance?', a: 'Yes — license and insurance badges get above-the-fold placement where they build trust fastest.' },
  { q: 'What if I just want a site, no ads?', a: 'Build Only or Web Care fits — no ads required. You can step up to Market Domination later if you want the full lead engine.' },
]

export default function PlumbingPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Plumbing Contractors</div>
          <SectionLabel light>Plumbing</SectionLabel>
          <h1>Fast Site.<br /><span className="red">First Call Wins.</span></h1>
          <p>Emergency plumbing calls go to whoever loads fastest and looks most trustworthy. We build plumbing sites that check both boxes and make it effortless to call or book.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>You Know The Pain</SectionLabel>
            <h2>Slow Site,<br /><span className="red">Lost Call.</span></h2>
          </div>
          <div className="pain-lead">
            <p>Emergency calls don&apos;t wait. When a pipe bursts, the homeowner calls whoever shows up first on Google. If your site is slow, hard to read, or missing the click-to-call &mdash; you&apos;re losing emergency leads to whoever loaded faster.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What We Do</SectionLabel>
            <h2>Here&apos;s What We Do<br /><span className="red">for Plumbers.</span></h2>
          </div>
          <div className="pain-lead">
            <p>We build a fast, mobile-first site with click-to-call on every page. Optimized for emergency searches. Trust signals placed exactly where they convert.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Services for Plumbing</SectionLabel>
            <h2>Pick Your<br /><span className="red">Level.</span></h2>
            <p>One contractor per trade per market for Market Domination. Build Only and Web Care have no exclusivity.</p>
          </div>
          <div className="services-grid">
            {tiers.map(t => (
              <div key={t.num} className={`service-card${t.featured ? ' featured' : ''}`}>
                <div className="service-card-num">{t.num}</div>
                <h3>{t.name}</h3>
                <p className="tier-price">{t.price}</p>
                <p>{t.body}</p>
                <Link href={t.href} className="service-cta">{t.cta} <span className="arrow">&#8594;</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Work</SectionLabel>
            <h2>See It<br /><span className="red">Live.</span></h2>
            <p>Real contractor sites we&apos;ve built across the Carolinas &mdash; including plumbing-adjacent service businesses.</p>
            <Link href="/portfolio" className="btn btn-primary btn-lg" style={{ marginTop: 8 }}>See Our Work <span className="arrow">&#8594;</span></Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Plumbers Choose CCS</SectionLabel>
            <h2>Built for<br /><span className="red">Booked Calls.</span></h2>
          </div>
          <div className="services-grid">
            {why.map(c => (
              <div key={c.num} className="service-card">
                <div className="service-card-num">{c.num}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul className="service-check-list">{c.checks.map(ch => <li key={ch} className="service-check">{ch}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel light>How It Works</SectionLabel>
            <h2 className="white">Three Steps.<br /><span className="red">No Guesswork.</span></h2>
          </div>
          <div className="services-grid">
            {steps.map(s => (
              <div key={s.num} className="service-card">
                <div className="service-card-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>FAQ</SectionLabel>
            <h2>Straight<br /><span className="red">Answers.</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map(f => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <div className="cta-footer-inner">
          <div className="badge badge-dark" style={{ margin: '0 auto' }}><span className="pulse" />Carolinas Only · One Per Market</div>
          <h2>Your Market<br />Might Still Be <span className="red">Open.</span></h2>
          <p>We work with one contractor per trade per market. Check if yours is taken.</p>
          <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
          <a href="tel:8437429776" className="cta-phone">(843) 742-9776</a>
          <a href="tel:8437429776" className="cta-text-link">Or text us directly &#8594;</a>
        </div>
      </section>
    </>
  )
}
