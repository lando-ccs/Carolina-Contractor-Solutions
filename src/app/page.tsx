import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

// ── Ticker ────────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    'Booked Solid System',
    'Get Better Leads',
    'Win More Jobs',
    'Carolinas Only',
    'No Month-to-Month',
    'One Market. One Client.',
    'Done-For-You',
    'Built for Contractors',
  ]
  const all = [...items, ...items, ...items]
  return (
    <div className="bg-navy overflow-hidden py-3" aria-hidden="true">
      <div className="ticker-track flex whitespace-nowrap">
        {all.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 text-[12px] font-semibold text-white/60 uppercase tracking-widest">
            <span className="w-1 h-1 rounded-full bg-red inline-block flex-shrink-0" />
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
    <section className="min-h-screen bg-bg flex items-center pt-[72px] overflow-hidden relative">
      {/* BG Carolina outline */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 80 Q40 60 80 70 L120 50 Q160 30 200 40 L260 20 Q300 10 340 30 L380 50 Q400 60 395 90 L390 130 Q385 160 370 180 L350 210 Q330 240 300 250 L260 260 Q220 270 180 260 L140 250 Q100 240 70 220 L40 200 Q15 180 10 150 Z" fill="#002868"/>
          <path d="M200 40 L220 80 L260 60 L280 100 L320 80 L340 120 L370 110 L380 150" stroke="#002868" strokeWidth="3" fill="none" opacity="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red/10 border border-red/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red pulse-dot" />
              <span className="text-[12px] font-bold text-red uppercase tracking-[1.5px]">Now Accepting Clients — Carolinas Only</span>
            </div>
            <h1 className="font-heading text-[52px] md:text-[64px] text-navy leading-[1.0] mb-6">
              Stop Chasing Leads.<br />
              <span className="text-red">Get Booked Solid.</span>
            </h1>
            <p className="text-[17px] text-text-2 leading-relaxed mb-8 max-w-xl">
              CCS builds contractor websites and runs the <strong className="text-text font-semibold">Booked Solid System</strong> — a done-for-you client acquisition engine with your website, Meta ads, monthly content shoots, and automated follow-up. All under one roof.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/services/booked-solid" className="inline-flex items-center gap-2 px-6 py-3.5 bg-red text-white font-semibold text-[15px] rounded-sm hover:bg-red-dark transition-colors">
                See the Booked Solid System →
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#DDE3ED] text-text-2 font-semibold text-[15px] rounded-sm hover:border-navy hover:text-navy transition-colors">
                View Our Work
              </Link>
            </div>
            {/* Proof stats */}
            <div className="flex gap-8 pt-8 border-t border-[#DDE3ED]">
              {[
                { num: '40+', label: 'Contractors Served' },
                { num: '1',   label: 'Client Per Market' },
                { num: '90',  label: 'Day Guarantee' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-heading text-[36px] text-navy leading-none">{s.num}<span className="text-red text-[24px]">{s.num === '90' ? 'd' : ''}</span></div>
                  <div className="text-[12px] text-text-3 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mockup card */}
          <div className="relative">
            <div className="bg-white rounded-xl border border-[#DDE3ED] shadow-2xl shadow-navy/10 overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-[#F0F1F5] px-4 py-3 flex items-center gap-2 border-b border-[#DDE3ED]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="flex-1 mx-3 bg-white rounded px-3 py-1 text-[11px] text-text-3">yoursite.com</div>
              </div>
              {/* Mock site */}
              <div className="bg-navy p-6">
                <div className="text-[10px] font-bold text-red/80 uppercase tracking-widest mb-2">Palmetto Roofing Co.</div>
                <div className="font-heading text-[28px] text-white leading-tight mb-3">Roof Replacement<br/><span className="text-red">Done Right.</span></div>
                <div className="flex gap-2 mb-4">
                  <div className="px-3 py-2 bg-red text-white text-[11px] font-semibold rounded">Get Free Estimate →</div>
                  <div className="px-3 py-2 border border-white/20 text-white/70 text-[11px] font-semibold rounded">View Gallery</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['⭐ 4.9 Rating', '15yr Experience', 'Licensed & Insured'].map(b => (
                    <div key={b} className="bg-white/10 rounded p-2 text-[10px] text-white/70 text-center">{b}</div>
                  ))}
                </div>
              </div>
              {/* Lead notification */}
              <div className="p-4 bg-white">
                <div className="flex items-start gap-3 p-3 bg-bg rounded-lg border border-[#DDE3ED]">
                  <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E31212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 23 17z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-text">New lead received</div>
                    <div className="text-[11px] text-text-2">Mike T. — Roof replacement estimate · Charlotte, NC</div>
                    <div className="text-[10px] text-text-3 mt-0.5">Auto-reply sent · 2 min ago</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-4 -left-4 bg-red text-white px-4 py-2 rounded-lg shadow-lg text-[12px] font-bold">
              🔒 Exclusive per market
            </div>
          </div>
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
      icon: '🏠',
      title: 'Roofers',
      body: 'Storm damage, repair & replacement — get in front of homeowners the moment they search. Full Booked Solid System available.',
      tags: ['Booked Solid System', 'Websites', 'Content'],
      badge: 'BSS Available',
    },
    {
      href: '/who-we-serve/hvac',
      icon: '❄️',
      title: 'HVAC',
      body: 'Install and service calls that actually ring your phone. We target homeowners by ZIP and age-of-home.',
      tags: ['Booked Solid System', 'Websites', 'Content'],
      badge: 'BSS Available',
    },
    {
      href: '/who-we-serve/landscapers',
      icon: '🌿',
      title: 'Landscapers',
      body: 'Design-build, lawn care, hardscape — we shoot the work and turn it into campaigns that book estimates.',
      tags: ['Booked Solid System', 'Websites', 'Content'],
      badge: 'BSS Available',
    },
    {
      href: '/who-we-serve/cleaning',
      icon: '✨',
      title: 'Cleaning',
      body: 'Stand out in a crowded market with a site that builds trust fast and turns visitors into booked appointments.',
      tags: ['Websites', 'Content'],
      badge: 'Websites + Content',
    },
  ]
  return (
    <section className="bg-bg2 py-24 px-6 lg:px-12" id="serve">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Who We Serve</SectionLabel>
          <h2 className="font-heading text-[44px] text-navy">Built for the Trades.<br/><span className="text-red">Made in the Carolinas.</span></h2>
          <p className="text-[16px] text-text-2 max-w-2xl mx-auto mt-4 leading-relaxed">
            We only work with contractors. Every campaign we run and every site we build speaks directly to the homeowners in your market.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trades.map(t => (
            <Link key={t.title} href={t.href} className="group bg-white rounded-xl border border-[#DDE3ED] p-6 hover:border-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="text-3xl mb-4">{t.icon}</div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-[22px] text-navy">{t.title}</h3>
                <span className="text-[10px] font-bold bg-navy/10 text-navy px-2 py-0.5 rounded-full">{t.badge}</span>
              </div>
              <p className="text-[13px] text-text-2 leading-relaxed flex-1 mb-4">{t.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-semibold text-text-2 bg-bg2 border border-[#DDE3ED] px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="mt-4 text-[13px] font-semibold text-red group-hover:gap-2 flex items-center gap-1 transition-all">
                Learn more <span>→</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/who-we-serve" className="text-[14px] font-semibold text-navy hover:text-red transition-colors">
            View all industries we serve →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Services Preview ──────────────────────────────────────────────────────────
function ServicesPreview() {
  const services = [
    {
      href: '/services/websites',
      num: '01',
      title: 'Contractor Websites',
      body: 'Clean, conversion-focused sites that load fast, earn trust in seconds, and make it dead simple for homeowners to call or book.',
      includes: ['Custom design + copywriting', 'Mobile-first build', 'SEO & local schema', 'Lead tracking'],
    },
    {
      href: '/services/booked-solid',
      num: '02',
      title: 'Booked Solid System',
      body: 'A complete done-for-you client acquisition engine. Website, Meta ads, monthly content shoot, automated follow-up, and pipeline dashboard.',
      includes: ['Premium website', 'Meta ad campaigns', 'Monthly content shoot', 'GoHighLevel CRM + automation'],
      featured: true,
    },
    {
      href: '/services/content',
      num: '03',
      title: 'Photo & Content',
      body: 'A half-day on your jobsite gets you months of ad-ready video and photos — all shot and edited by us. No stock. Ever.',
      includes: ['On-site photo + video shoot', 'Short-form vertical cuts', 'Before & after sets', 'Brand-matched edit'],
    },
  ]
  return (
    <section className="bg-bg py-24 px-6 lg:px-12" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="font-heading text-[44px] text-navy">Everything You Need to<br/><span className="text-red">Show Up and Win.</span></h2>
          <p className="text-[16px] text-text-2 max-w-xl mx-auto mt-4">Pick a piece or get the whole system.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map(s => (
            <Link
              key={s.num}
              href={s.href}
              className={`group rounded-xl border p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                s.featured
                  ? 'bg-navy border-navy text-white hover:shadow-2xl hover:shadow-navy/30'
                  : 'bg-white border-[#DDE3ED] hover:border-navy hover:shadow-lg'
              }`}
            >
              <div className={`font-heading text-[56px] leading-none mb-5 ${s.featured ? 'text-white/20' : 'text-[#DDE3ED]'}`}>{s.num}</div>
              <h3 className={`font-heading text-[24px] mb-3 ${s.featured ? 'text-white' : 'text-navy'}`}>{s.title}</h3>
              <p className={`text-[14px] leading-relaxed flex-1 mb-5 ${s.featured ? 'text-white/70' : 'text-text-2'}`}>{s.body}</p>
              <ul className="space-y-2 mb-6">
                {s.includes.map(item => (
                  <li key={item} className="flex items-center gap-2 text-[13px]">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${s.featured ? 'bg-red text-white' : 'bg-red/10 text-red'}`}>✓</span>
                    <span className={s.featured ? 'text-white/80' : 'text-text-2'}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className={`text-[13px] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all ${s.featured ? 'text-red-light' : 'text-red'}`}>
                {s.featured ? 'See full offer →' : 'Learn more →'}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: '01', t: 'Discovery Call', b: '30 minutes. We learn your market, your best job types, and what's held you back. No pitch.' },
    { n: '02', t: 'We Build & Shoot', b: 'We write the site, design it, spend a half-day shooting your jobsite, and launch the first campaign.' },
    { n: '03', t: 'Leads Come In', b: 'Calls and form fills go straight to your phone. Auto-replies go out in seconds. We tune weekly.' },
  ]
  return (
    <section className="bg-navy py-24 px-6 lg:px-12 relative overflow-hidden" id="how">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full border-[40px] border-white" />
        <div className="absolute left-20 top-10 w-48 h-48 rounded-full border-[20px] border-white" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel light>How It Works</SectionLabel>
            <h2 className="font-heading text-[44px] text-white mb-4">Simple Process.<br/><span className="text-red">Serious Results.</span></h2>
            <p className="text-[16px] text-white/60 mb-10">Three steps from first call to first lead. No drawn-out discovery, no surprise invoices.</p>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={s.n} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red flex items-center justify-center font-heading text-[13px] text-white">{s.n}</div>
                    {i < steps.length - 1 && <div className="w-0.5 h-8 bg-white/10 mx-auto mt-1" />}
                  </div>
                  <div className="pb-2">
                    <h4 className="font-heading text-[20px] text-white mb-1">{s.t}</h4>
                    <p className="text-[14px] text-white/60 leading-relaxed">{s.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee card */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="inline-flex items-center gap-2 bg-red/20 border border-red/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red pulse-dot" />
              <span className="text-[11px] font-bold text-red uppercase tracking-widest">Our Guarantee</span>
            </div>
            <h3 className="font-heading text-[28px] text-white mb-4">If your leads don't cover the retainer in the first 90 days — your next month is free.</h3>
            <p className="text-[14px] text-white/60 leading-relaxed mb-6">
              We only work with one company per market. Your leads are exclusively yours. We will never take on a direct competitor in your area.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Leads guaranteed to cover retainer cost',
                'One client per market — no exceptions',
                'Month-free if we miss the mark',
              ].map(f => (
                <li key={f} className="flex items-center gap-3 text-[14px] text-white/80">
                  <span className="w-5 h-5 rounded-full bg-red/20 flex items-center justify-center text-red text-[10px] flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/services/booked-solid" className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-red text-white font-semibold text-[15px] rounded-sm hover:bg-red-dark transition-colors">
              See the Booked Solid System →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Portfolio Preview ─────────────────────────────────────────────────────────
function PortfolioPreview() {
  const projects = [
    {
      client: 'Zuly Iyalode Cleaning, LLC',
      location: 'Grand Strand, SC',
      type: 'Cleaning',
      highlight: 'Working quote form · Real before/afters · Google reviews embedded',
      color: 'from-navy to-navy-dark',
    },
    {
      client: 'Fighting Grime Pressure Washing',
      location: 'Carolinas',
      type: 'Pressure Washing',
      highlight: 'Conversion-focused hero · Before/after gallery · SEO optimized',
      color: 'from-[#1a3a6b] to-navy-dark',
    },
    {
      client: 'Carolina Beach Landscaping',
      location: 'Carolina Beach, NC',
      type: 'Landscaping',
      highlight: 'Video hero · Project gallery · Seasonal campaign landing pages',
      color: 'from-[#2d5a27] to-[#1a3a18]',
    },
  ]
  return (
    <section className="bg-bg2 py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="font-heading text-[44px] text-navy">Real Sites.<br/><span className="text-red">Real Contractors.</span></h2>
          </div>
          <Link href="/portfolio" className="hidden md:block text-[14px] font-semibold text-navy hover:text-red transition-colors">
            View all work →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map(p => (
            <div key={p.client} className="group rounded-xl overflow-hidden border border-[#DDE3ED] bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Mock screen */}
              <div className={`bg-gradient-to-br ${p.color} p-6 h-44 flex flex-col justify-between`}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div>
                  <div className="text-[10px] text-white/50 font-semibold uppercase tracking-widest mb-1">{p.type}</div>
                  <div className="font-heading text-[22px] text-white leading-tight">{p.client.split(' ').slice(0, 2).join(' ')}</div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-body font-bold text-[14px] text-text">{p.client}</h3>
                  <span className="text-[10px] font-semibold text-text-3 bg-bg2 px-2 py-0.5 rounded-full">{p.type}</span>
                </div>
                <div className="text-[12px] text-text-3 mb-2">{p.location}</div>
                <p className="text-[12px] text-text-2">{p.highlight}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link href="/portfolio" className="text-[14px] font-semibold text-navy hover:text-red transition-colors">
            View all work →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  const quotes = [
    {
      q: "First time my website actually books jobs instead of just sitting there. We went from two calls a week to two calls a day.",
      initials: 'BH', name: 'Blue Ridge HVAC', loc: 'Brandon Hayes · Founder, Asheville NC',
      tags: ['Website', 'Meta Ads', 'Content'],
    },
    {
      q: "They doubled our roof replacements in 90 days. The footage they shot makes us look like the biggest roofer in town.",
      initials: 'PR', name: 'Palmetto Roofing Co.', loc: 'Pete Rivera · Ops Manager, Charleston SC',
      tags: ['Booked Solid System', 'Photo', 'Video'],
    },
    {
      q: "Straight shooters. No agency speak, no surprise invoices. They built the site, shot the yards, ran the ads — the phone rings.",
      initials: 'TL', name: 'Triangle Landscaping', loc: 'Tyler Lee · Owner, Raleigh NC',
      tags: ['Website', 'Photography', 'Google Ads'],
    },
  ]
  return (
    <section className="bg-bg py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-heading text-[44px] text-navy">What Our<br/><span className="text-red">Clients Say.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map(q => (
            <div key={q.name} className="bg-white rounded-xl border border-[#DDE3ED] p-6 flex flex-col">
              <div className="text-red text-lg mb-3">★★★★★</div>
              <p className="text-[15px] font-heading text-navy leading-relaxed flex-1 mb-5 italic">"{q.q}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#DDE3ED]">
                <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center font-heading text-[13px] text-white flex-shrink-0">{q.initials}</div>
                <div>
                  <div className="text-[13px] font-bold text-text">{q.name}</div>
                  <div className="text-[11px] text-text-3">{q.loc}</div>
                </div>
              </div>
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {q.tags.map(tag => <span key={tag} className="text-[10px] font-semibold bg-navy text-white px-2 py-0.5 rounded-full">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer CTA ────────────────────────────────────────────────────────────────
function FooterCTA() {
  return (
    <section className="bg-red py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-[60px] border-white" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border-[30px] border-white" />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-heading text-[44px] md:text-[52px] text-white mb-4">
          Your Next Client Is Already Searching.
        </h2>
        <p className="text-[17px] text-white/80 mb-8">
          The homeowner in your ZIP is Googling a contractor right now. Let's make sure they find you first — and only you.
        </p>
        <Link href="/services/booked-solid" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red font-semibold text-[16px] rounded-sm hover:bg-bg transition-colors">
          See the Booked Solid System →
        </Link>
        <div className="mt-5 text-[12px] text-white/60">
          3, 6 & 12-month contracts · One client per market · Lead guarantee included
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
      <WhoWeServe />
      <ServicesPreview />
      <HowItWorks />
      <PortfolioPreview />
      <Testimonials />
      <FooterCTA />
    </>
  )
}
