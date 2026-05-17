'use client'

import Link from 'next/link'
import Timeline from '@/components/Timeline'
import OurWork from '@/components/OurWork'
import ContactSection from '@/components/ContactSection'

/* ─────────────────────────────────────────────────────────────────────────────
   POLISH NOTE — May 2026
   • HowItWorks now uses the new shared <Timeline> component (connected steps).
   • All other sections preserved from previous version.
   ───────────────────────────────────────────────────────────────────────────── */

// ── Ticker ────────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    '100% for Contractors', 'Get Better Leads', 'Win More Jobs',
    'Serving the Carolinas', 'Stand Out Over Competitors', 'Book More Estimates',
  ]
  const all = [...items, ...items]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {all.map((t, i) => (
          <div key={i} className="ticker-item">
            <div className="ticker-dot" />
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">Marketing For Contractors</div>
          <h1 className="hero-h1">
            You Do the Work.<br />
            <span className="red">We Fill Your Calendar.</span>
          </h1>
          <p className="hero-sub">
            Most contractors in the Carolinas are invisible online and don&apos;t even know it. We build the websites, shoot the content, and run the ads that keep your phone ringing when referrals go quiet.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-navy" style={{ fontSize: 15, padding: '15px 28px' }}>
              <svg style={{ width: 16, height: 16, stroke: '#fff', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 11 19.79 19.79 0 0 1 1.97 2.4 2 2 0 0 1 3.97.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Book a Call
            </a>
            <a href="#portfolio" className="btn btn-ghost" style={{ fontSize: 15, padding: '14px 28px' }}>See Our Work</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-device">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/portfolio/heromockups.webp" alt="Contractor website mockup" className="hero-desktop" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Why CCS ───────────────────────────────────────────────────────────────────
function WhyCCS() {
  return (
    <section className="why-ccs" id="why-ccs">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="why-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" loading="lazy" />
      <div className="why-inner">
        <div className="why-header">
          <div className="section-label">Why Choose CCS?</div>
          <h2 className="why-h2">Built for the Trades.<br /><span className="red">Made in the Carolinas.</span></h2>
          <p className="why-sub">We only work with contractors, and we only work in NC and SC. That focus is why every campaign we run, every photo we shoot, and every word on your site speaks directly to the homeowners down the street.</p>
        </div>

        <div className="industry-grid">
          <Link href="/who-we-serve/roofers" className="industry-card">
            <div className="industry-icon">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3>Roofers</h3>
            <p>Every week you&apos;re not showing up on Google or social media, someone else is getting your jobs.</p>
            <div className="industry-tags">
              <span className="tag">Google Ads</span>
              <span className="tag">More Estimates</span>
              <span className="tag">Get Found</span>
            </div>
          </Link>

          <Link href="/who-we-serve/hvac" className="industry-card">
            <div className="industry-icon">
              <svg viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
            </div>
            <h3>HVAC Companies</h3>
            <p>Your customers don&apos;t think about you until the AC breaks. We make sure they think of you first when it does.</p>
            <div className="industry-tags">
              <span className="tag">Google Ads</span>
              <span className="tag">Website</span>
              <span className="tag">Stay Booked</span>
            </div>
          </Link>

          <Link href="/who-we-serve/concrete-hardscaping" className="industry-card">
            <div className="industry-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
            </div>
            <h3>Concrete &amp; Hardscaping</h3>
            <p>Premium work deserves a presence that matches it. We make sure the right homeowners find you first.</p>
            <div className="industry-tags">
              <span className="tag">Website Design</span>
              <span className="tag">Meta Ads</span>
              <span className="tag">Content</span>
            </div>
          </Link>

          <Link href="/who-we-serve/landscapers" className="industry-card">
            <div className="industry-icon">
              <svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>
            <h3>Landscapers</h3>
            <p>The yards you&apos;ve done speak for themselves. We make sure the right homeowners are listening.</p>
            <div className="industry-tags">
              <span className="tag">Website Design</span>
              <span className="tag">Meta Ads</span>
              <span className="tag">Ad Campaigns</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label">Our Services</div>
          <h2 className="services-h2">Everything You Need to<br /><span className="red">Show Up and Win</span></h2>
          <p className="services-sub">Most contractors in the Carolinas live off word of mouth and hope the slow months don&apos;t last. We build the presence that keeps your phone ringing when referrals go quiet.</p>
        </div>

        <div className="services-grid">
          <Link href="/services/build-only" className="service-card">
            <div className="service-card-num">01</div>
            <h3>Build Only</h3>
            <p>A real contractor site, built once and yours to keep. No monthly bill.</p>
            <ul className="service-check-list">
              <li className="service-check">$500–$2,000 one-time</li>
              <li className="service-check">Custom 3–7 page build</li>
              <li className="service-check">Mobile-first + local SEO</li>
              <li className="service-check">You own everything</li>
              <li className="service-check">21-day bug-fix warranty</li>
            </ul>
            <span className="service-cta">Learn More →</span>
          </Link>

          <Link href="/services/web-care-plan" className="service-card">
            <div className="service-card-num">02</div>
            <h3>Web Care Plan</h3>
            <p>Your site built, then kept sharp every month — updates, hosting, support handled.</p>
            <ul className="service-check-list">
              <li className="service-check">From $500 build · $500/mo</li>
              <li className="service-check">Custom design + copywriting</li>
              <li className="service-check">SEO &amp; local schema</li>
              <li className="service-check">Up to 5 update requests/month</li>
              <li className="service-check">Hosting + updates included</li>
            </ul>
            <span className="service-cta">Learn More →</span>
          </Link>

          <Link href="/services/market-domination" className="service-card featured">
            <div className="service-card-tier-badge">One Per Market</div>
            <div className="service-card-num">03</div>
            <h3>Market Domination</h3>
            <p>The full lead operation — ads, content, automated follow-up, and your market locked.</p>
            <ul className="service-check-list">
              <li className="service-check">$5,000/mo + ad spend</li>
              <li className="service-check">Google + Meta Ads</li>
              <li className="service-check">3 monthly content shoots</li>
              <li className="service-check">Automated lead follow-up</li>
              <li className="service-check">Permanent market exclusivity</li>
            </ul>
            <span className="service-cta">See Full System →</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── How It Works ────────────────────────────────────────────────────────────
// POLISH UPDATE: now uses the shared <Timeline> component (connected steps).
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Discovery Call',   body: 'A 30-minute call to understand your business, your market, and where the opportunities are. No prep needed.' },
    { num: '02', title: 'We Build & Shoot', body: 'We handle the website design and — if you\u2019re on a marketing plan — show up to your location for the content shoot and set up your ad campaigns.' },
    { num: '03', title: 'Leads Come In',    body: 'Your site goes live and automated follow-up reaches every lead within minutes. You wake up to booked appointments.' },
  ]
  return (
    <section className="how-it-works" id="how-it-works">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hiw-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" loading="lazy" />
      <div className="hiw-inner" style={{ maxWidth: 1280 }}>
        <div className="section-head center" style={{ marginBottom: 56 }}>
          <div className="section-label">How It Works</div>
          <h2 className="hiw-h2">Simple Process.<br /><span className="red">Serious Results.</span></h2>
          <p className="hiw-sub" style={{ marginBottom: 0 }}>No long contracts. No confusing timelines. Here&apos;s exactly how it works.</p>
        </div>
        <Timeline steps={steps} />
      </div>
    </section>
  )
}

// ── Portfolio ─────────────────────────────────────────────────────────────────
// Source of truth is `@/components/OurWork.tsx` — shared across every page.
function Portfolio() { return <OurWork /> }

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="test-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" loading="lazy" />
      <div className="testimonials-inner">
        <div className="test-header">
          <div className="section-label center">Client Reviews</div>
          <h2 className="test-h2">What Our <span className="red">Clients Say.</span></h2>
          <p className="test-sub">Real results from real contractors across the Carolinas.</p>
        </div>

        <div className="tcard-wrap">
          <div className="tcard">
            <div className="tcard-top">
              <div className="tcard-stars">⭐⭐⭐⭐⭐</div>
              <div className="tcard-quote">First time my website actually books jobs instead of just sitting there. The phone rings now — that&apos;s all I needed.</div>
              <div className="tcard-author">
                <div className="tcard-avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/fightinggrimelogo.webp" alt="Fighting Grime Pressure Washing logo" loading="lazy" />
                </div>
                <div>
                  <div className="tcard-name">Fighting Grime Pressure Washing</div>
                  <div className="tcard-role">Owner — Myrtle Beach, SC</div>
                </div>
              </div>
            </div>
            <div className="tcard-bottom">
              <div className="tcard-tags">
                <span className="tcard-tag">Website</span>
                <span className="tcard-tag">Logo</span>
                <span className="tcard-tag">Photos</span>
              </div>
              <a href="https://fightinggrimepressurewashing.com" target="_blank" rel="noopener noreferrer" className="btn btn-red" style={{ fontSize: 13, padding: '9px 18px' }}>
                View Website →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
// ── Contact ───────────────────────────────────────────────────────────────────
// Source of truth is `@/components/ContactSection.tsx` — shared across every page.
function Contact() { return <ContactSection /> }

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner-inner">
        <div className="cta-banner-eyebrow">Limited Spots Available</div>
        <h2>Your Next Client Is<br /><span className="red">Already Searching.</span></h2>
        <p>Your ideal customer is on Google right now, looking for someone in your trade. Every day you&apos;re not showing up, your competitor gets the call. Book one and let&apos;s change that.</p>

        <div className="cta-banner-actions">
          <a href="#contact" className="btn btn-red">
            <svg style={{ width: 16, height: 16, stroke: '#fff', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 11 19.79 19.79 0 0 1 1.97 2.4 2 2 0 0 1 3.97.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Book a Free Call
          </a>
          <a href="#portfolio" className="btn btn-outline-light">See Our Work</a>
        </div>

        <div className="cta-banner-trust">
          <span>30-min strategy call</span>
          <span>No commitment</span>
          <span>Local Carolinas team</span>
        </div>
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
      <WhyCCS />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <Contact />
      <CTABanner />
    </>
  )
}
