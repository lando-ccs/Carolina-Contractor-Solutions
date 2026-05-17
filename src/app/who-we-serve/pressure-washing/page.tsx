import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Pressure Washing Companies in NC & SC — CCS',
  description: 'Pressure washing marketing in NC & SC. Before-and-after galleries, seasonal campaigns, and quote forms that convert in one tap.',
}

const tiers = [
  {
    num: '01',
    name: 'Build Only',
    price: '$500–$2,000 one-time',
    body: 'A site that leads with the transformation. Before-and-after galleries, one-tap quote forms. Yours forever.',
    href: '/services/build-only',
    cta: 'Learn More',
  },
  {
    num: '02',
    name: 'Web Care Plan',
    price: '$500/mo + build',
    body: 'Site updated monthly with new before-and-afters, seasonal offers, and project highlights. Hosting included.',
    href: '/services/web-care-plan',
    cta: 'Learn More',
  },
  {
    num: '03',
    name: 'Market Domination',
    price: '$5,000/mo + ad spend',
    body: 'Seasonal campaigns + monthly content shoots + automated quote follow-up. One pressure washer per market.',
    href: '/services/market-domination',
    cta: 'Check Availability',
    featured: true,
  },
]

const why = [
  { num: '01', title: 'Before/After As The Hero', body: 'Every site leads with the transformation. Side-by-side galleries that sell themselves before a homeowner reads a word.', checks: ['Before/after galleries', 'Project portfolios', 'Image optimization', 'Mobile-first viewing'] },
  { num: '02', title: 'Seasonal Demand Captured', body: 'Spring driveways. Summer house washes. Fall deck cleaning. We run campaigns that match the seasonal rhythm — and shoot fresh content along the way.', checks: ['Spring ad pushes', 'Monthly content shoots', 'Pre-holiday cleaning', 'Commercial sector targeting'] },
  { num: '03', title: 'Quote-To-Job In One Tap', body: 'Most pressure washing leads come from a 30-second decision. One-tap quote forms, SMS notifications, click-to-call structure — no friction between interest and booked job.', checks: ['One-tap quote forms', 'SMS lead notifications', 'Click-to-call structure', 'Form spam protection'] },
]

const steps = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs = [
  { q: 'Will the site show before/afters well?', a: 'Yes — galleries are central to every pressure washing site, optimized to load fast even on a phone.' },
  { q: 'Can homeowners get an instant quote?', a: 'Yes — one-tap quote forms with SMS notifications so you can respond before the lead cools off.' },
  { q: 'Do you do seasonal campaigns?', a: 'Yes — spring, summer, and fall pushes are built into Market Domination.' },
  { q: 'Do you do drone shots of large jobs?', a: 'Yes, starting July 2026 once the Part 107 certification is in hand.' },
  { q: 'Can I do commercial pressure washing only?', a: 'Yes — the service section can be configured for a commercial-only focus.' },
]

export default function PressureWashingPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Pressure Washing Contractors</div>
          <SectionLabel light>Pressure Washing</SectionLabel>
          <h1>Before &amp; After Sells.<br /><span className="red">We Build Around It.</span></h1>
          <p>Nothing markets pressure washing better than a great before/after. We build sites that showcase your real work and make it effortless for homeowners to get a quote.</p>
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
            <h2>The Work Can&apos;t<br /><span className="red">Sell From a Truck.</span></h2>
          </div>
          <div className="pain-lead">
            <p>Pressure washing sells itself with before/afters. But you can&apos;t show those transformations from the back of a truck. You need a site that loads fast, shows your best work, and makes the quote button impossible to miss.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What We Do</SectionLabel>
            <h2>Here&apos;s What We Do<br /><span className="red">for Pressure Washers.</span></h2>
          </div>
          <div className="pain-lead">
            <p>We build a site that leads with the transformation. Before-and-after galleries, one-tap quote forms, seasonal campaign rotation.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Services for Pressure Washing</SectionLabel>
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
          </div>
          <div className="portfolio-grid">
            <div className="port-card">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" />
                </div>
                <div className="browser-screen">
                  <img src="/assets/portfolio/Fighinting Grime Home.webp" alt="Fighting Grime Pressure Washing website" loading="lazy" />
                </div>
              </div>
              <div className="port-card-footer">
                <span className="port-trade">Pressure Washing</span>
                <h4>Fighting Grime Pressure Washing</h4>
                <span className="port-sub">Website Design · Myrtle Beach, SC</span>
                <a href="https://fightinggrimepressurewashing.com" target="_blank" rel="noopener noreferrer" className="port-link">
                  View Live Site
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <Link href="/portfolio" className="btn btn-outline btn-lg">See More Of Our Work <span className="arrow">&#8594;</span></Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Pressure Washers Choose CCS</SectionLabel>
            <h2>Built Around<br /><span className="red">The Transformation.</span></h2>
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
