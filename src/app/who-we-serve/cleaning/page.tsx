import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Cleaning Companies in NC & SC — CCS',
  description: 'Cleaning company marketing in NC & SC. Sites that build trust fast and turn visitors into recurring contracts.',
}

const tiers = [
  {
    num: '01',
    name: 'Build Only',
    price: '$500–$2,000 one-time',
    body: 'A trust-first cleaning site. License visible, reviews above the fold, service area mapped. Yours forever.',
    href: '/services/build-only',
    cta: 'Learn More',
  },
  {
    num: '02',
    name: 'Web Care Plan',
    price: '$500/mo + build',
    body: 'Site updated monthly with new offers, seasonal promotions, and review highlights. Hosting included.',
    href: '/services/web-care-plan',
    cta: 'Learn More',
  },
  {
    num: '03',
    name: 'Market Domination',
    price: '$5,000/mo + ad spend',
    body: 'Recurring-contract ads + content shoots + automated booking. Own the cleaning category in your city.',
    href: '/services/market-domination',
    cta: 'Check Availability',
    featured: true,
  },
]

const why = [
  { num: '01', title: 'A Trust-First Site', body: 'License visible, reviews above the fold, service area mapped. The site answers "can I trust you in my home?" before a homeowner has to ask.', checks: ['License visible', 'Reviews above the fold', 'Service area mapped', 'Online booking integration'] },
  { num: '02', title: 'Content That Builds Authority', body: 'Before/afters, testimonials, and "what’s included" videos — proof your team does the work right, every time.', checks: ['Before & after sets', 'Customer testimonials', '"What’s included" videos', 'Team photos & bios'] },
  { num: '03', title: 'Recurring-Contract Ads', body: 'Campaigns built around the recurring service model, not one-off cleans — so you fill the calendar with retainer clients.', checks: ['Recurring-model targeting', 'High-intent keywords', 'ZIP code targeting', 'Automated review requests'] },
]

const steps = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs = [
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
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Cleaning Businesses</div>
          <SectionLabel light>Cleaning</SectionLabel>
          <h1>More Bookings.<br /><span className="red">Less Chasing.</span></h1>
          <p>Residential, commercial, move-out, pressure washing — we build the site and run the ads that turn searchers into booked appointments. No market exclusivity required.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Get Started <span className="arrow">&#8594;</span></Link>
            <Link href="/services/web-care-plan" className="btn btn-outline-light btn-lg">See Web Care Plan</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>You Know The Pain</SectionLabel>
            <h2>The Website Is<br /><span className="red">The First Interview.</span></h2>
          </div>
          <div className="pain-lead">
            <p>Cleaning is built on trust. A homeowner needs to know &mdash; before they let you in &mdash; that you&apos;re licensed, reliable, and reviewed. Your website is the first interview. If it doesn&apos;t pass, they don&apos;t call.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What We Do</SectionLabel>
            <h2>Here&apos;s What We Do<br /><span className="red">for Cleaning.</span></h2>
          </div>
          <div className="pain-lead">
            <p>We build a trust-first site &mdash; reviews above the fold, service area clear, pricing transparent. We help you turn one-off cleans into recurring contracts.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Services for Cleaning</SectionLabel>
            <h2>Pick Your<br /><span className="red">Level.</span></h2>
            <p>Build Only and Web Care are available nationwide. Market Domination is one contractor per market in the Carolinas.</p>
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
          </div>
          <div className="portfolio-grid">
            <div className="port-card">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" />
                </div>
                <div className="browser-screen">
                  <img src="/assets/portfolio/zulydesktophome.webp" alt="Zuly Iyalode Cleaning website" loading="lazy" />
                </div>
              </div>
              <div className="port-card-footer">
                <span className="port-trade">Cleaning</span>
                <h4>Zuly Iyalode Cleaning</h4>
                <span className="port-sub">Cleaning Services · Myrtle Beach, SC</span>
                <a href="https://zulyiyalodecleaning.com" target="_blank" rel="noopener noreferrer" className="port-link">
                  View Live Site
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <Link href="/portfolio" className="btn btn-outline btn-lg">See More Of Our Work <span className="arrow">&#8594;</span></Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Why Cleaning Companies Choose CCS</SectionLabel>
            <h2>Trust Builds<br /><span className="red">Bookings.</span></h2>
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
          <div className="badge badge-dark" style={{ margin: '0 auto' }}><span className="pulse" />Web Care Nationwide · Market Domination Carolinas Only</div>
          <h2>Your Market<br />Might Still Be <span className="red">Open.</span></h2>
          <p>Web Care is available everywhere. Market Domination is one contractor per market &mdash; check if yours is taken.</p>
          <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
          <a href="tel:8437429776" className="cta-phone">(843) 742-9776</a>
          <a href="tel:8437429776" className="cta-text-link">Or text us directly &#8594;</a>
        </div>
      </section>
    </>
  )
}
