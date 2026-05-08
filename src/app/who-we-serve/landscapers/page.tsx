import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Landscaping Marketing in NC & SC — Booked Solid System for Landscapers',
  description: 'Done-for-you marketing for landscaping companies in NC & SC. Website, Meta ads, monthly jobsite content shoots, CRM automation, and a 90-day lead guarantee.',
}

const features = [
  { t: 'Design-Build Campaigns', b: 'Targeted ads reaching homeowners actively researching landscape design — the highest ticket, highest margin work.' },
  { t: 'Monthly Shoot on Your Jobs', b: 'We come out to your best jobs each month. Finished patios, fresh installs, hardscape — visual content that sells design-build better than any ad copy.' },
  { t: 'Seasonal Campaign Playbook', b: 'Spring planting, fall cleanup, irrigation winterization — pre-built seasonal campaigns that fill your schedule during natural buying windows.' },
  { t: 'Automated Estimate Follow-Up', b: 'Most landscaping jobs are lost in the follow-up. Our system texts and emails every lead automatically until they\'re booked or opt out.' },
  { t: 'Before & After Lead Generation', b: 'Nothing sells landscaping like a great before/after. We build your ad creative around real project transformations — your actual work.' },
  { t: 'Exclusive Per Market', b: 'One landscaping company per market. No competitor in your area gets the same system. Your pipeline stays yours.' },
]

export default function LandscapersPage() {
  return (
    <>
      <section className="bg-navy pt-[72px] pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full border-[60px] border-white" />
        </div>
        <div className="max-w-5xl mx-auto pt-12 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red/20 border border-red/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-red pulse-dot" />
            <span className="text-[11px] font-bold text-red uppercase tracking-widest">Booked Solid System · Landscapers · NC & SC Only</span>
          </div>
          <h1 className="font-heading text-[52px] md:text-[64px] text-white leading-[1.0] mb-6">
            More Design-Build Jobs.<br /><span className="text-red">Fewer Slow Seasons.</span>
          </h1>
          <p className="text-[18px] text-white/70 leading-relaxed max-w-3xl mb-8">
            We build the full marketing system for landscaping companies in NC & SC — conversion-focused website, Meta ad campaigns with monthly on-site creative, seasonal playbooks, and automated follow-up so no lead slips through.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-red text-white font-semibold text-[15px] rounded-sm hover:bg-red-dark transition-colors">
              Book a Discovery Call →
            </Link>
            <Link href="/services/booked-solid" className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white/80 font-semibold text-[15px] rounded-sm hover:border-white/50 transition-colors">
              See Full Offer
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Built for Landscaping</SectionLabel>
          <h2 className="font-heading text-[38px] text-navy mb-10">What Makes This Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(f => (
              <div key={f.t} className="bg-white border border-[#DDE3ED] rounded-xl p-5 hover:border-navy hover:shadow-md transition-all">
                <h3 className="font-heading text-[18px] text-navy mb-2">{f.t}</h3>
                <p className="text-[13px] text-text-2 leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red py-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-[60px] border-white" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-[44px] text-white mb-4">
            Leads guaranteed to cover the retainer in 90 days — or your next month is free.
          </h2>
          <p className="text-[16px] text-white/80 mb-8">One landscaping company per market. Your leads. Your system.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red font-semibold text-[16px] rounded-sm hover:bg-bg transition-colors">
            Book a Discovery Call →
          </Link>
          <div className="mt-4 text-[12px] text-white/60">
            3, 6 & 12-month contracts · See <Link href="/services/booked-solid#pricing" className="underline">pricing →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
