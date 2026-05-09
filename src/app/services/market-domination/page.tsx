import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Domination -- Full Contractor Marketing System',
  description: 'Google + Meta Ads, monthly content shoots, and full GoHighLevel automation. $5,000/month. One contractor per trade per market.',
}

export default function MarketDominationPage() {
  return (
    <>
      <section className="page-hero">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }}>
          <img src="/assets/scsvg 1.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="page-hero-inner">
          <div className="badge badge-dark"><span className="pulse" />Tier 3 &mdash; Carolinas Only &middot; One Per Market</div>
          <SectionLabel light>Market Domination</SectionLabel>
          <h1>Own Your Market.<br /><span className="red">Lock Out the Competition.</span></h1>
          <p>Google Ads + Meta Ads + 3&ndash;5 monthly on-location content shoots + full GoHighLevel pipeline automation. One contractor per trade per market &mdash; permanently locked in.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" className="btn btn-secondary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The System</SectionLabel>
            <h2>Five Pillars.<br /><span className="red">Total Market Control.</span></h2>
            <p>Every channel, every touchpoint, managed by our team. You get an unfair advantage &mdash; and your competitor cannot buy their way in.</p>
          </div>
          <div className="services-grid">
            {[
              {
                num: '01', title: 'Meta Ads',
                body: 'We run Facebook and Instagram campaigns that put your best work in front of homeowners in your ZIP. Retargeting, lookalike audiences, and scroll-stopping creative.',
                checks: ['Campaign strategy + launch', 'Ad creative from your shoots', 'Audience targeting', 'Retargeting sequences', 'Weekly optimization'],
              },
              {
                num: '02', title: 'Monthly Content Shoots',
                body: '3&ndash;5 on-location shoots per month. We come to your jobsite, capture the work, and deliver edited photos and short-form video ready to run as ads.',
                checks: ['3-5 shoots per month', 'Professional editing', 'Short-form video cuts', 'Before & after sets', 'Ad-ready deliverables'],
              },
              {
                num: '03', title: 'Google Ads + SEO',
                body: 'Everything in the Booked Solid System -- search campaigns, local SEO, and GBP management -- included and fully managed.',
                checks: ['Google Ads management', 'Local SEO', 'Google Business Profile', 'Weekly reporting', 'Bid optimization'],
              },
            ].map(c => (
              <div key={c.num} className="service-card">
                <div className="service-card-num">{c.num}</div>
                <h3>{c.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: c.body }} />
                <ul className="service-check-list">
                  {c.checks.map(ch => <li key={ch} className="service-check">{ch}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="services-grid" style={{ marginTop: 24, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              {
                num: '04', title: 'Full Pipeline Automation',
                body: 'GoHighLevel is set up, configured, and managed for you. Lead follow-up, reminders, review generation, referral sequence, missed call text-back, and a live dashboard.',
                checks: ['Instant lead follow-up texts', 'Appointment reminders', 'Review request sequences', 'Referral automation', 'Missed call text-back', 'Live lead dashboard'],
              },
              {
                num: '05', title: 'Monthly Deliverables',
                body: 'Every month you receive edited content, a performance report, and a strategy call.',
                checks: ['Edited photos + video delivered', 'Ad performance report', 'SEO ranking report', 'Cost-per-lead breakdown', 'Monthly strategy call'],
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

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Pricing</SectionLabel>
            <h2>$5,000/Month<br /><span className="red">+ Ad Spend.</span></h2>
            <p>Recommended ad spend: $1,500&ndash;$3,000/month combined Google + Meta. We never mark up your media budget.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Month-to-Month</div>
              <div className="pricing-name">Market Domination</div>
              <div className="pricing-price">$5,000<span>/mo</span></div>
              <div className="pricing-setup">$2,500 setup fee &middot; 90-day lead guarantee</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Google + Meta Ads', '3-5 content shoots/month', 'GoHighLevel automation', 'Live lead dashboard', '90-day lead guarantee'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Check Availability &#8594;</Link>
              </div>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-card-badge">Best Value</div>
              <div className="pricing-tier">3-Month Commit</div>
              <div className="pricing-name">Market Domination</div>
              <div className="pricing-price">$5,000<span>/mo</span></div>
              <div className="pricing-setup">$1,500 setup fee &middot; Save $1,000 vs M2M</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Everything in M2M plan', 'Reduced setup fee', 'Priority market lock', 'Dedicated account manager', '90-day lead guarantee'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Check Availability &#8594;</Link>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-tier">6-Month Commit</div>
              <div className="pricing-name">Market Domination</div>
              <div className="pricing-price">$5,000<span>/mo</span></div>
              <div className="pricing-setup">Setup fee waived &middot; Maximum savings</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Everything in 3-month plan', 'Setup completely waived', 'First refusal on adjacent markets', 'Quarterly deep-dive call', '90-day lead guarantee'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Check Availability &#8594;</Link>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text3)', marginTop: 20 }}>
            Carolinas only. One contractor per trade per market &mdash; permanently locked.{' '}
            <Link href="/contact" style={{ color: 'var(--navy)', fontWeight: 600 }}>Check availability now &#8594;</Link>
          </p>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="how-grid">
            <div>
              <div className="how-head">
                <SectionLabel light>Exclusivity</SectionLabel>
                <h2 style={{ color: '#fff', fontSize: 56, marginBottom: 16 }}>One Contractor.<br /><span style={{ color: 'var(--red-light)' }}>One Market.</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.65 }}>Once you are locked in, your direct competitor in the same trade cannot buy our service in your market. Ever. This is not a 12-month clause &mdash; it is permanent for as long as you stay.</p>
              </div>
              <div className="steps-col">
                {[
                  { n: '01', t: 'Discovery Call', b: 'We confirm your trade, ZIP codes, and target job types. 30 minutes.' },
                  { n: '02', t: 'Market Lock Confirmed', b: 'We check for existing clients in your trade + market. If open, your spot is reserved.' },
                  { n: '03', t: 'Onboarding & Launch', b: 'Campaigns launch within 10 days. First content shoot scheduled within 2 weeks.' },
                  { n: '04', t: 'Monthly Cadence', b: 'Content shoots, report delivery, and strategy call every single month.' },
                ].map(s => (
                  <div key={s.n} className="step">
                    <div className="step-num">{s.n}</div>
                    <div><h4>{s.t}</h4><p>{s.b}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-panel">
              <div className="badge badge-dark"><span className="pulse" />90-Day Guarantee</div>
              <h3>If your leads do not cover the retainer in 90 days &mdash; your next month is free.</h3>
              <p>We put our money where our mouth is. No negotiation.</p>
              <ul className="cta-panel-feats">
                <li>Carolinas only &mdash; NC &amp; SC</li>
                <li>Permanent market exclusivity</li>
                <li>90-day lead guarantee</li>
                <li>$1,500&ndash;$3,000 ad spend recommended</li>
                <li>No ad spend markup ever</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Check My Market <span className="arrow">&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
