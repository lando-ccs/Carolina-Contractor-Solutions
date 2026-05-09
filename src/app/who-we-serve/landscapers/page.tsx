import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Landscapers in NC & SC — CCS',
  description: 'Websites, Google Ads, content shoots, and done-for-you marketing for landscaping contractors in North and South Carolina.',
}

export default function LandscapersPage() {
  return (
    <>
      <section className="page-hero">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }}>
          <img src="/assets/scsvg 1.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="page-hero-inner">
          <div className="badge badge-dark">Landscaping Contractors</div>
          <SectionLabel light>Landscapers</SectionLabel>
          <h1>Show the Work.<br /><span className="red">Book the Jobs.</span></h1>
          <p>Design-build, lawn care, hardscape, irrigation — we shoot your best projects and turn them into campaigns that fill your estimate calendar. One landscaper per market in the Carolinas.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn btn-secondary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Landscapers Choose CCS</SectionLabel>
            <h2>Your Best Work.<br /><span className="red">Impossible to Ignore.</span></h2>
          </div>
          <div className="services-grid">
            {[
              { num: '01', title: 'Jobsite Content Shoots', body: 'We come out 3–5 times a month and shoot your active projects. The finished transformations, the crews in action, the details that make homeowners say "I want that."', checks: ['Design-build galleries', 'Before & after shoots', 'Drone shots when applicable', 'Short-form social cuts'] },
              { num: '02', title: 'Seasonal Estimate Campaigns', body: 'Spring cleanups, summer installations, fall prep, holiday lighting — we run the right offer at the right time in your service ZIP codes.', checks: ['Seasonal ad calendar', 'Offer-based campaigns', 'Estimate form optimization', 'Retargeting for warm leads'] },
              { num: '03', title: 'Design-Build Positioning', body: 'We position you as the premium option in your market — not the cheapest lawn guy. The right content and copy attracts the projects worth doing.', checks: ['Premium positioning copy', 'Portfolio page strategy', 'High-ticket keyword targeting', 'Competitor differentiation'] },
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
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.65 }}>All three tiers available for landscapers. One landscaping company per market in the Carolinas.</p>
            </div>
            <div className="cta-panel">
              <div className="badge badge-dark"><span className="pulse" />Carolinas Only</div>
              <h3>Check if your landscaping market is still available.</h3>
              <ul className="cta-panel-feats">
                <li>Web Care Plan — $500/month nationwide</li>
                <li>Booked Solid System — $2,000/month + ad spend</li>
                <li>Market Domination — $5,000/month + ad spend</li>
                <li>One landscaper per market in NC &amp; SC</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Check My Market <span className="arrow">&#8594;</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
