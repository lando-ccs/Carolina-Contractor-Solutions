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
  title: 'Web Care Plan — Contractor Websites Built & Maintained | CCS',
  description: 'Professional contractor websites starting at $500, then $500/month for ongoing maintenance, updates, and hosting. Built for the trades.',
}

const pain = [
  'Your site hasn’t been updated since you launched it',
  'You filed a ticket two weeks ago and still no reply',
  'Your last "agency" charged $300 to swap one photo',
  'You don’t know if your site is even online right now',
]
const solution = [
  'Up to 5 updates a month — text us, no ticket queue',
  '48-hour turnaround on every change',
  'Hosting, SSL, daily backups, and uptime monitoring included',
  'Quarterly site health check + annual free section refresh',
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Build & Launch', body: 'Site designed, written, built, and launched in 7–10 business days. 21-day bug-fix warranty included.' },
  { num: '02', title: 'Text Lando', body: 'Need a price changed? New job to add? Text us directly — no portals, no tickets. We ship inside 48 hours.' },
  { num: '03', title: 'Monthly Care', body: 'Hosting, monitoring, backups, and a quarterly health check run in the background. You never think about it.' },
]

const faqs: FaqItem[] = [
  { q: 'What counts as an "update"?', a: 'Copy edits, image swaps, pricing changes, seasonal banners, a new portfolio entry, a new service page, a holiday hours pop-up — anything that doesn’t require a full rebuild. Bigger structural work is quoted separately.' },
  { q: 'How do I request an update?', a: 'You text Lando directly. No portals, no tickets, no support email loop. Most changes ship inside 48 hours.' },
  { q: 'What’s the 30-day rebuild guarantee?', a: 'If you’re not happy with any section of your site within the first 30 days after launch, we rebuild it free. No argument, no charge, no upcharges.' },
  { q: 'What if I want to cancel?', a: 'After the 3-month minimum, Web Care is month-to-month. Cancel anytime. The site stays yours — code, domain, hosting all live in your accounts.' },
  { q: 'Is hosting really included?', a: 'Yes — Vercel hosting, SSL, uptime monitoring, daily backups, all baked into the $500/mo. No extra bills.' },
]

export default function WebCarePlanPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark">Tier 2 — Available Nationwide</div>
          <SectionLabel light>Web Care Plan</SectionLabel>
          <h1>Your Site, Built.<br /><span className="red">Maintained. Done.</span></h1>
          <p>A professional website built for your contracting business — starting at $500 for the build, then $500/month to keep it sharp. Updates, hosting, and support all included.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=web-care-plan" className="btn btn-primary btn-lg">Book a Call <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">Build from $500 · $500/mo after</span>
            <span className="hero-trust-item">48-hr update turnaround</span>
            <span className="hero-trust-item">30-day rebuild guarantee</span>
          </div>
        </div>
      </section>

      {/* ── PAIN vs SOLUTION ── */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Trade-Off</SectionLabel>
            <h2>Tickets &amp; Silence.<br /><span className="red">Or A Text Reply.</span></h2>
            <p>Most contractors get a site, launch it, and then watch it go stale. Web Care Plan fixes the part that breaks every other arrangement: someone actually picks up.</p>
          </div>
          <PainSolution
            painLabel="Every Other Care Plan"
            painTitle="What You're Used To"
            pain={pain}
            solutionLabel="Web Care Plan"
            solutionTitle="A Site That Actually Stays Sharp"
            solution={solution}
          />
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
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
                title: 'Site Built in 7–10 Days',
                body: 'We write the copy, design the pages, and launch your site in 7–10 business days from the discovery call. Plus a 21-day post-launch bug-fix warranty — anything broken, free to fix.',
                checks: ['Custom design from scratch', 'We write all the copy', 'Mobile-first build', '21-day bug-fix warranty'],
              },
              {
                num: '02',
                title: 'Up to 5 Updates/Month',
                body: 'Copy edits, image swaps, pricing changes, seasonal banners, a new portfolio entry. Text Lando — no tickets, no portal — and it ships inside 48 hours.',
                checks: ['Text & image updates', 'New page additions', 'Pricing & banner changes', '48-hour turnaround'],
              },
              {
                num: '03',
                title: 'Hosting & Security Included',
                body: 'Vercel hosting, SSL, and uptime monitoring all included. Same-business-day response if your site goes down. No extra bills, no renewal surprises.',
                checks: ['Vercel hosting + SSL', 'Same-day downtime response', 'Quarterly site health check', 'Annual free section refresh'],
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

      {/* ── PRICING ── */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Pricing — Step 1</SectionLabel>
            <h2>The<br /><span className="red">Website Build.</span></h2>
            <p>A one-time fee to design and build your site. Priced based on scope — most contractor sites fall between $500 and $2,000.</p>
          </div>

          <div className="pricing-grid-2col" style={{ gridTemplateColumns: '1fr', maxWidth: 640, marginBottom: 64 }}>
            <div className="pricing-card">
              <div className="pricing-tier">One-Time</div>
              <div className="pricing-name">Website Build</div>
              <div className="pricing-price"><span className="pricing-price-prefix">Starting at</span>$500</div>
              <div className="pricing-setup">Priced per project · Most sites $500–$2,000</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Custom design from scratch', 'We write all the copy', 'Mobile-first build', 'Local SEO basics', 'Live in 7–10 business days', '21-day bug-fix warranty'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact?service=web-care-plan" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get a Quote &rarr;</Link>
              </div>
            </div>
          </div>

          <div className="section-head center">
            <SectionLabel>Pricing — Step 2</SectionLabel>
            <h2>The<br /><span className="red">Web Care Plan.</span></h2>
            <p>After your build is live, pick how you want to handle ongoing care. Same site quality across all three — choose how you&apos;d like to commit.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Month-to-Month</div>
              <div className="pricing-name">Web Care Plan</div>
              <div className="pricing-price">$500<span>/mo</span></div>
              <div className="pricing-setup">3-month minimum, then month-to-month</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Up to 5 updates/month', 'Vercel hosting + SSL', 'Uptime monitoring', 'Text Lando — no tickets', '48-hour turnaround'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact?service=web-care-plan" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started &rarr;</Link>
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
                <Link href="/contact?service=web-care-plan" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started &rarr;</Link>
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
                <Link href="/contact?service=web-care-plan" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section dark">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel light>How It Works</SectionLabel>
            <h2><span className="white">Build It.</span> <span className="white">Launch It.</span><br /><span className="red">Forget About It.</span></h2>
            <p>Three steps — and after step three, you stop thinking about your website.</p>
          </div>
          <Timeline steps={steps} />
        </div>
      </section>

      {/* ── OUR WORK (shared portfolio block) ── */}
      <OurWork />

      {/* ── CONTACT ── */}
      <ContactSection />

      {/* ── FAQ ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>FAQ</SectionLabel>
            <h2>Straight<br /><span className="red">Answers.</span></h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ── UPSELL: MARKET DOMINATION (kept from original) ── */}
      <div className="service-full-wrap" style={{ padding: '0 48px 96px', background: '#fff' }}>
        <div className="service-full-card">
          <div className="service-full-left">
            <div className="badge badge-navy"><span className="pulse" />Next Level</div>
            <SectionLabel>Need the Full Marketing Operation?</SectionLabel>
            <h3>Step Up to Market Domination</h3>
            <p>Market Domination handles ads, content, and pipeline — Google + Meta ads, monthly content shoots, GBP management, and Zapier automations. One contractor per trade per market. Carolinas only.</p>
            <Link href="/services/market-domination" className="btn btn-primary btn-lg">
              See Market Domination <span className="arrow">&rarr;</span>
            </Link>
          </div>
          <div className="service-full-right">
            <p className="includes-label">Market Domination Adds</p>
            <ul className="includes-grid">
              <li>Google + Meta Ads</li>
              <li>3 content shoots/mo</li>
              <li>Local SEO + GBP</li>
              <li>Zapier automations</li>
              <li>Monthly strategy call</li>
              <li>No-hostage handoff</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── CTA FOOTER ── */}
      <TradeCtaFooter
        badge="30-Day Rebuild Guarantee"
        headingTop="Get A Site That"
        headingBottom="Actually Books Jobs."
        body="Tell us about your business and we'll have your site spec ready within 48 hours."
        href="/contact?service=web-care-plan"
        ctaLabel="Start Your Site"
      />
    </>
  )
}
