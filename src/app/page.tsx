'use client'

import Link from 'next/link'

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
            Most contractors in the Carolinas are invisible online and don't even know it. We build the websites, shoot the content, and run the ads that keep your phone ringing when referrals go quiet.
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
      <img className="why-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
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
            <p>Every week you're not showing up on Google or social media, someone else is getting your jobs.</p>
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
            <p>Your customers don't think about you until the AC breaks. We make sure they think of you first when it does.</p>
            <div className="industry-tags">
              <span className="tag">Google Ads</span>
              <span className="tag">Website</span>
              <span className="tag">Stay Booked</span>
            </div>
          </Link>

          <Link href="/who-we-serve/general-contractors" className="industry-card">
            <div className="industry-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
            </div>
            <h3>Concrete & Hardscaping</h3>
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
            <p>The yards you've done speak for themselves. We make sure the right homeowners are listening.</p>
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
          <p className="services-sub">Most contractors in the Carolinas live off word of mouth and hope the slow months don't last. We build the presence that keeps your phone ringing when referrals go quiet.</p>
        </div>

        <div className="services-grid-2col">
          {/* Web Care Plan */}
          <Link href="/services/web-care-plan" className="service-card">
            <div className="service-card-num">01</div>
            <h3>Web Care Plan</h3>
            <p>A professional contractor site built in 5–7 days. Starting at $500 to build, then $500/month for ongoing updates, hosting, and support.</p>
            <ul className="service-check-list">
              <li className="service-check">Custom design + copywriting</li>
              <li className="service-check">Mobile-first build</li>
              <li className="service-check">SEO & local schema</li>
              <li className="service-check">3–5 updates/month included</li>
            </ul>
            <span className="service-cta">Learn More →</span>
          </Link>

          {/* Booked Solid System — featured */}
          <Link href="/services/booked-solid" className="service-card featured">
            <div className="service-card-num">02</div>
            <h3>Booked Solid System</h3>
            <p>Google Ads + SEO + Google Business Profile management. A complete done-for-you lead machine for contractors in the Carolinas.</p>
            <ul className="service-check-list">
              <li className="service-check">Google Ads campaigns</li>
              <li className="service-check">Local SEO + GBP management</li>
              <li className="service-check">Weekly optimization</li>
              <li className="service-check">60-day lead guarantee</li>
            </ul>
            <span className="service-cta">Learn More →</span>
          </Link>
        </div>

        {/* Tier 3 — Market Domination */}
        <div className="full-service-banner">
          <div className="fs-left">
            <div className="service-card-num" style={{ color: 'rgba(255,255,255,0.12)', marginBottom: 12, fontSize: 52, fontFamily: 'var(--font-h)', lineHeight: 1 }}>03</div>
            <div className="fs-badge">Tier 3 &middot; Carolinas Only &middot; One Per Market</div>
            <h3>Market Domination</h3>
            <p>Google Ads + Meta Ads + 3&ndash;5 monthly on-location content shoots + full GoHighLevel pipeline automation. One contractor per trade per market &mdash; permanently locked in.</p>
          </div>
          <ul className="fs-features">
            <li><span className="checkmark">✓</span> Google + Meta Ads</li>
            <li><span className="checkmark">✓</span> 3–5 monthly content shoots</li>
            <li><span className="checkmark">✓</span> GoHighLevel CRM + automation</li>
            <li><span className="checkmark">✓</span> Live lead dashboard</li>
            <li><span className="checkmark">✓</span> 90-day lead guarantee</li>
            <li><span className="checkmark">✓</span> Permanent market exclusivity</li>
          </ul>
          <div className="fs-cta">
            <Link href="/services/market-domination" className="btn btn-red" style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}>
              <svg style={{ width: 16, height: 16, stroke: '#fff', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 11 19.79 19.79 0 0 1 1.97 2.4 2 2 0 0 1 3.97.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              See Full System &#8594;
            </Link>
            <div className="fs-price">90-day lead guarantee included</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hiw-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
      <div className="hiw-inner">
        <div className="hiw-left">
          <div className="section-label">How It Works</div>
          <h2 className="hiw-h2">Simple Process.<br /><span className="red">Serious Results.</span></h2>
          <p className="hiw-sub">No long contracts. No confusing timelines. Here's exactly how it works.</p>

          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Discovery Call</h3>
              <p>A 30-minute call to understand your business, your market, and where the opportunities are. No prep needed. Just show up.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>We Build & Shoot</h3>
              <p>We handle the website design, show up to your location for the content shoot, and set up your ad campaigns — all while you focus on the work.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Leads Come In</h3>
              <p>Your site goes live, ads start running, and GHL automatically follows up with every lead. You wake up to booked appointments.</p>
            </div>
          </div>
        </div>

        <div className="hiw-right">
          <div className="promo-card">
            <div className="promo-badge">Only 3 Spots Available!</div>
            <h3>Free 60-Day Ad Campaign<br /><span className="red">On Us!</span></h3>
            <p>Sign on for a website and we launch a free 60-day Meta campaign to go with it. You cover the ad spend. We handle the shoot, the build, and the campaigns. Hit the ground running from day one. Only 3 spots available.</p>
            <ul className="promo-list">
              <li><span className="checkmark">✓</span> On-location shoot included</li>
              <li><span className="checkmark">✓</span> Full Meta setup & launch</li>
              <li><span className="checkmark">✓</span> 60 days. Zero setup fees.</li>
            </ul>
            <a href="#contact" className="btn btn-red" style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}>
              Claim Your Free Campaign →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Portfolio ─────────────────────────────────────────────────────────────────
function Portfolio() {
  const photos = [
    { src: '/assets/1-Fighting Grime Pics - 00000003.webp',      alt: 'Fighting Grime pressure washing' },
    { src: '/assets/17-DSC00213.webp',                           alt: 'Carolina Beach Landscaping crew' },
    { src: '/assets/3-Fighting Grime Pics - 00000005.webp',      alt: 'Fighting Grime pressure washing' },
    { src: '/assets/12-DSC00208.webp',                           alt: 'Carolina Beach Landscaping crew' },
    { src: '/assets/2-Fighting Grime Pics - 00000006.webp',      alt: 'Fighting Grime pressure washing' },
    { src: '/assets/19-DSC00220.webp',                           alt: 'Carolina Beach Landscaping crew' },
  ]
  const allPhotos = [...photos, ...photos]

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-inner">
        <div className="section-label">Our Portfolio</div>
        <h2 className="portfolio-h2">Work That <span className="red">Speaks for Itself.</span></h2>

        {/* Website Portfolio */}
        <div className="port-section-label">
          <span className="psl-title">Website Portfolio</span>
          <span className="psl-count">03 Live Sites</span>
        </div>

        <div className="portfolio-grid">
          {/* Fighting Grime */}
          <div className="port-card">
            <div className="browser-frame">
              <div className="browser-bar">
                <div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" />
              </div>
              <div className="browser-screen">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/portfolio/Fighinting Grime Home.webp" alt="Fighting Grime Pressure Washing website" />
              </div>
            </div>
            <div className="port-card-footer">
              <h4>Fighting Grime Pressure Washing</h4>
              <span className="port-sub">Website Design · Myrtle Beach, SC</span>
              <span className="port-trade">Pressure Washing</span>
              <a href="https://fightinggrimepressurewashing.com" target="_blank" rel="noopener noreferrer" className="port-link">
                View Live Site
                <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

          {/* Carolina Beach Landscaping — video */}
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
              <h4>Carolina Beach Landscaping</h4>
              <span className="port-sub">Website Design · Photo & Video · Myrtle Beach, SC</span>
              <span className="port-trade">Landscaping</span>
              <a href="#" className="port-link">
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/portfolio/zulydesktophome.webp" alt="Zuly Iyalode Cleaning website" />
              </div>
            </div>
            <div className="port-card-footer">
              <h4>Zuly Iyalode Cleaning</h4>
              <span className="port-sub">Cleaning Services · Charlotte, NC</span>
              <span className="port-trade">Cleaning</span>
              <a href="https://zulyiyalodecleaning.com" target="_blank" rel="noopener noreferrer" className="port-link">
                View Live Site
                <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Photo & Video Ticker */}
        <div className="port-section-label">
          <span className="psl-title">Photo & Video</span>
          <span className="psl-count">Shot by CCS</span>
        </div>
        <div className="photo-ticker">
          <div className="photo-track">
            {allPhotos.map((p, i) => (
              <div key={i} className="photo-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="test-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
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
              <div className="tcard-quote">First time my website actually books jobs instead of just sitting there. The phone rings now — that's all I needed.</div>
              <div className="tcard-author">
                <div className="tcard-avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/fightinggrimelogo.webp" alt="Fighting Grime Pressure Washing logo" />
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
function Contact() {
  return (
    <section className="contact" id="contact">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="contact-bg" src="/assets/scsvg 1.webp" alt="" aria-hidden="true" />

      <div className="contact-inner">
        <div className="contact-left">
          <div className="section-label">Contact</div>
          <h2 className="contact-h2">Ready to Stop<br /><span className="red">Running on Referrals?</span></h2>
          <p className="contact-sub">Book a free 30-minute strategy call. We'll get to know your business and figure out if we're able to help you dominate your market.</p>

          <div className="contact-divider" />

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 11 19.79 19.79 0 0 1 1.97 2.4 2 2 0 0 1 3.97.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Text Or Call</div>
                <div className="contact-item-val">(843) 742-9776</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">info@carolinacontractorsolutions.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Serving</div>
                <div className="contact-item-val">NC & SC — Myrtle Beach to Charlotte</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Hours</div>
                <div className="contact-item-val">Mon–Fri, 9am–6pm EST</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-form-card">
            <h3>Book Your Free Call</h3>
            <p className="form-sub">Takes 30 seconds. We'll reach out within 24 hours.</p>

            <form>
              <div className="input-group">
                <label className="input-label">Name</label>
                <input className="input" type="text" placeholder="Your name" />
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label className="input-label">Phone Number</label>
                  <input className="input" type="tel" placeholder="(843) 000-0000" />
                </div>
                <div className="input-group">
                  <label className="input-label">Email</label>
                  <input className="input" type="email" placeholder="you@yourbusiness.com" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Trade</label>
                <select className="input">
                  <option value="" disabled>Select...</option>
                  <option>Roofing</option>
                  <option>HVAC</option>
                  <option>Concrete & Hardscaping</option>
                  <option>Landscaping</option>
                  <option>Pressure Washing</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
              <p className="form-note">We'll get back within 24 hours. No Spam Ever.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner-inner">
        <div className="cta-banner-eyebrow">Limited Spots Available</div>
        <h2>Your Next Client Is<br /><span className="red">Already Searching.</span></h2>
        <p>Your ideal customer is on Google right now, looking for someone in your trade. Every day you're not showing up, your competitor gets the call. Book one and let's change that.</p>

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
