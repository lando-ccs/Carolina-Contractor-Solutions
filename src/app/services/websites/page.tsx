import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Contractor Websites — Built to Convert, Not Just Look Good',
  description: 'Conversion-focused contractor websites for trades businesses across the US. Custom design, real copywriting, SEO, and lead tracking — built to make your phone ring.',
}

const includes = [
  'Custom design tailored to your trade + market',
  'Copywriting done for you — written by us',
  'Mobile-first, fast-loading build',
  'On-page SEO + LocalBusiness schema markup',
  'Google Business Profile optimization',
  'Call tracking + lead routing',
  'Contact / quote request form',
  'Real photo integration (your jobsite photos)',
  'Google Reviews embedded',
  'FAQ section (kills objections)',
  '30-day post-launch support',
]

const process = [
  { n: '01', t: 'Kickoff Call', b: 'We learn your trade, your market, and the kind of jobs you want more of. No intake form — just a real conversation.' },
  { n: '02', t: 'Strategy + Copy', b: 'We write every word of your site. No templates, no filler. Messaging that speaks directly to homeowners in your area.' },
  { n: '03', t: 'Design + Build', b: 'We design and build your site. You see a preview before anything goes live. We revise until it\'s right.' },
  { n: '04', t: 'Launch + Track', b: 'We connect your domain, verify your Google Business Profile, and set up call tracking so you can see every lead.' },
]

export default function WebsitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-[72px] pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          <SectionLabel>Contractor Websites</SectionLabel>
          <h1 className="font-heading text-[52px] md:text-[64px] text-navy leading-[1.0] mb-6">
            A Website That<br /><span className="text-red">Actually Gets You Jobs.</span>
          </h1>
          <p className="text-[18px] text-text-2 leading-relaxed max-w-3xl mb-8">
            Most contractor sites are digital brochures that nobody finds and nobody trusts. We build sites that load fast, earn trust in under 5 seconds, and make it dead simple for homeowners to call or book — for contractors across the entire US.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white font-semibold text-[15px] rounded-sm hover:bg-navy-light transition-colors">
              Get a Quote →
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-4 border border-[#DDE3ED] text-text-2 font-semibold text-[15px] rounded-sm hover:border-navy hover:text-navy transition-colors">
              See Our Work
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-[12px] font-bold text-text-3 uppercase tracking-widest">Available To:</span>
            <span className="text-[13px] text-text-2">All contractor types · Nationwide</span>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-bg2 py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel>What's Included</SectionLabel>
              <h2 className="font-heading text-[38px] text-navy mb-4">Everything. No Add-Ons.</h2>
              <p className="text-[15px] text-text-2 leading-relaxed mb-6">
                One flat project — design, copy, build, launch, and 30 days of support. No surprise line items.
              </p>
              <ul className="space-y-3">
                {includes.map(item => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-text-2">
                    <span className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center text-navy text-[10px] flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Mock preview */}
            <div className="bg-white rounded-xl border border-[#DDE3ED] overflow-hidden shadow-lg">
              <div className="bg-[#F0F1F5] px-4 py-3 flex items-center gap-2 border-b border-[#DDE3ED]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="flex-1 mx-3 bg-white rounded px-3 py-1 text-[11px] text-text-3">yoursite.com</div>
              </div>
              <div className="bg-navy p-6">
                <div className="text-[9px] font-bold text-red/70 uppercase tracking-widest mb-2">Your Business Name</div>
                <div className="font-heading text-[26px] text-white leading-tight mb-4">Your Trade.<br/><span className="text-red">Done Right.</span></div>
                <div className="flex gap-2 mb-5">
                  <div className="px-3 py-2 bg-red text-white text-[11px] font-semibold rounded">Get Free Estimate</div>
                  <div className="px-3 py-2 border border-white/20 text-white/70 text-[11px] font-semibold rounded">See Our Work</div>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {['⭐ 4.9 Reviews', 'Licensed & Insured', 'Free Estimates'].map(b => (
                    <div key={b} className="bg-white/10 rounded p-2 text-[9px] text-white/70 text-center">{b}</div>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <div className="text-[12px] font-bold text-text mb-2">Site features:</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {['Before/After Gallery', 'Google Reviews', 'Quote Form', 'Local SEO', 'Call Tracking', 'Fast Load'].map(f => (
                    <div key={f} className="text-[11px] text-text-2 flex items-center gap-1.5">
                      <span className="text-red">✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="font-heading text-[38px] text-navy mb-12">From Call to Live Site — Fast.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((s, i) => (
              <div key={s.n} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-0.5 bg-[#DDE3ED] -translate-y-1/2 z-0" style={{width:'calc(100% - 2.5rem)', left:'2.5rem'}} />
                )}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-red text-white font-heading text-[13px] flex items-center justify-center mb-4">{s.n}</div>
                  <h3 className="font-heading text-[18px] text-navy mb-2">{s.t}</h3>
                  <p className="text-[13px] text-text-2 leading-relaxed">{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-[40px] text-white mb-4">Ready for a site that actually works?</h2>
          <p className="text-[16px] text-white/60 mb-8">Tell us about your business and we'll put together a quote. No retainers, no lock-in for a website-only project.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red text-white font-semibold text-[16px] rounded-sm hover:bg-red-dark transition-colors">
            Get a Quote →
          </Link>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-[13px] text-white/40">Need the whole system? Check out the <Link href="/services/booked-solid" className="text-white/70 hover:text-white underline transition-colors">Booked Solid System →</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}
