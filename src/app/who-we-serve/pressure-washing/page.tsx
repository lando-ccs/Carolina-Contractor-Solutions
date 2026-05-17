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
  title: 'Marketing for Pressure Washing Companies in NC & SC — CCS',
  description: 'Pressure washing marketing in NC & SC. Before-and-after galleries, seasonal campaigns, and quote forms that convert in one tap.',
}

const tiers = [
  { num: '01', name: 'Build Only', price: '$500–$2,000 one-time',
    body: 'A site that leads with the transformation. Before-and-after galleries, one-tap quote forms. Yours forever.',
    href: '/services/build-only', cta: 'Learn More' },
  { num: '02', name: 'Web Care Plan', price: '$500/mo + build',
    body: 'Site updated monthly with new before-and-afters, seasonal offers, and project highlights. Hosting included.',
    href: '/services/web-care-plan', cta: 'Learn More' },
  { num: '03', name: 'Market Domination', price: '$5,000/mo + ad spend',
    body: 'Seasonal campaigns + monthly content shoots + automated quote follow-up. One pressure washer per market.',
    href: '/services/market-domination', cta: 'Check Availability', featured: true, badge: 'One Per Market' },
]

const pain = [
  "You can't show transformations from a truck sign",
  "Phone photos don't sell the scale of your soft wash",
  'Quote forms with 8 fields get abandoned',
  "Spring rush comes and you don't have the campaigns ready",
]
const solution = [
  'A site that leads with side-by-side before/after galleries',
  'Monthly content shoots that keep your portfolio fresh',
  'One-tap quote forms with SMS lead alerts',
  'Pre-built seasonal campaigns (spring driveways, fall decks, etc.)',
]

const why: WhyItem[] = [
  { num: '01', icon: 'image', title: 'Before/After As The Hero',
    body: 'Every site leads with the transformation. Side-by-side galleries that sell themselves before a homeowner reads a word.',
    checks: ['Before/after galleries', 'Project portfolios', 'Image optimization', 'Mobile-first viewing'] },
  { num: '02', icon: 'calendar', title: 'Seasonal Demand Captured',
    body: 'Spring driveways. Summer house washes. Fall deck cleaning. We run campaigns that match the seasonal rhythm — and shoot fresh content along the way.',
    checks: ['Spring ad pushes', 'Monthly content shoots', 'Pre-holiday cleaning', 'Commercial sector targeting'] },
  { num: '03', icon: 'phone', title: 'Quote-To-Job In One Tap',
    body: 'Most pressure washing leads come from a 30-second decision. One-tap quote forms, SMS notifications, click-to-call structure — no friction between interest and booked job.',
    checks: ['One-tap quote forms', 'SMS lead notifications', 'Click-to-call structure', 'Form spam protection'] },
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs: FaqItem[] = [
  { q: 'Will the site show before/afters well?', a: 'Yes — galleries are central to every pressure washing site, optimized to load fast even on a phone.' },
  { q: 'Can homeowners get an instant quote?', a: 'Yes — one-tap quote forms with SMS notifications so you can respond before the lead cools off.' },
  { q: 'Do you do seasonal campaigns?', a: 'Yes — spring, summer, and fall pushes are built into Market Domination.' },
  { q: 'Do you do drone shots of large jobs?', a: 'Yes, starting July 2026 once the Part 107 certification is in hand.' },
  { q: 'Can I do commercial pressure washing only?', a: 'Yes — the service section can be configured for a commercial-only focus.' },
]

export default function PressureWashingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark"><span className="pulse" />Pressure Washing Contractors</div>
          <SectionLabel light>Pressure Washing</SectionLabel>
          <h1>Before &amp; After Sells.<br /><span className="red">We Build Around It.</span></h1>
          <p>Nothing markets pressure washing better than a great before/after. We build sites that showcase your real work and make it effortless for homeowners to get a quote.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">One pressure washer per market</span>
            <span className="hero-trust-item">Monthly content shoots</span>
            <span className="hero-trust-item">SMS lead alerts</span>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Reality</SectionLabel>
            <h2>The Work Can&apos;t<br /><span className="red">Sell From a Truck.</span></h2>
            <p>Pressure washing sells itself with before/afters — but only if homeowners can see them. Here&apos;s the gap we close.</p>
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
            <SectionLabel>Our Services for Pressure Washing</SectionLabel>
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
            <SectionLabel>Why Pressure Washers Choose CCS</SectionLabel>
            <h2>Built Around<br /><span className="red">The Transformation.</span></h2>
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
