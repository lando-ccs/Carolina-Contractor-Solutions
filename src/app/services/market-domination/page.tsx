import Link from 'next/link'
import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import PainSolution from '@/components/PainSolution'
import Timeline, { type TimelineStep } from '@/components/Timeline'
import Faq, { type FaqItem } from '@/components/Faq'
import TradeCtaFooter from '@/components/TradeCtaFooter'
import OurWork from '@/components/OurWork'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Market Domination — Tier 3 · Full Marketing System for Contractors',
  description: 'Google Ads + Meta Ads + monthly on-location content shoots + full lead automation pipeline. One contractor per trade per market. $5,000/month.',
}

const pain = [
  'You’re paying three vendors and none of them talk to each other',
  'Your "ad guy" has never been to your jobsite',
  'Your competitor is showing up in feed every day — you’re invisible',
  'Leads come in, sit unread, and ghost you 48 hours later',
]
const solution = [
  'One team running ads, content, SEO, and automation — under one roof',
  'We show up to your jobs every month and shoot real footage',
  'Search + social campaigns running side-by-side, ZIP-targeted',
  'Instant lead text-back + follow-up sequences — leads never sit cold',
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Discovery Call', body: 'We confirm your trade, ZIP codes, and target job types. 30 minutes — no prep needed.' },
  { num: '02', title: 'Market Lock Confirmed', body: 'We check for existing clients in your trade + market. If open, your spot is reserved and competitors are locked out.' },
  { num: '03', title: 'Onboarding & Launch', body: 'Campaigns launch within 10 days. First content shoot scheduled within 2 weeks. Lead automation wired up.' },
  { num: '04', title: 'Monthly Cadence', body: 'Content shoots, report delivery, and strategy call every single month — forever, as long as you stay.' },
]

const faqs: FaqItem[] = [
  { q: 'What does "permanent market exclusivity" actually mean?', a: 'Once you’re signed, your direct competitor in the same trade cannot buy our service in your market. Ever. This is not a 12-month clause — it’s permanent for as long as you stay on the plan.' },
  { q: 'How is "market" defined?', a: 'Typically a metro + adjacent ZIPs (e.g. Charlotte + ring suburbs, or the Grand Strand area). We confirm the exact boundary during your discovery call before you sign.' },
  { q: 'What’s the 90-day lead guarantee?', a: 'We set a target cost-per-lead with you during onboarding based on your market. If we don’t hit it within 90 days, the next month is on us.' },
  { q: 'Do you mark up my ad spend?', a: 'No. Never. You pay Google and Meta directly. We never touch your media budget.' },
  { q: 'What happens if I cancel?', a: 'You walk away with everything. Google + Meta ad accounts, creative library, website code, contact list, GBP. No fight, no ransom.' },
  { q: 'How are content shoots scheduled?', a: 'We schedule 3 on-location shoots per month directly with you and your crew. Drone footage included once our Part 107 certification is in hand (June 2026+).' },
]

export default function MarketDominationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark"><span className="pulse" />Tier 3 &mdash; Carolinas Only &middot; One Per Market</div>
          <SectionLabel light>Market Domination</SectionLabel>
          <h1>Own Your Market.<br /><span className="red">Lock Out the Competition.</span></h1>
          <p>Google Ads + Meta Ads + 3 monthly on-location content shoots + full lead automation pipeline. One contractor per trade per market &mdash; permanently locked in.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=market-domination" className="btn btn-primary btn-lg">Check Availability &mdash; $5,000/mo <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">Carolinas only · NC &amp; SC</span>
            <span className="hero-trust-item">One contractor per market</span>
            <span className="hero-trust-item">90-day lead guarantee</span>
          </div>
        </div>
      </section>

      {/* ── PAIN vs SOLUTION ── */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Trade-Off</SectionLabel>
            <h2>Three Vendors.<br /><span className="red">Or One Team.</span></h2>
            <p>Most contractors stitch together a website guy, an ad guy, and a photographer who never met each other. Market Domination is the whole stack under one roof.</p>
          </div>
          <PainSolution
            painLabel="The DIY Stack"
            painTitle="What You're Probably Running"
            pain={pain}
            solutionLabel="Market Domination"
            solutionTitle="The Whole Operation, One Team"
            solution={solution}
          />
        </div>
      </section>

      {/* ── FIVE PILLARS (kept from original) ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2>Five Pillars.<br /><span className="red">Total Market Control.</span></h2>
            <p>Every channel, every touchpoint, managed by our team. You get an unfair advantage &mdash; and your competitor cannot buy their way in.</p>
          </div>
          <div className="services-grid-2col">
            {[
              {
                num: '01', title: 'Google Ads + SEO',
                body: 'Search campaigns, local SEO, and Google Business Profile management — fully managed every month.',
                checks: ['Google Ads management', 'Local SEO', 'Google Business Profile', 'Weekly reporting', 'Bid optimization'],
              },
              {
                num: '02', title: 'Meta Ads',
                body: 'Facebook and Instagram campaigns that put your best work in front of homeowners in your ZIP. Retargeting, lookalike audiences, and scroll-stopping creative.',
                checks: ['Campaign strategy + launch', 'Ad creative from your shoots', 'Audience targeting', 'Retargeting sequences', 'Weekly optimization'],
              },
              {
                num: '03', title: 'Monthly Content Shoots',
                body: '3 on-location shoots per month. We come to your jobsite, capture the work, and deliver edited photos and short-form video ready to run as ads. Drone footage included once our Part 107 cert is live (June 2026+).',
                checks: ['3 shoots per month', '30–50 edited photos/mo', '6–10 short-form videos/mo', 'Before & after sets', 'Drone footage (post-Part 107)'],
              },
              {
                num: '04', title: 'Lead Automation Pipeline',
                body: 'Automated follow-up set up and managed for you. Instant lead texts, appointment reminders, review generation, referral sequence, missed call text-back, and a live dashboard.',
                checks: ['Instant lead follow-up texts', 'Appointment reminders', 'Review request sequences', 'Referral automation', 'Missed call text-back', 'Live lead dashboard'],
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
          <div style={{ marginTop: 24 }}>
            <div className="service-card">
              <div className="service-card-num">05</div>
              <h3>Monthly Deliverables</h3>
              <p>Every month you receive edited content, a performance report, and a strategy call.</p>
              <ul className="service-check-list">
                {['Edited photos + video delivered', 'Ad performance report', 'SEO ranking report', 'Cost-per-lead breakdown', 'Monthly strategy call'].map(ch => (
                  <li key={ch} className="service-check">{ch}</li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <div className="service-card">
              <div className="service-card-num">06</div>
              <h3>Zapier Automation</h3>
              <p>Up to 3 active automations wired into your workflow. Light, dependable plumbing &mdash; not a bloated CRM. The three flows almost every contractor wants:</p>
              <ul className="service-check-list">
                {[
                  'Website form → instant SMS + email to you, logged to a Google Sheet',
                  'Job marked complete → automated review request to the customer',
                  'Lead aged 7 days without contact → reminder ping back to you',
                ].map(ch => (
                  <li key={ch} className="service-check">{ch}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
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
                  {['Google + Meta Ads', '3 content shoots/month', 'Lead automation pipeline', 'Live lead dashboard', '90-day lead guarantee'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact?service=market-domination" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Check Availability &rarr;</Link>
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
                <Link href="/contact?service=market-domination" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Check Availability &rarr;</Link>
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
                <Link href="/contact?service=market-domination" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Check Availability &rarr;</Link>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text)', marginTop: 20 }}>
            Carolinas only. One contractor per trade per market &mdash; permanently locked.{' '}
            <Link href="/contact?service=market-domination" style={{ color: 'var(--navy)', fontWeight: 600 }}>Check availability now &rarr;</Link>
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS (timeline replaces the old steps-col) ── */}
      <section className="section dark">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel light>How It Works</SectionLabel>
            <h2><span className="white">From Discovery</span><br /><span className="red">To Market Lock.</span></h2>
            <p>Four steps from the first call to a fully-running operation — most contractors are live inside two weeks.</p>
          </div>
          <Timeline steps={steps.slice(0, 3)} />
          <div style={{ maxWidth: 720, margin: '48px auto 0', padding: 28, border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--r-lg)', background: 'rgba(255,255,255,0.04)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>Step 04 — Forever</div>
            <h4 style={{ fontFamily: 'var(--font-h)', fontSize: 24, color: '#fff', marginBottom: 8, lineHeight: 1.1 }}>{steps[3].title}</h4>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.68)', lineHeight: 1.65, margin: 0 }}>{steps[3].body}</p>
          </div>
        </div>
      </section>

      {/* ── OUR WORK (shared portfolio block) ── */}
      <OurWork />

      {/* ── CONTACT ── */}
      <ContactSection />

      {/* ── EXCLUSIVITY GUARANTEE PANEL ── */}
      <section className="section">
        <div className="section-inner">
          <div className="how-grid">
            <div>
              <div className="how-head">
                <SectionLabel>Exclusivity</SectionLabel>
                <h2 style={{ fontSize: 56, marginBottom: 16 }}>One Contractor.<br /><span className="red">One Market.</span></h2>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--text)' }}>Once you&apos;re locked in, your direct competitor in the same trade cannot buy our service in your market. Ever. This is not a 12-month clause &mdash; it is permanent for as long as you stay.</p>
              </div>
            </div>
            <div className="cta-panel">
              <div className="badge badge-navy"><span className="pulse" />Two Guarantees, Stacked</div>
              <h3>Performance &mdash; or your next month is free.</h3>
              <p>We agree on a target cost-per-lead in onboarding based on your market. If we don&apos;t hit it within 90 days, the next month is on us.</p>
              <h3 style={{ marginTop: 20 }}>No hostage. Cancel and keep everything.</h3>
              <p>If you ever cancel, you walk away with everything &mdash; Google + Meta ad accounts, creative library, website code, contact list, GBP. No fight, no ransom.</p>
              <ul className="cta-panel-feats">
                <li>Carolinas only &mdash; NC &amp; SC</li>
                <li>Permanent market exclusivity</li>
                <li>$1,500&ndash;$3,000 ad spend recommended</li>
                <li>No ad spend markup ever</li>
              </ul>
              <Link href="/contact?service=market-domination" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Check My Market <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>FAQ</SectionLabel>
            <h2>Common<br /><span className="red">Questions.</span></h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <TradeCtaFooter
        badge="Carolinas Only · One Per Market"
        headingTop="Your Market"
        headingBottom="Might Still Be Open."
        body="We work with one contractor per trade per market. Check if yours is taken before someone else does."
        href="/contact?service=market-domination"
        ctaLabel="Check My Market"
      />
    </>
  )
}
