import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Plumbers in NC & SC — CCS',
  description: 'Plumber marketing in NC & SC. Fast sites for emergency calls, click-to-call built in, and ads that ring your phone year-round.',
}

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
            <Link href="/contact" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Plumbers Choose CCS</SectionLabel>
            <h2>We Know<br /><span className="red">Plumbing Leads.</span></h2>
            <p>Burst pipes, water heater swaps, drain backups — we know the searches, the timing, and the site speed that turns an emergency into a booked call.</p>
          </div>
          <div className="services-grid">
            {[
              { num: '01', title: 'Fast Sites Win Emergency Calls', body: 'When a pipe bursts at 9pm, the homeowner calls whoever shows up first. Sub-2-second mobile loads, click-to-call on every page, no friction.', checks: ['Sub-2s mobile load', 'Click-to-call site-wide', 'Emergency search optimization', 'Mobile-first design'] },
              { num: '02', title: 'Trust Signals That Convert', body: 'Licensed. Insured. Background-checked. Reviews placed where they matter — above the fold and near every CTA.', checks: ['License badges visible', 'Reviews placement', 'Insurance verification', 'Service guarantees'] },
              { num: '03', title: 'Seasonal Campaigns That Scale', body: 'Frozen pipes in January. AC drain backups in July. We run campaigns that match your calendar — repair, install, and emergency separated.', checks: ['Seasonal ad calendar', 'Emergency keyword targeting', 'Repair vs install separation', 'Weather-triggered campaigns'] },
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

      <section className="section dark">
        <div className="section-inner">
          <div className="how-grid">
            <div className="how-head">
              <SectionLabel light>Available Systems</SectionLabel>
              <h2 style={{ color: '#fff', fontSize: 48, marginBottom: 16 }}>Pick Your<br /><span style={{ color: 'var(--red-light)' }}>Level.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.65 }}>Both tiers are available for plumbing contractors. One contractor per trade per market in the Carolinas.</p>
            </div>
            <div className="cta-panel">
              <div className="badge badge-dark"><span className="pulse" />Carolinas Only</div>
              <h3>Check if your plumbing market is still available.</h3>
              <ul className="cta-panel-feats">
                <li>Web Care Plan — $500/month nationwide</li>
                <li>Market Domination — $5,000/month + ad spend</li>
                <li>One plumber per market in NC &amp; SC</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Check My Market <span className="arrow">&#8594;</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
