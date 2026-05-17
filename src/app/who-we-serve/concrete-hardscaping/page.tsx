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
  title: 'Marketing for Concrete & Hardscaping Contractors in NC & SC — CCS',
  description: 'Concrete and hardscaping marketing in NC & SC. Drone footage, premium project galleries, and ads that win the bigger jobs.',
}

const tiers = [
  { num: '01', name: 'Build Only', price: '$500–$2,000 one-time',
    body: "A site that's mostly photo. Built around the finished work — driveways, patios, walls, walkways. Yours forever.",
    href: '/services/build-only', cta: 'Learn More' },
  { num: '02', name: 'Web Care Plan', price: '$500/mo + build',
    body: 'Site updated monthly with new project galleries. Hosting, maintenance, and up to 5 updates a month.',
    href: '/services/web-care-plan', cta: 'Learn More' },
  { num: '03', name: 'Market Domination', price: '$5,000/mo + ad spend',
    body: 'Drone footage of your projects + high-intent ads + premium positioning. One hardscaper per market.',
    href: '/services/market-domination', cta: 'Check Availability', featured: true, badge: 'One Per Market' },
]

const pain = [
  "Your finished work lives on a homeowner's phone, not online",
  'Big patio jobs go to whoever has the better-looking gallery',
  'Phone shots can\'t show the scale of your driveway pours',
  'You compete on price because your presence doesn\'t justify the premium',
]
const solution = [
  'A photo-first site that loads fast even on mobile',
  'Drone footage (post-Jul 2026) that sells scale at a glance',
  'High-intent ads on "stamped concrete patio cost" searches',
  'Premium positioning that wins the bigger jobs',
]

const why: WhyItem[] = [
  { num: '01', icon: 'image', title: 'Photo-First Sites',
    body: 'Hardscape work is judged by sight. We design around the photography — large galleries, project case studies, finished-product hero shots.',
    checks: ['Full-screen project galleries', 'Before/after sections', 'Material catalogs', 'Finished-product hero shots'] },
  { num: '02', icon: 'eye', title: 'Drone Footage That Sells the Scale',
    body: 'Aerial shots of finished driveways, patios, and walls show scale and finish a phone photo can\'t. We bring the drone to your shoots starting July 2026 (post-Part 107 cert).',
    checks: ['Aerial photography', 'Drone reels for ads', 'Job-site overviews', 'Property showcase video'] },
  { num: '03', icon: 'target', title: 'High-Intent Ads',
    body: 'Homeowners searching "stamped concrete patio cost" or "retaining wall installer" are already ready to spend. We target the searches where the buyer has the budget.',
    checks: ['High-intent keyword research', 'Service-specific landing pages', 'Premium positioning copy', 'Quote-form conversion focus'] },
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs: FaqItem[] = [
  { q: 'How fast can I get my site live?', a: '7–10 business days from the discovery call.' },
  { q: 'Will the site work for showing huge project galleries?', a: 'Yes — built around large, fast-loading photo collections so your finished work loads instantly, even on a phone.' },
  { q: 'Do you do drone footage of completed work?', a: 'Yes, starting July 2026 once the Part 107 certification is in hand.' },
  { q: 'Will I rank for "stamped concrete patio cost"?', a: 'Yes — high-intent keyword targeting like that is part of Market Domination.' },
  { q: 'What about commercial work?', a: 'Yes — sites can support separate residential and commercial sections.' },
]

export default function ConcreteHardscapingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark"><span className="pulse" />Concrete &amp; Hardscaping Contractors</div>
          <SectionLabel light>Concrete &amp; Hardscaping</SectionLabel>
          <h1>Premium Work.<br /><span className="red">Premium Presence.</span></h1>
          <p>Driveways, patios, retaining walls, walkways — your finished projects deserve a site that matches the work. We build sites that capture serious leads from homeowners ready to spend.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">One hardscaper per market</span>
            <span className="hero-trust-item">Drone footage (Jul 2026+)</span>
            <span className="hero-trust-item">90-day lead guarantee</span>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Reality</SectionLabel>
            <h2>The Photo Sells<br /><span className="red">Before You Do.</span></h2>
            <p>Big patio jobs go to the contractor whose finished work looks the best online. Here&apos;s the gap we close.</p>
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
            <SectionLabel>Our Services for Hardscapers</SectionLabel>
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
            <SectionLabel>Why Hardscapers Choose CCS</SectionLabel>
            <h2>Built to Win<br /><span className="red">The Bigger Jobs.</span></h2>
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
