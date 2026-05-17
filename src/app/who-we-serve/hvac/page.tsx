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
  title: 'Marketing for HVAC Companies in NC & SC — CCS',
  description: 'HVAC marketing in NC & SC. Service and install calls every season — ZIP-targeted ads, fast sites, and content that books.',
}

const tiers = [
  { num: '01', name: 'Build Only', price: '$500–$2,000 one-time',
    body: 'A clean, mobile-first site that ranks for "AC repair" searches. Built once, yours forever.',
    href: '/services/build-only', cta: 'Learn More' },
  { num: '02', name: 'Web Care Plan', price: '$500/mo + build',
    body: 'Site updated monthly with current pricing, seasonal offers, and new service additions. Hosting included.',
    href: '/services/web-care-plan', cta: 'Learn More' },
  { num: '03', name: 'Market Domination', price: '$5,000/mo + ad spend',
    body: 'ZIP-targeted ads, monthly content shoots of your techs at work, automated follow-up for every estimate. One HVAC company per market.',
    href: '/services/market-domination', cta: 'Check Availability', featured: true, badge: 'One Per Market' },
]

const pain = [
  'Spring and fall slow down — techs sit idle',
  "Your competitor's truck is everywhere",
  "The marketing 'guy' you tried didn't actually do anything",
  "Customers don't think of you until the AC breaks",
]
const solution = [
  'Seasonal campaigns that fill your slow months',
  'ZIP-level ads + content shoots of your techs at work',
  'Fast site optimized for "AC repair near me"',
  'One HVAC company locked per market',
]

const why: WhyItem[] = [
  { num: '01', icon: 'phone', title: 'A Site Built for Service Calls',
    body: 'Fast load, click-to-call, ZIP service-area mapping, and current pricing — built so a homeowner with no AC books you in one tap.',
    checks: ['Fast mobile load', 'Click-to-call site-wide', 'ZIP service-area mapping', 'Current pricing visible'] },
  { num: '02', icon: 'camera', title: 'Content That Shows Your Techs at Work',
    body: 'Monthly job-site shoots, install videos, and real before/afters — proof your crew does the work right.',
    checks: ['Monthly job-site shoots', 'Install videos', 'Real before/afters', 'Ad-ready delivery'] },
  { num: '03', icon: 'calendar', title: 'Seasonal Campaigns That Match the Calendar',
    body: 'Spring tune-up ads, summer install push, winter heat-pump campaigns — switched before the season, not during it.',
    checks: ['Spring tune-up ads', 'Summer install push', 'Winter heat-pump campaigns', 'Year-round coverage'] },
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs: FaqItem[] = [
  { q: 'How fast can I get my site live?', a: '7–10 business days from the discovery call.' },
  { q: 'Will I rank for "AC repair near me" searches?', a: 'Yes — local SEO and Google Business Profile optimization are included.' },
  { q: 'Can I show financing options on the site?', a: "Yes — we'll build that section into the contact flow." },
  { q: 'Do you handle Google Business Profile management?', a: "Yes, that's part of Market Domination." },
  { q: 'What if I just want a site, no marketing?', a: 'Build Only is built for exactly that — no ads, no subscription required.' },
]

export default function HvacPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark"><span className="pulse" />HVAC Contractors</div>
          <SectionLabel light>HVAC</SectionLabel>
          <h1>More Install Calls.<br /><span className="red">Year Round.</span></h1>
          <p>We target homeowners by ZIP code, home age, and season — then put your HVAC company in front of them at the exact moment they need help. One HVAC company per market in the Carolinas.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">One HVAC per market</span>
            <span className="hero-trust-item">Seasonal ad calendar</span>
            <span className="hero-trust-item">90-day lead guarantee</span>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Reality</SectionLabel>
            <h2>Wrong Season,<br /><span className="red">Idle Techs.</span></h2>
            <p>You know the rhythm. Spring and fall slow down. Then everyone wakes up the day their AC dies. Here&apos;s the shift.</p>
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
            <SectionLabel>Our Services for HVAC</SectionLabel>
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
            <SectionLabel>Why HVAC Companies Choose CCS</SectionLabel>
            <h2>Seasonal Strategy.<br /><span className="red">Consistent Calls.</span></h2>
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
