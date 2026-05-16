import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Concrete & Hardscaping Contractors in NC & SC — CCS',
  description: 'Concrete and hardscaping marketing in NC & SC. Drone footage, premium project galleries, and ads that win the bigger jobs.',
}

export default function ConcreteHardscapingPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Concrete &amp; Hardscaping Contractors</div>
          <SectionLabel light>Concrete &amp; Hardscaping</SectionLabel>
          <h1>Premium Work.<br /><span className="red">Premium Presence.</span></h1>
          <p>Driveways, patios, retaining walls, walkways — your finished projects deserve a site that matches the work. We build sites that capture serious leads from homeowners ready to spend.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Hardscapers Choose CCS</SectionLabel>
            <h2>We Know<br /><span className="red">Hardscape Leads.</span></h2>
            <p>Hardscape work is judged by sight and won on intent. We build around the photography and target the homeowners ready to spend.</p>
          </div>
          <div className="services-grid">
            {[
              { num: '01', title: 'Visual-First Sites', body: 'Hardscape work is judged by sight. We design around the photography — large galleries, project case studies, finished-product hero shots.', checks: ['Full-screen project galleries', 'Before/after sections', 'Material catalogs', 'Aspirational design'] },
              { num: '02', title: 'Drone Footage', body: 'Aerial shots of completed driveways and patios show scale and finish. We bring the drone to your shoots starting July 2026 (post-Part 107 cert).', checks: ['Aerial photography', 'Drone reels for ads', 'Job-site overviews', 'Property showcase video'] },
              { num: '03', title: 'Big-Ticket Keyword Targeting', body: 'Homeowners searching "stamped concrete patio cost" or "retaining wall installer" are ready to spend. We target high-intent searches.', checks: ['High-intent keyword research', 'Service-specific landing pages', 'Premium positioning copy', 'Quote-form conversion focus'] },
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
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.65 }}>Both tiers are available for concrete and hardscaping contractors. One contractor per trade per market in the Carolinas.</p>
            </div>
            <div className="cta-panel">
              <div className="badge badge-dark"><span className="pulse" />Carolinas Only</div>
              <h3>Check if your hardscaping market is still available.</h3>
              <ul className="cta-panel-feats">
                <li>Web Care Plan — $500/month nationwide</li>
                <li>Market Domination — $5,000/month + ad spend</li>
                <li>One hardscaper per market in NC &amp; SC</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Check My Market <span className="arrow">&#8594;</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
