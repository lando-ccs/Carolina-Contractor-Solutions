import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Pressure Washing Companies in NC & SC — CCS',
  description: 'Pressure washing marketing in NC & SC. Before-and-after galleries, seasonal campaigns, and quote forms that convert in one tap.',
}

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
            <Link href="/contact" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Pressure Washers Choose CCS</SectionLabel>
            <h2>We Know<br /><span className="red">What Converts.</span></h2>
            <p>The work sells itself when it's shown right. We build around the transformation and make the quote request a one-tap decision.</p>
          </div>
          <div className="services-grid">
            {[
              { num: '01', title: 'Before/After As The Hero', body: 'Every site leads with the transformation. Side-by-side galleries that sell themselves before a homeowner reads a word.', checks: ['Before/after galleries', 'Project portfolios', 'Image optimization', 'Mobile-first viewing'] },
              { num: '02', title: 'Seasonal Demand, Year-Round Visibility', body: 'Spring driveways. Summer house washes. Fall deck cleaning. We run campaigns that match the seasonal rhythm.', checks: ['Spring ad pushes', 'Commercial sector targeting', 'Pre-holiday cleaning', 'Quote-form to SMS'] },
              { num: '03', title: 'Quote-To-Job In One Tap', body: 'Most pressure washing leads come from a 30-second decision. We make the quote request a one-tap action.', checks: ['One-tap quote forms', 'SMS lead notifications', 'Click-to-call structure', 'Form spam protection'] },
            ].map(c => (
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

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Featured Work</SectionLabel>
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
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="how-grid">
            <div className="how-head">
              <SectionLabel light>Available Systems</SectionLabel>
              <h2 style={{ color: '#fff', fontSize: 48, marginBottom: 16 }}>Pick Your<br /><span style={{ color: 'var(--red-light)' }}>Level.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.65 }}>Both tiers are available for pressure washing contractors. One contractor per trade per market in the Carolinas.</p>
            </div>
            <div className="cta-panel">
              <div className="badge badge-dark"><span className="pulse" />Carolinas Only</div>
              <h3>Check if your pressure washing market is still available.</h3>
              <ul className="cta-panel-feats">
                <li>Web Care Plan — $500/month nationwide</li>
                <li>Market Domination — $5,000/month + ad spend</li>
                <li>One pressure washer per market in NC &amp; SC</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Check My Market <span className="arrow">&#8594;</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
