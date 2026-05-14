import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Care Plan — Contractor Websites Built & Maintained | CCS',
  description: 'Professional contractor websites starting at $500, then $500/month for ongoing maintenance, updates, and hosting. Built for the trades.',
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
          <p>A professional website built for your contracting business — starting at $500 for the build, then $500/month to keep it sharp. Updates, hosting, and support all included.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn btn-secondary btn-lg">Book a Call <span className="arrow">→</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What You Get</SectionLabel>
            <h2>Built Once.<br /><span className="red">Maintained Monthly.</span></h2>
            <p>The build is a one-time cost. The monthly covers everything after — updates, hosting, security, and support.</p>
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
            <SectionLabel>Pricing — Step 1</SectionLabel>
            <h2>The<br /><span className="red">Website Build.</span></h2>
            <p>A one-time fee to design and build your site. Priced based on scope — most contractor sites fall between $500 and $2,000.</p>
          </div>

          <div className="pricing-grid-2col" style={{ maxWidth: 480, marginBottom: 64 }}>
            <div className="pricing-card">
              <div className="pricing-tier">One-Time</div>
              <div className="pricing-name">Website Build</div>
              <div className="pricing-price"><span className="pricing-price-prefix">Starting at</span>$500</div>
              <div className="pricing-setup">Priced per project · Most sites $500–$2,000</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Custom design from scratch', 'We write all the copy', 'Mobile-first build', 'Local SEO basics', 'Live in 5–7 business days'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get a Quote →</Link>
              </div>
            </div>
          </div>

          <div className="section-head center">
            <SectionLabel>Pricing — Step 2</SectionLabel>
            <h2>The<br /><span className="red">Web Care Plan.</span></h2>
            <p>After your build is live, pick how you want to handle ongoing care. Same site quality across all three — choose how you'd like to commit.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Month-to-Month</div>
              <div className="pricing-name">Web Care Plan</div>
              <div className="pricing-price">$500<span>/mo</span></div>
              <div className="pricing-setup">3-month minimum, then month-to-month</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['3–5 updates/month', 'Hosting + SSL + backups', 'Uptime monitoring', 'Email support', '24–48 hr turnaround'].map(f => <li key={f} className="service-check">{f}</li>)}
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
                <li>Build quoted per project — starts at $500</li>
                <li>Site live in 5–7 days</li>
                <li>$500/mo after — 3-month minimum</li>
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
            <SectionLabel>Ready to Own Your Market?</SectionLabel>
            <h3>Step Up to Market Domination</h3>
            <p>Once your site is live, step up to Market Domination — Google Ads, Meta Ads, monthly content shoots, and full campaign management. One contractor per trade per market. Carolinas only.</p>
            <Link href="/services/market-domination" className="btn btn-secondary btn-lg">
              See Market Domination <span className="arrow">→</span>
            </Link>
          </div>
          <div className="service-full-right">
            <p className="includes-label">Market Domination Adds</p>
            <ul className="includes-grid">
              <li>Google + Meta Ads</li>
              <li>Monthly content shoots</li>
              <li>Local SEO + GBP</li>
              <li>Ad creative production</li>
              <li>Weekly optimization</li>
              <li>90-Day Lead Guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
