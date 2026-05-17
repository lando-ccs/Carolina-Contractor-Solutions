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
  title: 'Marketing for Cleaning Companies in NC & SC — CCS',
  description: 'Cleaning company marketing in NC & SC. Sites that build trust fast and turn visitors into recurring contracts.',
}

const tiers = [
  { num: '01', name: 'Build Only', price: '$500–$2,000 one-time',
    body: 'A trust-first cleaning site. License visible, reviews above the fold, service area mapped. Yours forever.',
    href: '/services/build-only', cta: 'Learn More' },
  { num: '02', name: 'Web Care Plan', price: '$500/mo + build',
    body: 'Site updated monthly with new offers, seasonal promotions, and review highlights. Hosting included.',
    href: '/services/web-care-plan', cta: 'Learn More' },
  { num: '03', name: 'Market Domination', price: '$5,000/mo + ad spend',
    body: 'Recurring-contract ads + content shoots + automated booking. Own the cleaning category in your city.',
    href: '/services/market-domination', cta: 'Check Availability', featured: true, badge: 'Carolinas Only' },
]

const pain = [
  "A homeowner needs to know you're licensed, reliable, and reviewed",
  "Your website is the first interview — if it doesn't pass, they don't call",
  'Recurring contracts feel impossible — you keep doing one-off cleans',
  'Reviews live on Google, not where buyers actually decide',
]
const solution = [
  'License + insurance badges placed where they convert',
  'Reviews above the fold so trust is the first thing they see',
  'Recurring-contract-focused funnels and content',
  'Automated review collection that fills your Google profile',
]

const why: WhyItem[] = [
  { num: '01', icon: 'shield', title: 'A Trust-First Site',
    body: 'License visible, reviews above the fold, service area mapped. The site answers "can I trust you in my home?" before a homeowner has to ask.',
    checks: ['License visible', 'Reviews above the fold', 'Service area mapped', 'Online booking integration'] },
  { num: '02', icon: 'star', title: 'Content That Builds Authority',
    body: "Before/afters, testimonials, and \u201cwhat\u2019s included\u201d videos — proof your team does the work right, every time.",
    checks: ['Before & after sets', 'Customer testimonials', "\u201cWhat\u2019s included\u201d videos", 'Team photos & bios'] },
  { num: '03', icon: 'refresh', title: 'Recurring-Contract Ads',
    body: 'Campaigns built around the recurring service model, not one-off cleans — so you fill the calendar with retainer clients.',
    checks: ['Recurring-model targeting', 'High-intent keywords', 'ZIP code targeting', 'Automated review requests'] },
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs: FaqItem[] = [
  { q: 'How fast can I get my site live?', a: '7–10 business days from the discovery call.' },
  { q: 'Will the site help with recurring contracts vs one-off cleans?', a: 'Yes — content and funnels are built around the recurring model, not just one-time bookings.' },
  { q: 'Can I show service area maps?', a: 'Yes — service-area maps are a standard part of every cleaning site.' },
  { q: 'Do you handle review collection?', a: 'A review submission flow is on every site; full review automation comes with Market Domination.' },
  { q: 'Can I list my employees with photos and bios?', a: 'Yes — trust-building is core for cleaning sites, so team photos and bios are built in.' },
]

export default function CleaningPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark"><span className="pulse" />Cleaning Businesses</div>
          <SectionLabel light>Cleaning</SectionLabel>
          <h1>More Bookings.<br /><span className="red">Less Chasing.</span></h1>
          <p>Residential, commercial, move-out, pressure washing — we build the site and run the ads that turn searchers into booked appointments. Build Only and Web Care available nationwide.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Get Started <span className="arrow">&rarr;</span></Link>
            <Link href="/services/web-care-plan" className="btn btn-outline-light btn-lg">See Web Care Plan</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">Build &amp; Web Care nationwide</span>
            <span className="hero-trust-item">Trust-first design</span>
            <span className="hero-trust-item">Recurring-contract focus</span>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Reality</SectionLabel>
            <h2>The Website Is<br /><span className="red">The First Interview.</span></h2>
            <p>Cleaning is built on trust. Here&apos;s what passes — and what fails — a homeowner&apos;s first look.</p>
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
            <SectionLabel>Our Services for Cleaning</SectionLabel>
            <h2>Pick Your<br /><span className="red">Level.</span></h2>
            <p>Build Only and Web Care are available nationwide. Market Domination is one contractor per market in the Carolinas.</p>
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
            <SectionLabel>Why Cleaning Companies Choose CCS</SectionLabel>
            <h2>Trust Builds<br /><span className="red">Bookings.</span></h2>
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

      <TradeCtaFooter
        badge="Web Care Nationwide · Market Domination Carolinas Only"
        body="Web Care is available everywhere. Market Domination is one contractor per market — check if yours is taken."
      />
    </>
  )
}
