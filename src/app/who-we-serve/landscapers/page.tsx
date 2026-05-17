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
  title: 'Marketing for Landscapers in NC & SC — CCS',
  description: 'Landscaping marketing in NC & SC. Design-build leads, monthly content shoots, and campaigns that fill your estimate calendar.',
}

const tiers = [
  { num: '01', name: 'Build Only', price: '$500–$2,000 one-time',
    body: 'A site that shows your projects the way they deserve. Mobile-first, gallery-heavy, designed for the design-build buyer.',
    href: '/services/build-only', cta: 'Learn More' },
  { num: '02', name: 'Web Care Plan', price: '$500/mo + build',
    body: 'Site updated monthly with new projects, seasonal offers, and crew photos. Updates within 48 hours.',
    href: '/services/web-care-plan', cta: 'Learn More' },
  { num: '03', name: 'Market Domination', price: '$5,000/mo + ad spend',
    body: 'Monthly content shoots, design-build-focused ads, automated quote follow-up. One landscaper per market.',
    href: '/services/market-domination', cta: 'Check Availability', featured: true, badge: 'One Per Market' },
]

const pain = [
  "Design-build clients don't find you on a hand-painted truck sign",
  'The big landscapers in your market have drone footage and Instagram',
  "You're winning on craft but losing on visibility",
  'Your portfolio lives on your phone, not on Google',
]
const solution = [
  'A site built around your best finished projects',
  'Monthly content shoots of finished + in-progress builds',
  'Design-build-focused ad targeting and retargeting',
  'One landscaper locked per market — your competitor stays out',
]

const why: WhyItem[] = [
  { num: '01', icon: 'leaf', title: 'A Site Built for the Design-Build Buyer',
    body: "Gallery-heavy, premium positioning, no cheap-lawn-guy aesthetic. The site attracts the projects worth doing.",
    checks: ['Gallery-first design', 'Premium positioning copy', 'Project case studies', 'High-ticket keyword targeting'] },
  { num: '02', icon: 'camera', title: 'Monthly Content From Your Best Jobs',
    body: 'Shoots of finished projects, in-progress builds, and drone aerials starting July 2026 — content that makes a homeowner say "I want that."',
    checks: ['Finished-project shoots', 'In-progress build content', 'Drone aerials (Jul 2026)', 'Short-form social cuts'] },
  { num: '03', icon: 'target', title: 'Ads That Fill the Estimate Calendar',
    body: 'Design-build-focused targeting, seasonal pushes, and retargeting for warm leads — the right offer in front of the right buyer.',
    checks: ['Design-build targeting', 'Seasonal ad calendar', 'Warm-lead retargeting', 'Estimate form optimization'] },
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs: FaqItem[] = [
  { q: 'How fast can I get my site live?', a: '7–10 business days from the discovery call.' },
  { q: 'Will the site show my project galleries well?', a: 'Yes — designs are gallery-first for landscape contractors, built to load fast even on a phone.' },
  { q: 'Do you do drone shots of finished projects?', a: 'Yes, starting July 2026 once the Part 107 certification is in hand.' },
  { q: 'Can I display pricing on the site?', a: 'Yes, optional — most landscapers prefer a "request quote" flow instead.' },
  { q: 'What if my market already has a landscaper signed up?', a: 'Web Care and Build Only have no exclusivity. Market Domination is one-per-market.' },
]

export default function LandscapersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark"><span className="pulse" />Landscaping Contractors</div>
          <SectionLabel light>Landscapers</SectionLabel>
          <h1>Show the Work.<br /><span className="red">Book the Jobs.</span></h1>
          <p>Design-build, lawn care, hardscape, irrigation — we shoot your best projects and turn them into campaigns that fill your estimate calendar. One landscaper per market in the Carolinas.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">One landscaper per market</span>
            <span className="hero-trust-item">Monthly content shoots</span>
            <span className="hero-trust-item">90-day lead guarantee</span>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Reality</SectionLabel>
            <h2>Winning on Craft.<br /><span className="red">Losing on Visibility.</span></h2>
            <p>Big design-build dollars go to whoever shows up first online. Here&apos;s how that gap closes.</p>
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
            <SectionLabel>Our Services for Landscapers</SectionLabel>
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
            <SectionLabel>Why Landscapers Choose CCS</SectionLabel>
            <h2>Your Best Work.<br /><span className="red">Impossible to Ignore.</span></h2>
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
