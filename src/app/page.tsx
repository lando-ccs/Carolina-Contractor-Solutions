'use client'

import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import { useState, useEffect } from 'react'

// ── Ticker ────────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    'Web Care Plan', 'Booked Solid System', 'Market Domination',
    'Win More Jobs', 'Carolinas Only', 'One Market. One Client.',
    'Done-For-You', 'Built for Contractors',
  ]
  const all = [...items, ...items]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {all.map((t, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        {/* Left */}
        <div>
          <div className="badge badge-red">
            <span className="pulse" />
            Now Accepting Clients — Carolinas Only
          </div>
          <SectionLabel>Done-For-You Contractor Marketing</SectionLabel>
          <h1>
            Stop Chasing Leads.<br />
            <span className="red">Get Booked Solid.</span>
          </h1>
          <p className="hero-sub">
            CCS builds contractor websites and runs the <strong>Booked Solid System</strong> — a done-for-you client acquisition engine with your site, Google Ads, SEO, and automated follow-up. All under one roof.
          </p>
          <div className="hero-ctas">
            <Link href="/services/market-domination" className="btn btn-secondary btn-lg">
              See Market Domination <span className="arrow">→</span>
            </Link>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">
              View Our Work
            </Link>
          </div>
          <div className="hero-proof">
            <div className="proof-stat">
              <div className="proof-num">40<span>+</span></div>
              <div className="proof-label">Contractors Served</div>
            </div>
            <div className="proof-stat">
              <div className="proof-num">1</div>
              <div className="proof-label">Client Per Market</div>
            </div>
            <div className="proof-stat">
              <div className="proof-num">90<span>d</span></div>
              <div className="proof-label">Lead Guarantee</div>
            </div>
          </div>
        </div>

        {/* Right — device stack */}
        <div className="device-stack">
          <div className="device-stack-bg">
            <img src="/assets/scsvg 1.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <img src="/assets/heromockups.webp" alt="CCS website mockup" className="device-laptop" />
        </div>
      </div>
    </section>
  )
}

// ── Who We Serve ──────────────────────────────────────────────────────────────
function WhoWeServe() {
  const trades = [
    {
      href: '/who-we-serve/roofers',
      title: 'Roofers',
      body: 'Storm damage, repair & replacement — get in front of homeowners the moment they search. Full Market Domination system available.',
      tags: ['Market Domination', 'Booked Solid', 'Web Care Plan'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      href: '/who-we-serve/hvac',
      title: 'HVAC',
      body: 'Install and service calls that actually ring your phone. We target homeowners by ZIP code and age-of-home.',
      tags: ['Market Domination', 'Booked Solid', 'Web Care Plan'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
    },
    {
      href: '/who-we-serve/landscapers',
      title: 'Landscapers',
      body: 'Design-build, lawn care, hardscape — we shoot the work and turn it into campaigns that book estimates.',
      tags: ['Market Domination', 'Booked Solid', 'Web Care Plan'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8C8 10 5.9 16.17 3.82 19.82A2 2 0 0 0 5.66 22H18a2 2 0 0 0 2-2V8"/>
          <path d="M17 8l-2-4"/>
          <path d="M17 8c0-4-2-4-2-4"/>
        </svg>
      ),
    },
  ]
  return (
    <section className="section alt">
      <div className="section-inner">
        <div className="section-head center">
          <SectionLabel>Who We Serve</SectionLabel>
          <h2>Built for the Trades.<br /><span className="red">Made in the Carolinas.</span></h2>
          <p>We only work with contractors. Every campaign we run and every site we build speaks directly to the homeowners in your market.</p>
        </div>
        <div className="trades-grid">
          {trades.map(t => (
            <Link key={t.title} href={t.href} className="trade-card">
              <div className="trade-card-icon">{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <div className="trade-card-tags">
                {t.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────
function Services() {
  const cards = [
    {
      href: '/services/web-care-plan',
      num: '01',
      title: 'Web Care Plan',
      body: 'A professional contractor site built in 5–7 days. 3–5 updates/month, hosting included. No setup fee. Month-to-month after 3 months.',
      checks: ['Custom design + copywriting', 'Mobile-first build', 'SEO & local schema', '3–5 updates/month', 'Hosting included'],
    },
    {
      href: '/services/booked-solid',
      num: '02',
      title: 'Booked Solid System',
      body: 'Google Ads + SEO + Google Business Profile management. A complete done-for-you lead machine for contractors in the Carolinas.',
      checks: ['Google Ads campaigns', 'Local SEO + GBP', 'Weekly optimization', 'Monthly reporting', '60-day lead guarantee'],
    },
    {
      href: '/services/market-domination',
      num: '03',
      title: 'Market Domination',
      body: 'Everything in BSS plus Meta Ads, 3–5 monthly on-location content shoots, and full GoHighLevel pipeline automation.',
      checks: ['Google + Meta Ads', '3–5 monthly content shoots', 'GoHighLevel automation', 'Live lead dashboard', '90-day lead guarantee'],
      featured: true,
    },
  ]

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head center">
          <SectionLabel>Our Services</SectionLabel>
          <h2>Everything You Need to<br /><span className="red">Show Up and Win.</span></h2>
          <p>Pick a piece or get the whole system. All built exclusively for contractors.</p>
        </div>
        <div className="services-grid">
          {cards.map(s => (
            <Link key={s.num} href={s.href} className={`service-card${s.featured ? ' featured' : ''}`}>
              <div className="service-card-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="service-check-list">
                {s.checks.map(c => <li key={c} className="service-check">{c}</li>)}
              </ul>
              <span className="service-cta">{s.featured ? 'See Full System' : 'Learn More'} <span className="arrow">→</span></span>
            </Link>
          ))}
        </div>

        {/* Market Domination full card */}
        <div className="service-full-wrap">
          <div className="service-full-card">
            <div className="service-full-left">
              <div className="badge badge-dark">
                <span className="pulse" />
                Most Popular — Carolinas Only
              </div>
              <SectionLabel light>Market Domination</SectionLabel>
              <h3>The Complete System for Contractors Who Want to Own Their Market</h3>
              <p>One contractor per trade per market — permanently locked in. If you're in, your competitor can't be. This is the full package: ads, content, automation, and exclusivity.</p>
              <Link href="/services/market-domination" className="btn btn-secondary btn-lg">
                See Full Details <span className="arrow">→</span>
              </Link>
            </div>
            <div className="service-full-right">
              <p className="includes-label">Everything Included</p>
              <ul className="includes-grid">
                <li>Google Ads Management</li>
                <li>Meta Ads Management</li>
                <li>3–5 Monthly Content Shoots</li>
                <li>SEO + Google Business</li>
                <li>GoHighLevel CRM</li>
                <li>Lead Follow-Up Automation</li>
                <li>Review Generation</li>
                <li>Missed Call Text-Back</li>
                <li>Live Lead Dashboard</li>
                <li>90-Day Lead Guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: '01', t: 'Discovery Call', b: '30 minutes. We learn your market, your best job types, and what\'s held you back. No pitch.' },
    { n: '02', t: 'We Build & Launch', b: 'We write the site, design it, shoot your jobsite, and launch the first campaign — all within 2 weeks.' },
    { n: '03', t: 'Leads Come In', b: 'Calls and form fills go straight to your phone. Auto-replies go out in seconds. We tune weekly.' },
    { n: '04', t: 'You Own Your Market', b: 'Once you\'re in, no competitor in your trade gets in. Your territory is locked — for as long as you stay.' },
  ]
  return (
    <section className="section dark">
      <div className="section-inner">
        <div className="how-grid">
          <div>
            <div className="how-head">
              <SectionLabel light>How It Works</SectionLabel>
              <h2 style={{ fontSize: 56, color: '#fff', marginBottom: 16 }}>Simple Process.<br /><span style={{ color: 'var(--red-light)' }}>Serious Results.</span></h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>Three steps from first call to first lead. No drawn-out discovery, no surprise invoices.</p>
            </div>
            <div className="steps-col">
              {steps.map(s => (
                <div key={s.n} className="step">
                  <div className="step-num">{s.n}</div>
                  <div>
                    <h4>{s.t}</h4>
                    <p>{s.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Panel */}
          <div className="cta-panel">
            <div className="badge badge-dark">
              <span className="pulse" />
              Our Guarantee
            </div>
            <h3>If your leads don't cover the retainer in the first 90 days — your next month is free.</h3>
            <p>We only work with one contractor per market. Your leads are exclusively yours. We will never take on a direct competitor in your area.</p>
            <ul className="cta-panel-feats">
              <li>Leads guaranteed to cover retainer cost</li>
              <li>One client per market — no exceptions</li>
              <li>Month free if we miss the mark</li>
              <li>Carolinas only — NC &amp; SC</li>
            </ul>
            <Link href="/services/market-domination" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              See Market Domination <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Portfolio Preview ─────────────────────────────────────────────────────────
function Portfolio() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2>Real Sites.<br /><span className="red">Real Contractors.</span></h2>
          </div>
          <Link href="/portfolio" className="btn btn-ghost btn-sm" style={{ flexShrink: 0, marginBottom: 8 }}>View All Work →</Link>
        </div>

        <p className="row-label">Contractor Websites</p>
        <div className="portfolio-row-sites">
          {/* Fighting Grime */}
          <div className="site-card">
            <div className="site-card-screen">
              <div className="dots"><span/><span/><span/></div>
              <div className="site-card-inner">
                <img src="/assets/Fighinting Grime Home.webp" alt="Fighting Grime Pressure Washing website" />
                <div className="site-card-inner-content">
                  <span className="tag tag-light" style={{ fontSize: 10 }}>Pressure Washing</span>
                </div>
              </div>
            </div>
            <div className="site-card-meta">
              <strong>Fighting Grime Pressure Washing</strong>
              <span>Carolinas</span>
            </div>
          </div>

          {/* Zuly Iyalode */}
          <div className="site-card">
            <div className="site-card-screen" style={{ background: '#001a45' }}>
              <div className="dots"><span/><span/><span/></div>
              <div className="site-card-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: 24 }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#fff', lineHeight: 1.2 }}>Zuly Iyalode<br/>Cleaning, LLC</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>Grand Strand, SC</div>
                </div>
              </div>
            </div>
            <div className="site-card-meta">
              <strong>Zuly Iyalode Cleaning, LLC</strong>
              <span>Grand Strand, SC</span>
            </div>
          </div>

          {/* Carolina Beach Landscaping */}
          <div className="site-card">
            <div className="site-card-screen" style={{ background: '#1a3a18' }}>
              <div className="dots"><span/><span/><span/></div>
              <div className="site-card-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: 24 }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#fff', lineHeight: 1.2 }}>Carolina Beach<br/>Landscaping</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>Carolina Beach, NC</div>
                </div>
              </div>
            </div>
            <div className="site-card-meta">
              <strong>Carolina Beach Landscaping</strong>
              <span>Carolina Beach, NC</span>
            </div>
          </div>
        </div>

        <p className="row-label">Jobsite Photography</p>
        <div className="portfolio-row-photos">
          {[
            { src: '/assets/1-Fighting Grime Pics - 00000003.webp', type: 'Pressure Washing', title: 'Fighting Grime' },
            { src: '/assets/2-Fighting Grime Pics - 00000006.webp', type: 'Pressure Washing', title: 'Before & After' },
            { src: '/assets/12-DSC00208.webp',                       type: 'Content Shoot',    title: 'On-Location' },
            { src: '/assets/17-DSC00213.webp',                       type: 'Content Shoot',    title: 'Portfolio Shot' },
          ].map((p, i) => (
            <div key={i} className="photo-card">
              <img src={p.src} alt={p.title} />
              <div className="photo-card-label">
                <div className="photo-card-type">{p.type}</div>
                <div className="photo-card-title">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  const quotes = [
    {
      q: 'First time my website actually books jobs instead of just sitting there. We went from two calls a week to two calls a day.',
      initials: 'BH', name: 'Blue Ridge HVAC', loc: 'Brandon Hayes · Founder, Asheville NC',
      tags: ['Website', 'Google Ads', 'SEO'],
    },
    {
      q: 'They doubled our roof replacements in 90 days. The footage they shot makes us look like the biggest roofer in town.',
      initials: 'PR', name: 'Palmetto Roofing Co.', loc: 'Pete Rivera · Ops Manager, Charleston SC',
      tags: ['Market Domination', 'Content Shoot', 'Meta Ads'],
    },
    {
      q: 'Straight shooters. No agency speak, no surprise invoices. They built the site, ran the ads — the phone rings.',
      initials: 'TL', name: 'Triangle Landscaping', loc: 'Tyler Lee · Owner, Raleigh NC',
      tags: ['Booked Solid System', 'Website', 'Google Ads'],
    },
  ]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % quotes.length), 5000)
    return () => clearInterval(t)
  }, [quotes.length])

  const q = quotes[active]

  return (
    <section className="section alt">
      <div className="section-inner">
        <div className="section-head center">
          <SectionLabel>Client Reviews</SectionLabel>
          <h2>What Our<br /><span className="red">Clients Say.</span></h2>
        </div>

        <div className="t-single">
          <div className="t-single-top">
            <div className="t-single-stars">★★★★★</div>
            <div className="t-single-quote">"{q.q}"</div>
            <div className="t-single-author">
              <div className="t-single-avatar">{q.initials}</div>
              <div>
                <strong>{q.name}</strong>
                <span>{q.loc}</span>
              </div>
            </div>
          </div>
          <div className="t-single-bottom">
            <div className="t-single-tags">
              {q.tags.map(tag => <span key={tag} className="tag tag-navy">{tag}</span>)}
            </div>
          </div>
        </div>

        <div className="t-dots">
          {quotes.map((_, i) => (
            <button
              key={i}
              className={i === active ? 'active' : ''}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer CTA ────────────────────────────────────────────────────────────────
function FooterCTA() {
  return (
    <section className="cta-footer">
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
        <img src="/assets/scsvg 1.webp" alt="" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
      </div>
      <div className="cta-footer-inner">
        <div className="badge badge-dark" style={{ margin: '0 auto 24px' }}>
          <span className="pulse" />
          Limited Spots — Carolinas Only
        </div>
        <h2>
          Your Next Client<br />
          Is Already<br />
          <span className="red">Searching.</span>
        </h2>
        <p>The homeowner in your ZIP is Googling a contractor right now. Let's make sure they find you first — and only you.</p>
        <Link href="/services/market-domination" className="btn btn-secondary btn-lg">
          Get Started Today <span className="arrow">→</span>
        </Link>
        <p className="cta-footer-disclaimer">3-month minimum · One client per market · Lead guarantee included</p>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <WhoWeServe />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <FooterCTA />
    </>
  )
}
