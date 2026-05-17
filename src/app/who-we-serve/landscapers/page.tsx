import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Landscapers in NC & SC — CCS',
  description: 'Landscaping marketing in NC & SC. Design-build leads, monthly content shoots, and campaigns that fill your estimate calendar.',
}

const tiers = [
  {
    num: '01',
    name: 'Build Only',
    price: '$500–$2,000 one-time',
    body: 'A site that shows your projects the way they deserve. Mobile-first, gallery-heavy, designed for the design-build buyer.',
    href: '/services/build-only',
    cta: 'Learn More',
  },
  {
    num: '02',
    name: 'Web Care Plan',
    price: '$500/mo + build',
    body: 'Site updated monthly with new projects, seasonal offers, and crew photos. Updates within 48 hours.',
    href: '/services/web-care-plan',
    cta: 'Learn More',
  },
  {
    num: '03',
    name: 'Market Domination',
    price: '$5,000/mo + ad spend',
    body: 'Monthly content shoots, design-build-focused ads, automated quote follow-up. One landscaper per market.',
    href: '/services/market-domination',
    cta: 'Check Availability',
    featured: true,
  },
]

const why = [
  { num: '01', title: 'A Site Built for the Design-Build Buyer', body: 'Gallery-heavy, premium positioning, no cheap-lawn-guy aesthetic. The site attracts the projects worth doing.', checks: ['Gallery-first design', 'Premium positioning copy', 'Project case studies', 'High-ticket keyword targeting'] },
  { num: '02', title: 'Monthly Content From Your Best Jobs', body: 'Shoots of finished projects, in-progress builds, and drone aerials starting July 2026 — the content that makes a homeowner say "I want that."', checks: ['Finished-project shoots', 'In-progress build content', 'Drone aerials (Jul 2026)', 'Short-form social cuts'] },
  { num: '03', title: 'Ads That Fill the Estimate Calendar', body: 'Design-build-focused targeting, seasonal pushes, and retargeting for warm leads — the right offer in front of the right buyer.', checks: ['Design-build targeting', 'Seasonal ad calendar', 'Warm-lead retargeting', 'Estimate form optimization'] },
]

const steps = [
  { num: '01', title: 'Discovery Call', body: '30 minutes. We map your market, your goals, where the gaps are. No prep needed.' },
  { num: '02', title: 'We Build & Shoot', body: 'Your site is designed and built in 7–10 days. If content is part of the plan, we show up to your job site.' },
  { num: '03', title: 'Launch & Iterate', body: 'Site goes live. We monitor, refine, and keep it sharp. You focus on the work.' },
]

const faqs = [
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
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Landscaping Contractors</div>
          <SectionLabel light>Landscapers</SectionLabel>
          <h1>Show the Work.<br /><span className="red">Book the Jobs.</span></h1>
          <p>Design-build, lawn care, hardscape, irrigation — we shoot your best projects and turn them into campaigns that fill your estimate calendar. One landscaper per market in the Carolinas.</p>
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
            <h2>Winning on Craft.<br /><span className="red">Losing on Visibility.</span></h2>
          </div>
          <div className="pain-lead">
            <p>Design-build clients don&apos;t find you on a hand-painted truck sign anymore. The big landscaping companies in your market have polished websites, drone footage, and Instagram. You&apos;re winning on craft but losing on visibility.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>What We Do</SectionLabel>
            <h2>Here&apos;s What We Do<br /><span className="red">for Landscapers.</span></h2>
          </div>
          <div className="pain-lead">
            <p>We build the site that shows your work the way it deserves to be seen. We come out monthly to shoot your jobs. We run the ads that put your name in front of the design-build buyer in your zip.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Our Services for Landscapers</SectionLabel>
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
          </div>
          <div className="portfolio-grid">
            <div className="port-card">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" />
                </div>
                <div className="browser-screen">
                  <video src="/assets/portfolio/cblhero.mp4" autoPlay loop muted playsInline />
                </div>
              </div>
              <div className="port-card-footer">
                <span className="port-trade">Landscaping</span>
                <h4>Carolina Beach Landscaping</h4>
                <span className="port-sub">Website Design · Photo &amp; Video · Myrtle Beach, SC</span>
                <a href="https://caroliabeachlandscaping.com" target="_blank" rel="noopener noreferrer" className="port-link">
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
            <SectionLabel>Why Landscapers Choose CCS</SectionLabel>
            <h2>Your Best Work.<br /><span className="red">Impossible to Ignore.</span></h2>
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
