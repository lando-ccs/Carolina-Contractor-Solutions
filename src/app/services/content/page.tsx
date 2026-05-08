import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Photo & Content — Real Jobsite Shoots for Contractors',
  description: 'A half-day on your jobsite gets you months of ad-ready photos and video. No stock. No templates. Real content shot on your actual job.',
}

const deliverables = [
  'Half-day on-site photo + video shoot',
  'Short-form vertical video cuts (Reels/TikTok/Shorts)',
  'Before & after photo sets',
  'Brand-matched color grading + editing',
  'Ad-ready asset library (organized and labeled)',
  'Job highlights reel',
  'Crew in-action shots',
  'Project process documentation',
]

const useCases = [
  { label: 'Website Hero', desc: 'Real jobsite imagery that builds trust in seconds — far more powerful than stock.' },
  { label: 'Meta Ads', desc: 'Authentic footage outperforms stock creatives by 3–5× in contractor markets.' },
  { label: 'Google Business Profile', desc: 'Recent photos on your GBP push rankings and click-through rates.' },
  { label: 'Instagram & TikTok', desc: 'Short-form vertical cuts ready to post — no editing required on your end.' },
  { label: 'Email Campaigns', desc: 'Before/after sets for seasonal campaigns and follow-up sequences.' },
  { label: 'Proposals & Estimates', desc: 'Professional project photos that justify your pricing.' },
]

export default function ContentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-[72px] pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          <SectionLabel>Photo & Content</SectionLabel>
          <h1 className="font-heading text-[52px] md:text-[64px] text-navy leading-[1.0] mb-6">
            Real Work.<br /><span className="text-red">Real Content.</span>
          </h1>
          <p className="text-[18px] text-text-2 leading-relaxed max-w-3xl mb-8">
            A half-day on your jobsite with our photo and video team — and you walk away with months of ad-ready assets. No stock photos. No templated creative. Everything shot on your actual jobs, in your market, with your crew.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white font-semibold text-[15px] rounded-sm hover:bg-navy-light transition-colors">
              Book a Shoot →
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-4 border border-[#DDE3ED] text-text-2 font-semibold text-[15px] rounded-sm hover:border-navy hover:text-navy transition-colors">
              See Sample Work
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-[12px] font-bold text-text-3 uppercase tracking-widest">Available To:</span>
            <span className="text-[13px] text-text-2">Contractors in NC & SC · Bundled with Booked Solid System</span>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-navy py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { stat: '3–5×', label: 'Better ad performance', sub: 'Real jobsite footage vs. stock in contractor markets' },
              { stat: '60%', label: 'More trust from homeowners', sub: 'When your own crew and work are visible on the site' },
              { stat: '½ Day', label: 'For months of content', sub: 'One shoot produces enough assets for a full quarter' },
            ].map(s => (
              <div key={s.stat} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="font-heading text-[44px] text-red mb-2">{s.stat}</div>
                <div className="font-heading text-[18px] text-white mb-1">{s.label}</div>
                <div className="text-[13px] text-white/50">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-bg2 py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>What You Get</SectionLabel>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-[38px] text-navy mb-6">Every Shoot Includes:</h2>
              <ul className="space-y-3">
                {deliverables.map(item => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-text-2">
                    <span className="w-5 h-5 rounded-full bg-red/10 flex items-center justify-center text-red text-[10px] flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-[38px] text-navy mb-6">Where You Use It:</h2>
              <div className="space-y-3">
                {useCases.map(u => (
                  <div key={u.label} className="bg-white border border-[#DDE3ED] rounded-lg p-4">
                    <div className="font-body font-bold text-[14px] text-navy mb-1">{u.label}</div>
                    <div className="text-[13px] text-text-2">{u.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg py-20 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel>Book a Shoot</SectionLabel>
          <h2 className="font-heading text-[40px] text-navy mb-4">Let's get on your jobsite.</h2>
          <p className="text-[16px] text-text-2 mb-8">Content shoots are included monthly in the Booked Solid System — or available as a standalone for contractors in NC & SC.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold text-[15px] rounded-sm hover:bg-navy-light transition-colors">
              Book a Standalone Shoot →
            </Link>
            <Link href="/services/booked-solid" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red text-white font-semibold text-[15px] rounded-sm hover:bg-red-dark transition-colors">
              See Booked Solid System →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
