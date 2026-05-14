import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Roofers in NC & SC — CCS',
  description: 'Google Ads, SEO, and done-for-you marketing for roofing contractors in North and South Carolina. Storm damage, repair, and replacement campaigns.',
}

export default function RoofersPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Roofing Contractors</div>
          <SectionLabel light>Roofers</SectionLabel>
          <h1>More Roofs.<br /><span className="red">Fewer Slow Weeks.</span></h1>
          <p>We put your roofing company in front of homeowners the moment they search for storm damage, repair, or full replacement — and we lock out your local competitor from doing the same.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn btn-secondary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
            <Link href="/services/market-domination" className="btn btn-outline-light btn-lg">See the Full System</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Roofers Choose CCS</SectionLabel>
            <h2>We Know<br /><span className="red">Roofing Leads.</span></h2>
            <p>Storm season, insurance claims, hail damage — we know the keywords, the timing, and the ad creative that gets homeowners to call a roofer.</p>
          </div>
          <div className="services-grid">
            {[
              { num: '01', title: 'Storm Damage Campaigns', body: 'We launch Google Ads targeting storm-damage searches the day hail hits your market. Speed matters — we move fast.', checks: ['Storm event response', 'Insurance keyword targeting', 'ZIP-level targeting', 'Emergency ad copy'] },
              { num: '02', title: 'Replacement Lead Gen', body: 'Full replacement campaigns targeting age-of-roof and neighborhood data. We reach homeowners before they even know they have a problem.', checks: ['Replacement keyword strategy', 'Before/after content ads', 'Retargeting sequences', 'Estimate form optimization'] },
              { num: '03', title: 'Jobsite Content', body: '3–5 shoots per month on your active jobs. Before/after sets, time-lapses, and crew shots that make your company look like the dominant roofer in town.', checks: ['On-site photo + video', 'Before & after sets', 'Short-form vertical cuts', 'Ad-ready delivery'] },
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
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.65 }}>Both tiers are available for roofing contractors. One contractor per trade per market in the Carolinas.</p>
            </div>
            <div className="cta-panel">
              <div className="badge badge-dark"><span className="pulse" />Carolinas Only</div>
              <h3>Check if your roofing market is still available.</h3>
              <ul className="cta-panel-feats">
                <li>Web Care Plan — $500/month nationwide</li>
                <li>Market Domination — $5,000/month + ad spend</li>
                <li>One roofer per market in NC &amp; SC</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Check My Market <span className="arrow">&#8594;</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
