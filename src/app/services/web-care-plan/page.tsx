import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Care Plan — $500/Month Contractor Websites',
  description: 'A professional contractor website built in 5–7 days. Updates, hosting, and support included. $500/month with no setup fee.',
}

export default function WebCarePlanPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Tier 1 — Available Nationwide</div>
          <SectionLabel light>Web Care Plan</SectionLabel>
          <h1>Your Site, Built.<br /><span className="red">Maintained. Done.</span></h1>
          <p>A conversion-focused contractor website built in 5–7 days. Includes hosting, 3–5 updates per month, and zero setup fees. No contracts after the 3-month minimum.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn btn-secondary btn-lg">Get Started — $500/mo <span className="arrow">→</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What You Get</SectionLabel>
            <h2>Everything in One<br /><span className="red">Monthly Rate.</span></h2>
            <p>No hidden fees. No a-la-carte add-ons. Just a professionally built and maintained contractor website.</p>
          </div>
          <div className="services-grid">
            {[
              {
                num: '01',
                title: 'Site Built in 5–7 Days',
                body: 'We write the copy, design the pages, and launch your site in less than a week. You approve before it goes live.',
                checks: ['Custom design from scratch', 'We write all the copy', 'Mobile-first build', 'Speed-optimized'],
              },
              {
                num: '02',
                title: '3–5 Updates/Month',
                body: 'Need a new service added? Photo gallery updated? Seasonal promo? Just send us a message. We handle it.',
                checks: ['Text & image updates', 'New page additions', 'Form & CTA changes', 'Seasonal promotions'],
              },
              {
                num: '03',
                title: 'Hosting & Security Included',
                body: 'Your site lives on fast, reliable hosting with SSL included. No extra bills. No renewal surprises.',
                checks: ['Fast CDN hosting', 'SSL certificate', 'Daily backups', 'Uptime monitoring'],
              },
            ].map(c => (
              <div key={c.num} className="service-card">
                <div className="service-card-num">{c.num}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul className="service-check-list">
                  {c.checks.map(ch => <li key={ch} className="service-check">{ch}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Pricing</SectionLabel>
            <h2>Simple.<br /><span className="red">Transparent.</span></h2>
            <p>Three options. All include the same site quality — you choose how you'd like to commit.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Month-to-Month</div>
              <div className="pricing-name">Web Care Plan</div>
              <div className="pricing-price">$500<span>/mo</span></div>
              <div className="pricing-setup">3-month minimum, then month-to-month · No setup fee</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Site built in 5–7 days', '3–5 updates/month', 'Hosting included', 'SSL + backups', 'Email support'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
              </div>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-card-badge">Best Value</div>
              <div className="pricing-tier">6-Month Prepay</div>
              <div className="pricing-name">Web Care Plan</div>
              <div className="pricing-price">$2,700<span> flat</span></div>
              <div className="pricing-setup">Save $300 vs. monthly · One invoice</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Everything in monthly plan', '6 months paid upfront', 'Priority support queue', 'Quarterly review call', 'Free strategy session'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-tier">12-Month Prepay</div>
              <div className="pricing-name">Web Care Plan</div>
              <div className="pricing-price">$5,000<span> flat</span></div>
              <div className="pricing-setup">Save $1,000 vs. monthly · One invoice</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Everything in monthly plan', '12 months paid upfront', 'Highest priority support', 'Monthly strategy calls', 'Free redesign at 12 months'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section dark">
        <div className="section-inner">
          <div className="how-grid">
            <div className="how-head">
              <div className="badge badge-dark"><span className="pulse" />Available Nationwide</div>
              <h2 style={{ color: '#fff', fontSize: 56, marginBottom: 16 }}>30-Day<br /><span style={{ color: 'var(--red-light)' }}>Rebuild Guarantee.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.65 }}>If you're not happy with any section of your site within the first 30 days, we rebuild it free. No argument, no charge.</p>
            </div>
            <div className="cta-panel">
              <h3>Ready to get a site that actually books jobs?</h3>
              <p>Fill out a short form and we'll have your site spec ready within 48 hours.</p>
              <ul className="cta-panel-feats">
                <li>No setup fee</li>
                <li>Site live in 5–7 days</li>
                <li>3-month minimum, then flexible</li>
                <li>30-day satisfaction guarantee</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Start Your Site <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell */}
      <div className="service-full-wrap" style={{ padding: '0 48px 96px', background: '#fff' }}>
        <div className="service-full-card">
          <div className="service-full-left">
            <div className="badge badge-navy"><span className="pulse" />Next Level</div>
            <SectionLabel>Ready to Get More Leads?</SectionLabel>
            <h3>Add the Booked Solid System</h3>
            <p>Once your site is live, step up to the Booked Solid System — Google Ads, SEO, and Google Business Profile management that fills your pipeline. Carolinas only.</p>
            <Link href="/services/booked-solid" className="btn btn-secondary btn-lg">
              See Booked Solid System <span className="arrow">→</span>
            </Link>
          </div>
          <div className="service-full-right">
            <p className="includes-label">Booked Solid Adds</p>
            <ul className="includes-grid">
              <li>Google Ads Management</li>
              <li>Local SEO</li>
              <li>Google Business Profile</li>
              <li>Weekly Optimization</li>
              <li>Monthly Reporting</li>
              <li>60-Day Lead Guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
