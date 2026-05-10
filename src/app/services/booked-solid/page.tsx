import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Booked Solid System — Google Ads + SEO for Contractors',
  description: 'Done-for-you Google Ads, SEO, and Google Business Profile management for contractors in NC & SC. 60-day lead guarantee. $2,000/month.',
}

export default function BookedSolidPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Tier 2 — Carolinas Only</div>
          <SectionLabel light>Booked Solid System</SectionLabel>
          <h1>Google Ads + SEO.<br /><span className="red">Done For You.</span></h1>
          <p>We run your Google Ads, manage your SEO, and optimize your Google Business Profile — every single month. You focus on the jobs. We fill your pipeline.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn btn-secondary btn-lg">Get Started — $2,000/mo <span className="arrow">→</span></Link>
            <Link href="/services/market-domination" className="btn btn-outline-light btn-lg">See Full System →</Link>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What's Included</SectionLabel>
            <h2>Four Pillars.<br /><span className="red">One System.</span></h2>
            <p>Everything listed below is managed by our team, every single month. No managing agencies, no ad dashboards to check.</p>
          </div>
          <div className="services-grid-2col">
            {[
              {
                num: '01', title: 'Google Ads',
                body: 'We write, launch, and continuously optimize your search campaigns. You only pay for clicks from homeowners in your service area actively searching for what you do.',
                checks: ['Keyword research + strategy', 'Ad copy written for you', 'Bid management', 'Negative keyword pruning', 'Weekly performance review'],
              },
              {
                num: '02', title: 'Local SEO',
                body: 'We build the authority that keeps your site ranking long after the ads stop. Consistent citations, on-page optimization, and monthly content updates.',
                checks: ['On-page SEO audit + fixes', 'Local citation building', 'Monthly content updates', 'Schema markup', 'Rank tracking reports'],
              },
              {
                num: '03', title: 'Google Business Profile',
                body: 'Your GBP is often the first thing a homeowner sees. We manage it like a live marketing channel — posts, reviews, photos, and Q&A.',
                checks: ['Weekly GBP posts', 'Review response management', 'Photo uploads', 'Q&A management', 'Category + attribute optimization'],
              },
              {
                num: '04', title: 'Monthly Reporting',
                body: 'A plain-English report every month. Clicks, calls, form fills, cost-per-lead. You always know exactly what your spend is doing.',
                checks: ['Lead volume breakdown', 'Cost per lead tracking', 'Campaign performance', 'SEO ranking changes', 'Recorded strategy call'],
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
            <h2>$2,000/Month<br /><span className="red">+ Ad Spend.</span></h2>
            <p>The retainer covers everything listed above. Ad spend goes directly to Google — we never mark up your media.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Month-to-Month</div>
              <div className="pricing-name">Booked Solid</div>
              <div className="pricing-price">$2,000<span>/mo</span></div>
              <div className="pricing-setup">$1,500 setup fee · Cancel anytime after 3 months</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Google Ads management', 'Local SEO', 'GBP management', 'Monthly reporting', '60-day lead guarantee'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
              </div>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-card-badge">Most Popular</div>
              <div className="pricing-tier">3-Month Commit</div>
              <div className="pricing-name">Booked Solid</div>
              <div className="pricing-price">$2,000<span>/mo</span></div>
              <div className="pricing-setup">$750 setup fee · Save $750 vs. M2M</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Everything in M2M plan', 'Reduced setup fee', 'Priority onboarding', 'Dedicated account lead', '60-day lead guarantee'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-tier">6-Month Commit</div>
              <div className="pricing-name">Booked Solid</div>
              <div className="pricing-price">$2,000<span>/mo</span></div>
              <div className="pricing-setup">Setup fee waived · Best long-term value</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Everything in 3-month plan', 'Setup fee completely waived', 'Monthly strategy calls', 'First pick on market domination', '60-day lead guarantee'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text)', marginTop: 20 }}>
            Carolinas only. We serve one contractor per trade per market. <Link href="/contact" style={{ color: 'var(--navy)', fontWeight: 600 }}>Check availability in your area →</Link>
          </p>
        </div>
      </section>

      {/* Guarantee + CTA */}
      <section className="section dark">
        <div className="section-inner">
          <div className="how-grid">
            <div className="how-head">
              <SectionLabel light>The Guarantee</SectionLabel>
              <h2 style={{ color: '#fff', fontSize: 56, marginBottom: 16 }}>60-Day<br /><span style={{ color: 'var(--red-light)' }}>Lead Guarantee.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.65, marginBottom: 32 }}>
                If your leads don't cover the retainer cost within the first 60 days, your next month is free. No negotiation.
              </p>
              <div className="steps-col">
                {[
                  { n: '01', t: 'Onboarding Call', b: 'We map your service area, best job types, and Google Ads strategy. Takes 45 minutes.' },
                  { n: '02', t: 'Launch Week', b: 'Campaigns go live within 7 days. GBP is optimized simultaneously.' },
                  { n: '03', t: 'Leads Flow In', b: 'Calls and form fills go to your phone. We monitor and tune weekly.' },
                ].map(s => (
                  <div key={s.n} className="step">
                    <div className="step-num">{s.n}</div>
                    <div><h4>{s.t}</h4><p>{s.b}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-panel">
              <div className="badge badge-dark"><span className="pulse" />Carolinas Only</div>
              <h3>Check if your market is still available.</h3>
              <p>We take one contractor per trade per market. Once your spot is locked, your competitor can't get in.</p>
              <ul className="cta-panel-feats">
                <li>NC &amp; SC contractors only</li>
                <li>One client per trade per market</li>
                <li>60-day lead guarantee</li>
                <li>No ad spend markup</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Check My Market <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell to Market Domination */}
      <div className="service-full-wrap" style={{ padding: '0 48px 96px', background: '#fff' }}>
        <div className="service-full-card">
          <div className="service-full-left">
            <div className="badge badge-navy"><span className="pulse" />Full System Available</div>
            <SectionLabel>Want More?</SectionLabel>
            <h3>Step Up to Market Domination</h3>
            <p>Add Meta Ads, 3–5 monthly on-location content shoots, and full GoHighLevel pipeline automation. One contractor per trade per market — permanently locked in.</p>
            <Link href="/services/market-domination" className="btn btn-secondary btn-lg">
              See Market Domination <span className="arrow">→</span>
            </Link>
          </div>
          <div className="service-full-right">
            <p className="includes-label">Market Domination Adds</p>
            <ul className="includes-grid">
              <li>Meta Ads Management</li>
              <li>3–5 Content Shoots/Month</li>
              <li>GoHighLevel CRM</li>
              <li>Lead Follow-Up Automation</li>
              <li>Review Generation</li>
              <li>Live Lead Dashboard</li>
              <li>Missed Call Text-Back</li>
              <li>90-Day Guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
