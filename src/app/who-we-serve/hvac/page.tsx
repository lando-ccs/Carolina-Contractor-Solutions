import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for HVAC Companies in NC & SC — CCS',
  description: 'Google Ads, SEO, and done-for-you marketing for HVAC contractors in North and South Carolina. Install and service call campaigns.',
}

export default function HvacPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">HVAC Contractors</div>
          <SectionLabel light>HVAC</SectionLabel>
          <h1>More Install Calls.<br /><span className="red">Year Round.</span></h1>
          <p>We target homeowners by ZIP code, home age, and season — then put your HVAC company in front of them at the exact moment they need help. One HVAC company per market in the Carolinas.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn btn-secondary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
            <Link href="/services/market-domination" className="btn btn-outline-light btn-lg">See the Full System</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why HVAC Companies Choose CCS</SectionLabel>
            <h2>Seasonal Strategy.<br /><span className="red">Consistent Calls.</span></h2>
          </div>
          <div className="services-grid">
            {[
              { num: '01', title: 'Seasonal Campaign Rotations', body: 'Spring AC tune-ups, summer emergency calls, fall furnace prep, winter emergency heat. We switch campaigns before the season — not during it.', checks: ['Seasonal ad calendar', 'Emergency response ads', 'Tune-up campaign templates', 'Year-round coverage'] },
              { num: '02', title: 'ZIP + Home-Age Targeting', body: 'Older neighborhoods mean aging systems. We target the highest-probability homeowners in your service area with install and replacement campaigns.', checks: ['Home age data targeting', 'ZIP-level bid adjustments', 'Neighborhood segmentation', 'Install vs. service split'] },
              { num: '03', title: 'Review + Trust Building', body: 'HVAC is a high-trust purchase. We manage your Google Business Profile, automate review requests, and make your reputation impossible to ignore.', checks: ['GBP management', 'Review request automation', 'Star rating strategy', 'Response management'] },
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
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.65 }}>Both tiers available for HVAC contractors. One HVAC company per trade per market in the Carolinas.</p>
            </div>
            <div className="cta-panel">
              <div className="badge badge-dark"><span className="pulse" />Carolinas Only</div>
              <h3>Check if your HVAC market is still available.</h3>
              <ul className="cta-panel-feats">
                <li>Web Care Plan — $500/month nationwide</li>
                <li>Market Domination — $5,000/month + ad spend</li>
                <li>One HVAC company per market</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Check My Market <span className="arrow">&#8594;</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
