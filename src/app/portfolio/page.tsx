import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Contractor Websites Built to Convert | CCS',
  description: 'Real websites built for real contractors across the Carolinas. See the work.',
}

export default function PortfolioPage() {
  return (
    <>
      <div className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <SectionLabel light>Our Work</SectionLabel>
          <h1 style={{ color: '#fff', marginTop: '18px' }}>
            Work That Speaks<br /><span style={{ color: 'var(--red)' }}>For Itself.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px' }}>
            Every site is built conversion-first, trade-specific, and designed to rank. Here&apos;s what that looks like.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="portfolio-grid">

            {/* Fighting Grime */}
            <div className="port-card">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" />
                </div>
                <div className="browser-screen">
                  <img src="/assets/portfolio/Fighinting Grime Home.webp" alt="Fighting Grime Pressure Washing website" />
                </div>
              </div>
              <div className="port-card-footer">
                <span className="port-trade">Pressure Washing</span>
                <h4>Fighting Grime Pressure Washing</h4>
                <span className="port-sub">Website Design · Myrtle Beach, SC</span>
                <p className="port-desc">Myrtle Beach-based pressure washing company. Built a conversion-focused site from scratch — local SEO, click-to-call structure, and a design that earns trust in under five seconds.</p>
                <a href="https://fightinggrimepressurewashing.com" target="_blank" rel="noopener noreferrer" className="port-link">
                  View Live Site
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>

            {/* Carolina Beach Landscaping */}
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
                <p className="port-desc">Full brand build for a Carolina Beach landscaping company — custom video hero, coastal market SEO, and a site that looks as good as the work they do.</p>
                <a href="https://caroliabeachlandscaping.com" target="_blank" rel="noopener noreferrer" className="port-link">
                  View Live Site
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>

            {/* Zuly Iyalode Cleaning */}
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
                <p className="port-desc">Cleaning company site with a strong brand presence, mobile-first build, and lead capture built into every page.</p>
                <a href="https://zulyiyalodecleaning.com" target="_blank" rel="noopener noreferrer" className="port-link">
                  View Live Site
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>How We Build</SectionLabel>
            <h2>Three Steps.<br /><span className="red">No Guesswork.</span></h2>
            <p>From the first call to a site that keeps getting sharper — here&apos;s exactly how it goes.</p>
          </div>
          <div className="services-grid">
            {[
              {
                num: '01',
                title: 'Discovery Call',
                body: 'A 30-minute call to map the market, the goals, and the gaps. We figure out what your site actually needs to do before anyone touches a design.',
                checks: ['30-minute call', 'Map the market', 'Define the goals', 'Spot the gaps'],
              },
              {
                num: '02',
                title: 'Build & Shoot',
                body: 'Your site is designed and built in 7–10 days. If an on-location shoot is part of your plan, we capture real photo and video of your work — no stock.',
                checks: ['Designed + built in 7–10 days', 'We write the copy', 'On-location shoot if in plan', 'Mobile-first'],
              },
              {
                num: '03',
                title: 'Launch & Iterate',
                body: 'We deploy, monitor, and refine. The site goes live, then keeps getting sharper — updates, fixes, and improvements over time.',
                checks: ['Deploy + monitor', 'Ongoing refinement', '21-day bug-fix warranty', 'Keeps getting sharper'],
              },
            ].map(c => (
              <div key={c.num} className="service-card">
                <div className="service-card-num">{c.num}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul className="service-check-list">
                  {c.checks.map(ch => <li key={ch} className="service-check">{ch}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For These Trades */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Built For These Trades</SectionLabel>
            <h2>We Know<br /><span className="red">Your Business.</span></h2>
            <p>Every site is built trade-specific. Find yours.</p>
          </div>
          <div className="services-grid">
            {[
              { trade: 'Roofers', hook: 'Storm season or slow season — keep the phone ringing.', href: '/who-we-serve/roofers' },
              { trade: 'HVAC', hook: 'Heating and cooling calls before your competitor.', href: '/who-we-serve/hvac' },
              { trade: 'Landscapers', hook: 'More design-build jobs. Less chasing referrals.', href: '/who-we-serve/landscapers' },
              { trade: 'Concrete & Hardscaping', hook: 'Premium work deserves a presence that matches.', href: '/who-we-serve/concrete-hardscaping' },
              { trade: 'Cleaning', hook: 'Recurring contracts, not one-off jobs.', href: '/who-we-serve/cleaning' },
              { trade: 'Plumbing', hook: 'Be the name homeowners call when something breaks.', href: '/who-we-serve/plumbing' },
              { trade: 'Pressure Washing', hook: 'Seasonal demand, year-round visibility.', href: '/who-we-serve/pressure-washing' },
            ].map(t => (
              <Link key={t.href} href={t.href} className="service-card" style={{ textDecoration: 'none' }}>
                <h3>{t.trade}</h3>
                <p>{t.hook}</p>
                <span className="port-link" style={{ marginTop: 'auto' }}>
                  See {t.trade} <span className="arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="section alt">
        <div className="section-inner">
          <div style={{
            background: 'var(--navy)',
            borderRadius: 16,
            padding: '56px 48px',
            textAlign: 'center',
          }}>
            <h2 style={{ color: '#fff', marginBottom: 12 }}>
              Your market might<br /><span style={{ color: 'var(--red)' }}>still be open.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, lineHeight: 1.6, maxWidth: 480, margin: '0 auto 28px' }}>
              We work with one contractor per trade per market. Find out if yours is taken.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">Check My Market <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* Pick Your Plan */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Pick Your Plan</SectionLabel>
            <h2>Three Tiers.<br /><span className="red">One Goal.</span></h2>
            <p>More calls, more booked jobs. Pick the one that fits where you are right now.</p>
          </div>
          <div className="pricing-grid">
            {[
              {
                tier: 'One-Time',
                name: 'Build Only',
                price: '$500–$2,000+',
                priceSuffix: ' one-time',
                setup: 'A real site. You own it. Done.',
                checks: ['Custom design from scratch', 'You own everything, day one', 'Mobile-first + local SEO', '21-day bug-fix warranty'],
                href: '/services/build-only',
                featured: false,
              },
              {
                tier: 'Most Popular',
                name: 'Web Care Plan',
                price: '$500',
                priceSuffix: '/mo + build',
                setup: 'Site built and maintained every month.',
                checks: ['Everything in Build Only', 'Up to 5 updates/month', 'Hosting + security included', 'Text Lando — no tickets'],
                href: '/services/web-care-plan',
                featured: true,
              },
              {
                tier: 'Carolinas Only',
                name: 'Market Domination',
                price: '$5,000',
                priceSuffix: '/mo + ad spend',
                setup: 'Full marketing operation, one contractor per market.',
                checks: ['Everything in Web Care', 'Google + Meta Ads', '3 content shoots/month', 'Permanent market exclusivity'],
                href: '/services/market-domination',
                featured: false,
              },
            ].map(p => (
              <div key={p.name} className={`pricing-card${p.featured ? ' featured' : ''}`}>
                {p.featured && <div className="pricing-card-badge">Most Popular</div>}
                <div className="pricing-tier">{p.tier}</div>
                <div className="pricing-name">{p.name}</div>
                <div className="pricing-price">{p.price}<span>{p.priceSuffix}</span></div>
                <div className="pricing-setup">{p.setup}</div>
                <div className="pricing-desc">
                  <ul className="service-check-list" style={{ marginBottom: 24 }}>
                    {p.checks.map(ch => <li key={ch} className="service-check">{ch}</li>)}
                  </ul>
                  <Link href={p.href} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <SectionLabel light>Ready?</SectionLabel>
          <h2 style={{ color: '#fff', marginTop: '18px' }}>
            Want to be<br /><span style={{ color: 'var(--red)' }}>next?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.6, marginBottom: '32px' }}>
            We only take one contractor per trade per market. Book a call and we&apos;ll tell you if your market is still open.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">Book a Discovery Call <span className="arrow">→</span></Link>
        </div>
      </section>
    </>
  )
}
