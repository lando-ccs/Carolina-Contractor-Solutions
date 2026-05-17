import Link from 'next/link'
import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import PainSolution from '@/components/PainSolution'
import WhyGrid, { type WhyItem } from '@/components/WhyGrid'
import Timeline, { type TimelineStep } from '@/components/Timeline'
import Faq, { type FaqItem } from '@/components/Faq'
import TradeCtaFooter from '@/components/TradeCtaFooter'
import OurWork from '@/components/OurWork'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Marketing for Plumbers in NC & SC — CCS',
  description: 'Plumber marketing in NC & SC. Fast sites for emergency calls, click-to-call built in, and ads that ring your phone year-round.',
}

const tiers = [
  { num: '01', name: 'Build Only', price: '$500–$2,000 one-time',
    body: 'A fast, mobile-first plumbing site. Click-to-call everywhere, emergency-search optimized. Built once, yours forever.',
    href: '/services/build-only', cta: 'Learn More' },
  { num: '02', name: 'Web Care Plan', price: '$500/mo + build',
    body: 'Site updated monthly with new services, pricing, and seasonal copy. Hosting included, updates within 48 hours.',
    href: '/services/web-care-plan', cta: 'Learn More' },
  { num: '03', name: 'Market Domination', price: '$5,000/mo + ad spend',
    body: 'Emergency-search ads + content shoots of real jobs + automated lead follow-up. One plumber per market.',
    href: '/services/market-domination', cta: 'Check Availability', featured: true, badge: 'One Per Market' },
]

const pain = [
  "When a pipe bursts, the homeowner calls whoever loads first",
  'Slow mobile site = lost emergency leads',
  'No click-to-call = friction during the moment of truth',
  "Trust signals (license, insurance) aren't visible",
]
const solution = [
  'Sub-2-second mobile load, optimized for emergency searches',
  'Click-to-call on every page, above-the-fold',
  'License + insurance badges placed where they convert',
  'Year-round seasonal campaigns (frozen pipes, drain backups)',
]

const why: WhyItem[] = [
  { num: '01', icon: 'gauge', title: 'Fast Sites Win Emergency Calls',
    body: 'When a pipe bursts at 9pm, the homeowner calls whoever shows up first. Sub-2-second mobile loads, click-to-call on every page, no friction.',
    checks: ['Sub-2s mobile load', 'Click-to-call site-wide', 'Emergency-search optimized', 'Mobile-first design'] },
  { num: '02', icon: 'shield', title: 'Trust Signals That Convert',
    body: 'Licensed. Insured. Background-checked. License badges, insurance, and reviews — placed where they actually matter, above the fold and near every CTA.',
    checks: ['License badges visible', 'Insurance verification', 'Reviews placement', 'Service guarantees'] },
  { num: '03', icon: 'calendar', title: 'Year-Round Campaign Calendar',
    body: 'Frozen pipes in winter. Drain backups in summer. We run campaigns matched to the season, with leads texted to your phone in real time.',
    checks: ['Seasonal ad calendar', 'Emergency keyword targeting', 'Repair vs install split', 'Real-time lead alerts'] },
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs: FaqItem[] = [
  { q: 'Will the site handle emergency call traffic?', a: 'Yes — sub-2-second mobile load plus click-to-call site-wide. When the phone is the conversion, we make it the easiest thing on the page.' },
  { q: 'Will I rank for "plumber near me" searches?', a: 'Yes — local SEO and Google Business Profile optimization is part of every build.' },
  { q: 'Can homeowners book a quote from the site?', a: 'Yes — form submissions text your phone in real time so you can call back before the next plumber does.' },
  { q: 'Do you display certifications and insurance?', a: 'Yes — license and insurance badges get above-the-fold placement where they build trust fastest.' },
  { q: 'What if I just want a site, no ads?', a: 'Build Only or Web Care fits — no ads required. You can step up to Market Domination later if you want the full lead engine.' },
]

export default function PlumbingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark"><span className="pulse" />Plumbing Contractors</div>
          <SectionLabel light>Plumbing</SectionLabel>
          <h1>Fast Site.<br /><span className="red">First Call Wins.</span></h1>
          <p>Emergency plumbing calls go to whoever loads fastest and looks most trustworthy. We build plumbing sites that check both boxes and make it effortless to call or book.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">One plumber per market</span>
            <span className="hero-trust-item">Sub-2s mobile load</span>
            <span className="hero-trust-item">Real-time lead alerts</span>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Reality</SectionLabel>
            <h2>Slow Site,<br /><span className="red">Lost Call.</span></h2>
            <p>Emergency calls don&apos;t wait. The homeowner calls whoever shows up first. Here&apos;s the trade-off.</p>
          </div>
          <PainSolution
            painTitle="What You're Living With"
            pain={pain}
            solutionTitle="What CCS Gets You"
            solution={solution}
          />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Services for Plumbing</SectionLabel>
            <h2>Pick Your<br /><span className="red">Level.</span></h2>
            <p>Market Domination is one contractor per trade per market. Build Only and Web Care have no exclusivity.</p>
          </div>
          <div className="services-grid">
            {tiers.map(t => (
              <div key={t.num} className={`service-card${t.featured ? ' featured' : ''}`}>
                {t.badge && <div className="service-card-tier-badge">{t.badge}</div>}
                <div className="service-card-num">{t.num}</div>
                <h3>{t.name}</h3>
                <p className="tier-price">{t.price}</p>
                <p>{t.body}</p>
                <Link href={t.href} className="service-cta">{t.cta} <span className="arrow">&rarr;</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Plumbers Choose CCS</SectionLabel>
            <h2>Built for<br /><span className="red">Booked Calls.</span></h2>
          </div>
          <WhyGrid items={why} />
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel light>How It Works</SectionLabel>
            <h2><span className="white">Three Steps.</span><br /><span className="red">No Guesswork.</span></h2>
          </div>
          <Timeline steps={steps} />
        </div>
      </section>

      {/* ── OUR WORK (shared portfolio block) ── */}
      <OurWork />

      {/* ── CONTACT ── */}
      <ContactSection />

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>FAQ</SectionLabel>
            <h2>Straight<br /><span className="red">Answers.</span></h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <TradeCtaFooter />
    </>
  )
}
