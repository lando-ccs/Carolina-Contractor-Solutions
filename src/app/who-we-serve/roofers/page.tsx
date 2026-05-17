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
  title: 'Marketing for Roofers in NC & SC — CCS',
  description: 'Storm-season ready websites and Google Ads for roofers in NC & SC. Get in front of homeowners the moment they search.',
}

const tiers = [
  {
    num: '01',
    name: 'Build Only',
    price: '$500–$2,000 one-time',
    body: "Storm season's coming. Get a roofing site that ranks before the rain hits. Built once, yours forever.",
    href: '/services/build-only',
    cta: 'Learn More',
  },
  {
    num: '02',
    name: 'Web Care Plan',
    price: '$500/mo + build',
    body: 'Site stays sharp through every season. Photo updates after big jobs, weather-related copy swaps, 48-hr turnaround.',
    href: '/services/web-care-plan',
    cta: 'Learn More',
  },
  {
    num: '03',
    name: 'Market Domination',
    price: '$5,000/mo + ad spend',
    body: 'Storm-chase ads + monthly drone shoots + automated lead follow-up. Only one roofer per market.',
    href: '/services/market-domination',
    cta: 'Check Availability',
    featured: true,
    badge: 'One Per Market',
  },
]

const pain = [
  'Phone goes quiet between storms — referrals dry up',
  'Your competitor is running storm ads while you wait',
  "Your website (if any) doesn't book a single job",
  "Insurance carriers can't find your portfolio online",
]
const solution = [
  'A site that ranks before storm season hits',
  'Storm-triggered Google + Meta ads, ZIP-targeted',
  'Real drone footage of real roofs — proof at first glance',
  'One roofer locked per market — your competitor stays out',
]

const why: WhyItem[] = [
  { num: '01', icon: 'search',
    title: 'A Site That Ranks Before Storm Season',
    body: 'Fast site, local SEO, click-to-call on every page, and storm-related keyword targeting baked into the build — so you’re found the moment the weather turns.',
    checks: ['Fast mobile load', 'Local SEO baked in', 'Click-to-call site-wide', 'Storm keyword targeting'] },
  { num: '02', icon: 'camera',
    title: 'Real Footage of Real Roofs',
    body: 'Drone shots (starting July 2026), in-progress jobs, and finished work — content that proves your quality to a homeowner before they ever call.',
    checks: ['Drone shoots (Jul 2026)', 'In-progress job content', 'Before & after sets', 'Ad-ready delivery'] },
  { num: '03', icon: 'bolt',
    title: 'Ads That Fire When Storms Hit',
    body: 'Google + Meta campaigns that activate when your area gets weather. Lead alerts hit your phone in real time so you call back first.',
    checks: ['Google + Meta campaigns', 'Weather-triggered launch', 'ZIP-level targeting', 'Real-time lead alerts'] },
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs: FaqItem[] = [
  { q: 'How fast can I get my site live?', a: '7–10 business days from the discovery call.' },
  { q: 'Will I rank for storm-related searches in my area?', a: 'Yes — local SEO and storm keyword targeting are part of every build.' },
  { q: 'Can I show insurance carrier logos on the site?', a: 'Yes, as long as you have the rights to display them.' },
  { q: 'Do you do drone footage of roof inspections?', a: 'Yes, starting July 2026 once the Part 107 certification is in hand.' },
  { q: 'What if a roofer in my market is already with you?', a: 'Web Care and Build Only have no exclusivity. Market Domination locks you in as the only roofer in your metro.' },
]

export default function RoofersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="badge badge-dark"><span className="pulse" />Roofing Contractors</div>
          <SectionLabel light>Roofers</SectionLabel>
          <h1>More Roofs.<br /><span className="red">Fewer Slow Weeks.</span></h1>
          <p>We put your roofing company in front of homeowners the moment they search for storm damage, repair, or full replacement — and we lock out your local competitor from doing the same.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">One roofer per market</span>
            <span className="hero-trust-item">Sites live in 7–10 days</span>
            <span className="hero-trust-item">90-day lead guarantee</span>
          </div>
        </div>
      </section>

      {/* ── PAIN vs SOLUTION ── */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Reality</SectionLabel>
            <h2>The Phone Goes Quiet.<br /><span className="red">We Fix That.</span></h2>
            <p>Storm season ends and the calls dry up. Your competitor&apos;s truck is everywhere. Here&apos;s the trade-off, plain and simple.</p>
          </div>
          <PainSolution
            painTitle="You're Living With This"
            pain={pain}
            solutionTitle="What You Get Instead"
            solution={solution}
          />
        </div>
      </section>

      {/* ── TIERS ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Services for Roofers</SectionLabel>
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

      {/* ── WHY ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Roofers Choose CCS</SectionLabel>
            <h2>Ready Before<br /><span className="red">The Storm.</span></h2>
          </div>
          <WhyGrid items={why} />
        </div>
      </section>

      {/* ── HOW IT WORKS (timeline) ── */}
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

      {/* ── CTA FOOTER ── */}
      <TradeCtaFooter />
    </>
  )
}
