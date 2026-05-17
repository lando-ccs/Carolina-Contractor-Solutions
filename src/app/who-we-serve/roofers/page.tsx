import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Roofers in NC & SC — CCS',
  description: 'Storm-season ready websites and Google Ads for roofers in NC & SC. Get in front of homeowners the moment they search.',
}

const tiers = [
  {
    num: '01',
    name: 'Build Only',
    price: '$500–$2,000 one-time',
    body: 'Storm season’s coming. Get a roofing site that ranks before the rain hits. Built once, yours forever.',
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
  },
]

const why = [
  { num: '01', title: 'A Site That Ranks Before Storm Season', body: 'Fast site, local SEO, click-to-call on every page, and storm-related keyword targeting baked into the build — so you’re found the moment the weather turns.', checks: ['Fast mobile load', 'Local SEO baked in', 'Click-to-call site-wide', 'Storm keyword targeting'] },
  { num: '02', title: 'Real Footage of Real Roofs', body: 'Drone shots (starting July 2026), in-progress jobs, and finished work — content that proves your quality to a homeowner before they ever call.', checks: ['Drone shoots (Jul 2026)', 'In-progress job content', 'Before & after sets', 'Ad-ready delivery'] },
  { num: '03', title: 'Ads That Fire When Storms Hit', body: 'Google + Meta campaigns that activate when your area gets weather. Lead alerts hit your phone in real time so you call back first.', checks: ['Google + Meta campaigns', 'Weather-triggered launch', 'ZIP-level targeting', 'Real-time lead alerts'] },
]

const steps = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs = [
  { q: 'How fast can I get my site live?', a: '7–10 business days from the discovery call.' },
  { q: 'Will I rank for storm-related searches in my area?', a: 'Yes — local SEO and storm keyword targeting are part of every build.' },
  { q: 'Can I show insurance carrier logos on the site?', a: 'Yes, as long as you have the rights to display them.' },
  { q: 'Do you do drone footage of roof inspections?', a: 'Yes, starting July 2026 once the Part 107 certification is in hand.' },
  { q: 'What if a roofer in my market is already with you?', a: 'Web Care and Build Only have no exclusivity. Market Domination locks you in as the only roofer in your metro.' },
]

export default function RoofersPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Roofing Contractors</div>
          <SectionLabel light>Roofers</SectionLabel>
          <h1>More Roofs.<br /><span className="red">Fewer Slow Weeks.</span></h1>
          <p>We put your roofing company in front of homeowners the moment they search for storm damage, repair, or full replacement — and we lock out your local competitor from doing the same.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>You Know The Pain</SectionLabel>
            <h2>The Phone Goes<br /><span className="red">Quiet.</span></h2>
          </div>
          <div className="pain-lead">
            <p>You know the pain of slow seasons. The phone goes quiet between storms. Word-of-mouth dries up. Other roofers in your area are running ads while you&apos;re hoping the weather cooperates.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What We Do</SectionLabel>
            <h2>Here&apos;s What We Do<br /><span className="red">for Roofers.</span></h2>
          </div>
          <div className="pain-lead">
            <p>We build the roofing site you wish you had. Then we keep it sharp every month, run the ads when storm season hits, and shoot the drone footage that shows homeowners exactly what their roof should look like.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Services for Roofers</SectionLabel>
            <h2>Pick Your<br /><span className="red">Level.</span></h2>
            <p>One contractor per trade per market for Market Domination. Build Only and Web Care have no exclusivity.</p>
          </div>
          <div className="services-grid">
            {tiers.map(t => (
              <div key={t.num} className={`service-card${t.featured ? ' featured' : ''}`}>
                <div className="service-card-num">{t.num}</div>
                <h3>{t.name}</h3>
                <p className="tier-price">{t.price}</p>
                <p>{t.body}</p>
                <Link href={t.href} className="service-cta">{t.cta} <span className="arrow">&#8594;</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Work</SectionLabel>
            <h2>See It<br /><span className="red">Live.</span></h2>
            <p>Real contractor sites we&apos;ve built across the Carolinas.</p>
            <Link href="/portfolio" className="btn btn-primary btn-lg" style={{ marginTop: 8 }}>See Our Work <span className="arrow">&#8594;</span></Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Roofers Choose CCS</SectionLabel>
            <h2>Ready Before<br /><span className="red">The Storm.</span></h2>
          </div>
          <div className="services-grid">
            {why.map(c => (
              <div key={c.num} className="service-card">
                <div className="service-card-num">{c.num}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul className="service-check-list">{c.checks.map(ch => <li key={ch} className="service-check">{ch}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel light>How It Works</SectionLabel>
            <h2 className="white">Three Steps.<br /><span className="red">No Guesswork.</span></h2>
          </div>
          <div className="services-grid">
            {steps.map(s => (
              <div key={s.num} className="service-card">
                <div className="service-card-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>FAQ</SectionLabel>
            <h2>Straight<br /><span className="red">Answers.</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map(f => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <div className="cta-footer-inner">
          <div className="badge badge-dark" style={{ margin: '0 auto' }}><span className="pulse" />Carolinas Only · One Per Market</div>
          <h2>Your Market<br />Might Still Be <span className="red">Open.</span></h2>
          <p>We work with one contractor per trade per market. Check if yours is taken.</p>
          <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
          <a href="tel:8437429776" className="cta-phone">(843) 742-9776</a>
          <a href="tel:8437429776" className="cta-text-link">Or text us directly &#8594;</a>
        </div>
      </section>
    </>
  )
}
