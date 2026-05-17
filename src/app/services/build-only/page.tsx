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
  title: 'Build Only — One-Time Website Build | Carolina Contractor Solutions',
  description: 'A professional contractor website, built once. $500–$2,000 one-time. You own the code, the domain, and the hosting account. No monthly fees.',
}

const pain = [
  'Locked into a $30–80/mo Wix/Squarespace bill — forever',
  'Agency owns the site and the domain — you can’t leave',
  'You can’t edit a price or a photo without filing a ticket',
  'If you stop paying, the site disappears overnight',
]
const solution = [
  'One invoice, one time — site is yours from day one',
  'Code on your GitHub, domain on your registrar, hosting on your Vercel',
  'We hand off a clean site and walk you through updating it yourself',
  '21-day bug-fix warranty in case anything breaks at launch',
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Discovery + Quote', body: '45-minute call + brand questionnaire. We send back a fixed-price quote within 48 hours.' },
  { num: '02', title: 'Build + 1 Revision', body: 'Custom Next.js site, 3–7 pages. We write the copy. One round of revisions during the build.' },
  { num: '03', title: 'Launch + Handoff', body: 'Site deploys to your Vercel + GitHub. We hand you the keys and a Google Business Profile checklist.' },
]

const faqs: FaqItem[] = [
  { q: 'What does "you own everything" actually mean?', a: 'Source code on your GitHub repo. Domain registered to your name with your registrar. Hosted on your Vercel account. If you ever want to walk away from CCS, you literally take everything with you.' },
  { q: 'What if I don’t have a Vercel account?', a: 'We walk you through setup during onboarding. The free tier handles most contractor sites; Pro is $20/mo if you outgrow it.' },
  { q: 'How is the price actually set?', a: '$500 for a simple 3-page site. $1,000–$2,000 for medium builds (5–7 pages, photo galleries, multi-service routing). $2,500+ for larger projects with custom features. You see the quote before you sign.' },
  { q: 'What happens after the 21-day warranty?', a: 'Anything you want — keep updating the site yourself, hire someone else, or roll into our Web Care Plan for ongoing maintenance. There is no auto-renewal.' },
  { q: 'Can I make edits myself after launch?', a: 'Yes. We hand off the code and walk you through the basics during handoff. If you want hands-off, that’s what Web Care is for.' },
]

export default function BuildOnlyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark">Tier 1 — Available Nationwide</div>
          <SectionLabel light>Build Only</SectionLabel>
          <h1>Your Site, Built.<br /><span className="red">You Own It.</span></h1>
          <p>A professional website built once for your contracting business. $500–$2,000+ one-time. You own everything from day one — the code, the domain, the hosting account. No subscription, no umbilical cord.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=build-only" className="btn btn-primary btn-lg">Get a Quote <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">One-time fee · no subscription</span>
            <span className="hero-trust-item">Live in 7–10 days</span>
            <span className="hero-trust-item">21-day bug-fix warranty</span>
          </div>
        </div>
      </section>

      {/* ── PAIN vs SOLUTION ── */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Trade-Off</SectionLabel>
            <h2>Rent A Site.<br /><span className="red">Or Own One.</span></h2>
            <p>Build Only is the answer if you&apos;re done renting your web presence. Pay once, own the asset, sleep at night.</p>
          </div>
          <PainSolution
            painLabel="The Subscription Trap"
            painTitle="What Most Contractors Are Stuck With"
            pain={pain}
            solutionLabel="Build Only"
            solutionTitle="A Real Site You Actually Own"
            solution={solution}
          />
        </div>
      </section>

      {/* ── WHAT YOU GET (existing 3-card pattern, kept) ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What You Get</SectionLabel>
            <h2>Built Once.<br /><span className="red">Yours Forever.</span></h2>
            <p>A real website for your business — without a monthly bill. Discovery, build, launch, and a clean handoff. You walk away owning everything.</p>
          </div>
          <div className="services-grid">
            {[
              {
                num: '01',
                title: 'Discovery & Build',
                body: 'We dig into your trade, your service area, and your best jobs — then design and build the whole site. Live in 7–10 business days from the discovery call.',
                checks: ['45-min discovery call + brand questionnaire', 'Custom Next.js site, mobile-first (3–7 pages)', 'Lead form → SMS + email to your phone', 'Local SEO basics (meta, schema, alt text)', '7–10 business day delivery', '1 round of revisions during build'],
              },
              {
                num: '02',
                title: 'Post-Launch Handoff',
                body: "Once it's live, everything lives in your accounts from day one. No umbilical cord, no hostage. If you don't have a Vercel account yet, we walk you through setup during onboarding.",
                checks: ['Deployed to your Vercel account from day one', "Vercel setup help if you don't have one", 'Domain stays with you — pay your registrar direct', 'Source code on your GitHub', 'Google Business Profile checklist', 'Clean handoff — no umbilical cord'],
              },
              {
                num: '03',
                title: 'Pricing & Warranty',
                body: 'Quoted per project before you sign. No subscription, no contract, no surprise renewals. If something breaks in the first 21 days, we fix it free.',
                checks: ['$500 base for simple 3-page builds', '$1,000–$2,000 for medium-sized builds', '$2,500+ for larger projects', '21-day bug-fix warranty included', 'Quoted per project before signing', 'No subscription, no contract'],
              },
            ].map(c => (
              <div key={c.num} className="service-card">
                <div className="service-card-num">{c.num}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul className="service-check-list" style={{ paddingTop: 20 }}>
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
            <SectionLabel>Pricing</SectionLabel>
            <h2>One-Time.<br /><span className="red">No Subscription.</span></h2>
            <p>Priced per project based on scope. Most contractor sites fall between $500 and $2,000. You get a clear quote before you sign — no surprises.</p>
          </div>

          <div className="pricing-grid-2col" style={{ gridTemplateColumns: '1fr', maxWidth: 640, marginBottom: 32 }}>
            <div className="pricing-card">
              <div className="pricing-tier">One-Time</div>
              <div className="pricing-name">Website Build</div>
              <div className="pricing-price">$500–$2,000+</div>
              <div className="pricing-setup">Quoted per project · No subscription · You own everything</div>
              <div className="pricing-desc">
                <ul className="service-check-list" style={{ marginBottom: 24 }}>
                  {['Custom 3–7 page build', 'We write all the copy', 'Mobile-first + local SEO', 'Deployed to your accounts', '21-day bug-fix warranty', 'Live in 7–10 business days'].map(f => <li key={f} className="service-check">{f}</li>)}
                </ul>
                <Link href="/contact?service=build-only" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get a Quote &rarr;</Link>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: 640, margin: '0 auto', padding: '24px 28px', background: 'rgba(0,40,104,0.04)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)' }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--navy)', marginBottom: 12 }}>Heads Up — What&apos;s Not Included</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0, fontSize: 14, color: 'var(--text)', lineHeight: 1.55 }}>
              <li>· Ongoing updates after the 21-day warranty (that&apos;s Web Care)</li>
              <li>· Hosting fees — you set up your own Vercel during onboarding (free tier works for most, Pro is $20/mo)</li>
              <li>· Domain registration — you pay your registrar directly</li>
              <li>· Marketing, ads, SEO, content shoots — Web Care or Market Domination</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section dark">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel light>How It Works</SectionLabel>
            <h2><span className="white">Three Steps.</span><br /><span className="red">Built In Two Weeks.</span></h2>
            <p>From the first call to a live site you own — under three weeks, end-to-end.</p>
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
            <h2>Common<br /><span className="red">Questions.</span></h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ── UPSELL: WEB CARE (kept from original) ── */}
      <div className="service-full-wrap" style={{ padding: '0 48px 96px', background: '#fff' }}>
        <div className="service-full-card">
          <div className="service-full-left">
            <div className="badge badge-navy"><span className="pulse" />Need Ongoing Updates?</div>
            <SectionLabel>Web Care Plan</SectionLabel>
            <h3>Want us to keep it sharp after launch?</h3>
            <p>If you&apos;d rather not touch the site yourself, the Web Care Plan covers ongoing updates, hosting, monitoring, and priority support — $500/month after your build is live.</p>
            <Link href="/services/web-care-plan" className="btn btn-primary btn-lg">
              See Web Care Plan <span className="arrow">&rarr;</span>
            </Link>
          </div>
          <div className="service-full-right">
            <p className="includes-label">Web Care Plan Adds</p>
            <ul className="includes-grid">
              <li>$500/mo ongoing care</li>
              <li>Up to 5 updates/month</li>
              <li>Hosting + monitoring</li>
              <li>Daily backups + security</li>
              <li>Performance tuning</li>
              <li>Priority support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── CTA FOOTER ── */}
      <TradeCtaFooter
        badge="21-Day Bug-Fix Warranty"
        headingTop="Get A Real Site."
        headingBottom="Without A Monthly Bill."
        body="Tell us about your business and we'll have your project quote ready within 48 hours."
        href="/contact?service=build-only"
        ctaLabel="Get A Quote"
      />
    </>
  )
}
