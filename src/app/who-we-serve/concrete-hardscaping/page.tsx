import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Concrete & Hardscaping Contractors in NC & SC — CCS',
  description: 'Concrete and hardscaping marketing in NC & SC. Drone footage, premium project galleries, and ads that win the bigger jobs.',
}

const tiers = [
  {
    num: '01',
    name: 'Build Only',
    price: '$500–$2,000 one-time',
    body: 'A site that’s mostly photo. Built around the finished work — driveways, patios, walls, walkways. Yours forever.',
    href: '/services/build-only',
    cta: 'Learn More',
  },
  {
    num: '02',
    name: 'Web Care Plan',
    price: '$500/mo + build',
    body: 'Site updated monthly with new project galleries. Hosting, maintenance, and up to 5 updates a month.',
    href: '/services/web-care-plan',
    cta: 'Learn More',
  },
  {
    num: '03',
    name: 'Market Domination',
    price: '$5,000/mo + ad spend',
    body: 'Drone footage of your projects + high-intent ads + premium positioning. One hardscaper per market.',
    href: '/services/market-domination',
    cta: 'Check Availability',
    featured: true,
  },
]

const why = [
  { num: '01', title: 'Photo-First Sites', body: 'Hardscape work is judged by sight. We design around the photography — large galleries, project case studies, finished-product hero shots.', checks: ['Full-screen project galleries', 'Before/after sections', 'Material catalogs', 'Finished-product hero shots'] },
  { num: '02', title: 'Drone Footage That Sells the Scale', body: 'Aerial shots of finished driveways, patios, and walls show scale and finish a phone photo can’t. We bring the drone to your shoots starting July 2026 (post-Part 107 cert).', checks: ['Aerial photography', 'Drone reels for ads', 'Job-site overviews', 'Property showcase video'] },
  { num: '03', title: 'High-Intent Ads', body: 'Homeowners searching "stamped concrete patio cost" or "retaining wall installer" are already ready to spend. We target the searches where the buyer has the budget.', checks: ['High-intent keyword research', 'Service-specific landing pages', 'Premium positioning copy', 'Quote-form conversion focus'] },
]

const steps = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs = [
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
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Concrete &amp; Hardscaping Contractors</div>
          <SectionLabel light>Concrete &amp; Hardscaping</SectionLabel>
          <h1>Premium Work.<br /><span className="red">Premium Presence.</span></h1>
          <p>Driveways, patios, retaining walls, walkways — your finished projects deserve a site that matches the work. We build sites that capture serious leads from homeowners ready to spend.</p>
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
            <h2>The Photo Sells<br /><span className="red">Before You Do.</span></h2>
          </div>
          <div className="pain-lead">
            <p>Big patio jobs go to the contractor whose finished work looks the best online. You build incredible projects. But the homeowner sees the photos before they see the work. Your portfolio shouldn&apos;t live on someone&apos;s phone &mdash; it should be the first thing they Google.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What We Do</SectionLabel>
            <h2>Here&apos;s What We Do<br /><span className="red">for Hardscapers.</span></h2>
          </div>
          <div className="pain-lead">
            <p>We build a site that&apos;s mostly photo. We bring the drone. We target the high-intent searches &mdash; &ldquo;stamped concrete patio cost,&rdquo; &ldquo;retaining wall installer&rdquo; &mdash; where the buyer is already ready to spend.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Services for Hardscapers</SectionLabel>
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
            <SectionLabel>Why Hardscapers Choose CCS</SectionLabel>
            <h2>Built to Win<br /><span className="red">The Bigger Jobs.</span></h2>
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
