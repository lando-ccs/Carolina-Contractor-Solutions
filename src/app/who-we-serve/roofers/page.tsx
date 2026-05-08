import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Roofing Marketing in NC & SC — Booked Solid System for Roofers',
  description: 'Done-for-you marketing for roofing companies in North and South Carolina. Website, Meta ads, monthly content shoot, CRM automation, and a 90-day lead guarantee.',
}

const problems = [
  '100% reliant on word of mouth — no predictable pipeline',
  'Feast or famine — slammed one month, dead the next',
  'Tried running Facebook ads yourself and wasted money',
  'Hired a generic agency that didn\'t understand roofing',
  'Missing leads because you\'re on the roof all day',
  'No follow-up system — leads go cold while you\'re working',
  'Losing jobs to competitors with better Google presence',
  'No strategy for storm season — missing the biggest windows',
]

const results = [
  'Qualified storm damage leads in your pipeline daily',
  'Automated follow-up within 60 seconds — while you\'re on the roof',
  'Ads running 24/7 with fresh creative every month',
  'A pipeline dashboard so you always know where every lead stands',
  'More 5-star reviews building your reputation automatically',
  'No competitor in your market running the same system',
]

export default function RoofersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-[72px] pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full border-[60px] border-white" />
        </div>
        <div className="max-w-5xl mx-auto pt-12 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red/20 border border-red/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-red pulse-dot" />
            <span className="text-[11px] font-bold text-red uppercase tracking-widest">Booked Solid System · Roofers · NC & SC Only</span>
          </div>
          <h1 className="font-heading text-[52px] md:text-[64px] text-white leading-[1.0] mb-6">
            More Roofing Jobs.<br /><span className="text-red">Less Chasing.</span>
          </h1>
          <p className="text-[18px] text-white/70 leading-relaxed max-w-3xl mb-8">
            We build the entire marketing operation for roofing companies in NC & SC — storm lead campaigns, a conversion-focused website, monthly on-site content shoots, and automated follow-up that responds to every lead the moment they come in.
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

      {/* Problems */}
      <section className="bg-bg2 py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel>Sound Familiar?</SectionLabel>
              <h2 className="font-heading text-[38px] text-navy mb-6">The Problems We Solve</h2>
              <ul className="space-y-3">
                {problems.map(p => (
                  <li key={p} className="flex items-start gap-3 text-[14px] text-text-2">
                    <span className="w-5 h-5 rounded-full bg-red/10 flex items-center justify-center text-red text-[12px] flex-shrink-0 mt-0.5">✕</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>After The System</SectionLabel>
              <h2 className="font-heading text-[38px] text-navy mb-6">What Changes</h2>
              <ul className="space-y-3">
                {results.map(r => (
                  <li key={r} className="flex items-start gap-3 text-[14px] text-text-2">
                    <span className="w-5 h-5 rounded-full bg-red/10 flex items-center justify-center text-red text-[10px] flex-shrink-0 mt-0.5">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing-specific features */}
      <section className="bg-bg py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Built for Roofing</SectionLabel>
          <h2 className="font-heading text-[38px] text-navy mb-10">What Makes This Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: 'Storm Season Campaigns', b: 'Pre-built storm damage campaigns ready to activate the moment a storm hits your market. We monitor weather and turn them on fast.' },
              { t: 'Insurance Claim Lead Gen', b: 'Copy and targeting optimized specifically for homeowners navigating insurance claims — the highest-value roofing leads.' },
              { t: 'Monthly On-Site Shoot', b: 'We come out to your jobs once a month. Real tear-offs, new installs, before/after shots — content stock agencies can\'t replicate.' },
              { t: 'Missed Call Text-Back', b: 'You\'re on the roof. A lead calls and hangs up. Within 60 seconds they get a text. You never lose a lead to a missed call again.' },
              { t: '7-Day Nurture Sequence', b: 'Every new lead gets a drip sequence of texts and emails — so the homeowner who wasn\'t ready on Monday is booked by Thursday.' },
              { t: 'Exclusive Market', b: 'We only work with one roofing company per market. No competitor in your ZIP gets the same system. Ever.' },
            ].map(f => (
              <div key={f.t} className="bg-white border border-[#DDE3ED] rounded-xl p-5 hover:border-navy hover:shadow-md transition-all">
                <h3 className="font-heading text-[18px] text-navy mb-2">{f.t}</h3>
                <p className="text-[13px] text-text-2 leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee + CTA */}
      <section className="bg-red py-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-[60px] border-white" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-[44px] text-white mb-4">
            Leads guaranteed to cover the retainer in 90 days — or your next month is free.
          </h2>
          <p className="text-[16px] text-white/80 mb-8 max-w-xl mx-auto">
            One roofing company per market. Your leads. Your system. Your competitive edge.
          </p>
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
