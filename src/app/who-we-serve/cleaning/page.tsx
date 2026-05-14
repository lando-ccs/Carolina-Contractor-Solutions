import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Cleaning Companies in NC & SC — CCS',
  description: 'Websites and Google Ads for residential and commercial cleaning businesses in North and South Carolina. Stand out and book more appointments.',
}

export default function CleaningPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Cleaning Businesses</div>
          <SectionLabel light>Cleaning</SectionLabel>
          <h1>More Bookings.<br /><span className="red">Less Chasing.</span></h1>
          <p>Residential, commercial, move-out, pressure washing — we build the site and run the ads that turn searchers into booked appointments. No market exclusivity required.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Get Started <span className="arrow">&#8594;</span></Link>
            <Link href="/services/web-care-plan" className="btn btn-outline-light btn-lg">See Web Care Plan</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Cleaning Companies Choose CCS</SectionLabel>
            <h2>Trust Builds<br /><span className="red">Bookings.</span></h2>
            <p>Cleaning is a high-trust service — homeowners want to feel safe letting someone into their home. We build that trust through your site, reviews, and content.</p>
          </div>
          <div className="services-grid">
            {[
              { num: '01', title: 'Conversion-First Website', body: 'A site that answers the three questions every homeowner has: Are you trustworthy? What do you charge? How do I book? In that order.', checks: ['Clear trust signals', 'Online booking integration', 'Before & after gallery', 'Review showcase section'] },
              { num: '02', title: 'Google Ads for Cleaning', body: 'We target high-intent searches — "house cleaning near me," "move-out cleaning [city]," "recurring maid service" — in your exact service ZIPs.', checks: ['High-intent keyword targeting', 'Service-type campaign split', 'ZIP code targeting', 'Call extension setup'] },
              { num: '03', title: 'Review Automation', body: 'Every completed job triggers a review request. We set up GoHighLevel to automatically ask for reviews at the right moment — without you lifting a finger.', checks: ['Post-job review requests', 'Google + Facebook', 'Review monitoring', 'Response templates'] },
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

      <section className="cta-footer">
        <div className="cta-footer-inner">
          <div className="badge badge-dark" style={{ margin: '0 auto 24px' }}><span className="pulse" />Available Nationwide</div>
          <h2>Ready to Get<br />More<br /><span className="red">Bookings?</span></h2>
          <p>Start with a Web Care Plan available nationwide, or step up to Market Domination in the Carolinas.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Get Started <span className="arrow">&#8594;</span></Link>
          <p className="cta-footer-disclaimer">Web Care Plan available everywhere · Market Domination — Carolinas only</p>
        </div>
      </section>
    </>
  )
}
