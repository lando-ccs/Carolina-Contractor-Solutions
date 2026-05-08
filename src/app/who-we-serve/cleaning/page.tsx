import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Cleaning Business Websites — Built to Book Appointments',
  description: 'Conversion-focused websites for cleaning businesses nationwide. Build trust fast, collect leads, and show off your real before/after work.',
}

export default function CleaningPage() {
  return (
    <>
      <section className="bg-bg pt-[72px] pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          <div className="inline-flex items-center gap-2 bg-navy/10 border border-navy/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[11px] font-bold text-navy uppercase tracking-widest">Websites + Content · Nationwide</span>
          </div>
          <SectionLabel>Cleaning Businesses</SectionLabel>
          <h1 className="font-heading text-[52px] md:text-[64px] text-navy leading-[1.0] mb-6">
            A Cleaning Site That<br /><span className="text-red">Actually Books Jobs.</span>
          </h1>
          <p className="text-[18px] text-text-2 leading-relaxed max-w-3xl mb-8">
            The cleaning market is crowded and local. The business with the most trust wins. We build sites that load fast, embed your real Google reviews, show your actual before/after work, and make it effortless for homeowners to request a quote — available to cleaning businesses anywhere in the US.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white font-semibold text-[15px] rounded-sm hover:bg-navy-light transition-colors">
              Get a Quote →
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-4 border border-[#DDE3ED] text-text-2 font-semibold text-[15px] rounded-sm hover:border-navy hover:text-navy transition-colors">
              See Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Zuly case study teaser */}
      <section className="bg-bg2 py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Recent Work</SectionLabel>
          <h2 className="font-heading text-[38px] text-navy mb-8">Zuly Iyalode Cleaning, LLC</h2>
          <div className="bg-white border border-[#DDE3ED] rounded-xl overflow-hidden">
            <div className="bg-gradient-to-br from-navy to-navy-dark p-10 text-white">
              <div className="text-[10px] font-bold text-red/70 uppercase tracking-widest mb-2">Grand Strand, SC · Cleaning</div>
              <div className="font-heading text-[32px] leading-tight mb-3">Woman & Mother Owned.<br/><span className="text-red">8 Years in Business.</span></div>
              <p className="text-[14px] text-white/70 max-w-xl leading-relaxed">
                CCS built a 3-page Next.js site for Zuly's cleaning business in the Grand Strand — complete with a working quote form, before/after gallery using her real photos, embedded Google reviews, and full local SEO.
              </p>
            </div>
            <div className="p-6 grid md:grid-cols-3 gap-4">
              {[
                { label: 'Built in', value: '1 Day' },
                { label: 'Stack', value: 'Next.js + Tailwind' },
                { label: 'Includes', value: 'Quote form + Reviews + SEO' },
              ].map(s => (
                <div key={s.label} className="text-center p-4 bg-bg rounded-lg border border-[#DDE3ED]">
                  <div className="font-heading text-[22px] text-navy">{s.value}</div>
                  <div className="text-[11px] text-text-3 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-bg py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>What's Included</SectionLabel>
          <h2 className="font-heading text-[38px] text-navy mb-8">Your Cleaning Website Includes:</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Custom design for your brand + market',
              'Real before/after photo gallery',
              'Google Reviews embedded',
              'Online quote request form',
              'Service area map + neighborhood targeting',
              'Local SEO + Google Business Profile optimization',
              'Mobile-first, fast-loading build',
              'Copywriting done for you',
              'Call tracking + lead routing',
              '30-day post-launch support',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white border border-[#DDE3ED] rounded-lg px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-red/10 flex items-center justify-center text-red text-[10px] flex-shrink-0">✓</span>
                <span className="text-[14px] text-text-2">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-[40px] text-white mb-4">Ready to stand out in your market?</h2>
          <p className="text-[16px] text-white/60 mb-8">Tell us about your cleaning business and we'll put together a quote — no retainers, no long-term contracts for a website project.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red text-white font-semibold text-[16px] rounded-sm hover:bg-red-dark transition-colors">
            Get a Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
