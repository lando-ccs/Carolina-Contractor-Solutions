import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for HVAC Companies in NC & SC — CCS',
  description: 'HVAC marketing in NC & SC. Service and install calls every season — ZIP-targeted ads, fast sites, and content that books.',
}

const tiers = [
  {
    num: '01',
    name: 'Build Only',
    price: '$500–$2,000 one-time',
    body: 'A clean, mobile-first site that ranks for "AC repair" searches. Built once, yours forever.',
    href: '/services/build-only',
    cta: 'Learn More',
  },
  {
    num: '02',
    name: 'Web Care Plan',
    price: '$500/mo + build',
    body: 'Site updated monthly with current pricing, seasonal offers, and new service additions. Hosting included.',
    href: '/services/web-care-plan',
    cta: 'Learn More',
  },
  {
    num: '03',
    name: 'Market Domination',
    price: '$5,000/mo + ad spend',
    body: 'ZIP-targeted ads, monthly content shoots of your techs at work, automated follow-up for every estimate. One HVAC company per market.',
    href: '/services/market-domination',
    cta: 'Check Availability',
    featured: true,
  },
]

const why = [
  { num: '01', title: 'A Site Built for Service Calls', body: 'Fast load, click-to-call, ZIP service-area mapping, and current pricing — built so a homeowner with no AC books you in one tap.', checks: ['Fast mobile load', 'Click-to-call site-wide', 'ZIP service-area mapping', 'Current pricing visible'] },
  { num: '02', title: 'Content That Shows Your Techs at Work', body: 'Monthly job-site shoots, install videos, and real before/afters — proof your crew does the work right.', checks: ['Monthly job-site shoots', 'Install videos', 'Real before/afters', 'Ad-ready delivery'] },
  { num: '03', title: 'Seasonal Campaigns That Match the Calendar', body: 'Spring tune-up ads, summer install push, winter heat-pump campaigns — switched before the season, not during it.', checks: ['Spring tune-up ads', 'Summer install push', 'Winter heat-pump campaigns', 'Year-round coverage'] },
]

const steps = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs = [
  { q: 'How fast can I get my site live?', a: '7–10 business days from the discovery call.' },
  { q: 'Will I rank for "AC repair near me" searches?', a: 'Yes — local SEO and Google Business Profile optimization are included.' },
  { q: 'Can I show financing options on the site?', a: 'Yes — we’ll build that section into the contact flow.' },
  { q: 'Do you handle Google Business Profile management?', a: 'Yes, that’s part of Market Domination.' },
  { q: 'What if I just want a site, no marketing?', a: 'Build Only is built for exactly that — no ads, no subscription required.' },
]

export default function HvacPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">HVAC Contractors</div>
          <SectionLabel light>HVAC</SectionLabel>
          <h1>More Install Calls.<br /><span className="red">Year Round.</span></h1>
          <p>We target homeowners by ZIP code, home age, and season — then put your HVAC company in front of them at the exact moment they need help. One HVAC company per market in the Carolinas.</p>
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
            <h2>Wrong Season,<br /><span className="red">Idle Techs.</span></h2>
          </div>
          <div className="pain-lead">
            <p>You know what it&apos;s like when the season&apos;s wrong. Spring and fall slow down. Your techs are sitting. Your competitor&apos;s truck is everywhere. The marketing &ldquo;guy&rdquo; you tried didn&apos;t actually do anything.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What We Do</SectionLabel>
            <h2>Here&apos;s What We Do<br /><span className="red">for HVAC.</span></h2>
          </div>
          <div className="pain-lead">
            <p>We build a fast, trustworthy site that ranks for &ldquo;AC repair near me.&rdquo; Then we run seasonal campaigns that fill your slow months and stay out of the way during your busy ones.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Services for HVAC</SectionLabel>
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
            <SectionLabel>Why HVAC Companies Choose CCS</SectionLabel>
            <h2>Seasonal Strategy.<br /><span className="red">Consistent Calls.</span></h2>
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
