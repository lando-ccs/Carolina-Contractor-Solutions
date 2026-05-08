import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Booked Solid System — Done-For-You Lead Acquisition for Contractors',
  description: 'A complete client acquisition engine for roofers, landscapers, and HVAC companies in NC & SC. Website, Meta ads, monthly content shoot, automated follow-up — all done for you.',
}

const tiers = [
  {
    name: '3-Month',
    setup: '$5,000',
    monthly: '$5,000/mo',
    commitment: '3-month contract',
    desc: 'Best for owners ready to move now and test the system.',
    popular: false,
  },
  {
    name: '6-Month',
    setup: '$2,500',
    monthly: '$5,000/mo',
    commitment: '6-month contract',
    desc: 'Most popular. Enough runway to see compounding results.',
    popular: true,
  },
  {
    name: '12-Month',
    setup: 'Waived',
    monthly: '$5,000/mo',
    commitment: '12-month contract',
    desc: 'Maximum market dominance. Setup fee completely waived.',
    popular: false,
  },
]

const deliverables = [
  { cat: 'Website', items: ['Premium contractor website', 'Custom copywriting', 'Mobile-first design', 'SEO + local schema markup', 'Call tracking + lead routing', 'Landing pages tied to campaigns'] },
  { cat: 'Ads', items: ['Meta ad campaign management', '3–5 ad creative variants/month', 'Retargeting campaigns', 'Storm season / seasonal campaigns', 'Weekly optimization', 'Lead quality reporting'] },
  { cat: 'Content', items: ['Monthly on-site photo + video shoot', 'Short-form vertical cuts', 'Before & after sets', 'Brand-matched color grade', 'Ad-ready asset library'] },
  { cat: 'Automation', items: ['Instant automated lead response (text + email)', 'Missed call text-back', '7-day lead nurture sequence', 'Appointment reminders + no-show recovery', 'Pre-qualification intake form', 'Post-job review request', 'Referral request automation'] },
  { cat: 'CRM & Reporting', items: ['GoHighLevel CRM — full setup + management', 'Real-time pipeline dashboard (client login)', 'Monthly performance report', 'Monthly strategy call', 'GBP setup + optimization'] },
]

export default function BookedSolidPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-[72px] pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full border-[60px] border-white" />
          <div className="absolute left-10 top-20 w-48 h-48 rounded-full border-[24px] border-white" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 pt-12">
          <div className="inline-flex items-center gap-2 bg-red/20 border border-red/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-red pulse-dot" />
            <span className="text-[11px] font-bold text-red uppercase tracking-widest">Carolinas Only · One Client Per Market</span>
          </div>
          <h1 className="font-heading text-[52px] md:text-[68px] text-white leading-[1.0] mb-6">
            The Booked Solid System
          </h1>
          <p className="text-[18px] text-white/70 leading-relaxed max-w-3xl mb-8">
            A fully done-for-you client acquisition system for roofers, landscapers, and HVAC companies in NC & SC. Premium website, Meta ad campaigns with monthly on-location creative, a complete GoHighLevel pipeline with automated lead follow-up, and a real-time dashboard. We manage everything — you focus on the work.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-red text-white font-semibold text-[15px] rounded-sm hover:bg-red-dark transition-colors">
              Book a Discovery Call →
            </Link>
            <a href="#pricing" className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white/80 font-semibold text-[15px] rounded-sm hover:border-white/50 transition-colors">
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-bg2 py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Who It's For</SectionLabel>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-heading text-[40px] text-navy mb-4">Built Specifically For:</h2>
              <div className="space-y-3">
                {[
                  { icon: '🏠', label: 'Roofers in NC & SC' },
                  { icon: '🌿', label: 'Landscapers in NC & SC' },
                  { icon: '❄️', label: 'HVAC Companies in NC & SC' },
                ].map(i => (
                  <div key={i.label} className="flex items-center gap-3 bg-white border border-[#DDE3ED] rounded-lg px-5 py-4">
                    <span className="text-2xl">{i.icon}</span>
                    <span className="font-heading text-[20px] text-navy">{i.label}</span>
                    <span className="ml-auto text-[10px] font-bold text-red bg-red/10 px-2 py-0.5 rounded-full">BSS Available</span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-text-3 mt-4">
                * Website-only and content packages are available to all contractor types, nationwide.
              </p>
            </div>
            <div className="bg-white border border-[#DDE3ED] rounded-xl p-6">
              <h3 className="font-heading text-[22px] text-navy mb-4">This Is For You If You're:</h3>
              <ul className="space-y-3">
                {[
                  'Tired of relying 100% on word of mouth',
                  'Ready to hand your marketing to someone who actually understands your trade',
                  'Burned by a generic agency that didn\'t get results',
                  'Losing jobs to competitors with better online presence',
                  'Missing leads because you\'re on the job all day',
                  'Ready for a predictable pipeline — not feast or famine',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-text-2">
                    <span className="w-5 h-5 rounded-full bg-red/10 flex items-center justify-center text-red text-[10px] flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-bg py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>The Full System</SectionLabel>
          <h2 className="font-heading text-[40px] text-navy mb-3">Everything Included.</h2>
          <p className="text-[16px] text-text-2 mb-12 max-w-2xl">
            A full marketing department — for less than the cost of one bad hire.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map(d => (
              <div key={d.cat} className="bg-white border border-[#DDE3ED] rounded-xl p-6 hover:border-navy hover:shadow-md transition-all">
                <h3 className="font-heading text-[20px] text-navy mb-4">{d.cat}</h3>
                <ul className="space-y-2.5">
                  {d.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-text-2">
                      <span className="w-4 h-4 rounded-full bg-red/10 flex items-center justify-center text-red text-[9px] flex-shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-bg2 py-20 px-6 lg:px-12" id="pricing">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-heading text-[40px] text-navy mb-3">Transparent Pricing.</h2>
          <p className="text-[16px] text-text-2 mb-12 max-w-2xl">
            One monthly retainer. No hidden fees. No nickel-and-diming. Choose your commitment level.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {tiers.map(tier => (
              <div
                key={tier.name}
                className={`rounded-xl border-2 p-7 relative flex flex-col ${
                  tier.popular
                    ? 'border-navy bg-navy text-white shadow-2xl shadow-navy/30'
                    : 'border-[#DDE3ED] bg-white'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${tier.popular ? 'text-white/50' : 'text-text-3'}`}>
                  {tier.commitment}
                </div>
                <div className={`font-heading text-[36px] leading-none mb-1 ${tier.popular ? 'text-white' : 'text-navy'}`}>
                  {tier.name}
                </div>
                <div className={`font-heading text-[28px] mb-1 ${tier.popular ? 'text-red-light' : 'text-red'}`}>
                  {tier.monthly}
                </div>
                <div className={`text-[13px] mb-4 ${tier.popular ? 'text-white/60' : 'text-text-3'}`}>
                  Setup: <span className="font-semibold">{tier.setup}</span>
                </div>
                <p className={`text-[13px] leading-relaxed flex-1 mb-6 ${tier.popular ? 'text-white/70' : 'text-text-2'}`}>
                  {tier.desc}
                </p>
                <Link
                  href="/contact"
                  className={`block text-center px-5 py-3 font-semibold text-[14px] rounded-sm transition-colors ${
                    tier.popular
                      ? 'bg-red text-white hover:bg-red-dark'
                      : 'bg-navy text-white hover:bg-navy-light'
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-white border border-[#DDE3ED] rounded-xl p-6 text-center">
            <p className="text-[14px] text-text-2">
              <strong className="text-text">All plans include:</strong> full onboarding, dedicated account manager, monthly strategy call, and our 90-day lead guarantee. Ad spend (Meta/Google) billed separately and kept in your ad account.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-navy py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel light>Our Guarantee</SectionLabel>
          <h2 className="font-heading text-[44px] text-white mb-6">
            If the leads don't cover the retainer in 90 days — your next month is free.
          </h2>
          <p className="text-[16px] text-white/60 mb-4 leading-relaxed max-w-2xl mx-auto">
            And we only work with <strong className="text-white">one company per market</strong>. Your leads are exclusively yours. We will never take on a direct competitor in your area.
          </p>
          <p className="text-[13px] text-white/40 max-w-xl mx-auto">
            Trigger condition: client must respond to booked estimates and follow up within the agreed response window. Lead quality determined by intake criteria agreed upon at onboarding.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg py-20 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel>Ready?</SectionLabel>
          <h2 className="font-heading text-[40px] text-navy mb-4">One call. That's all it takes.</h2>
          <p className="text-[16px] text-text-2 mb-8">30 minutes. We learn your market, your goals, and tell you honestly if we're the right fit. No pressure, no pitch deck.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red text-white font-semibold text-[16px] rounded-sm hover:bg-red-dark transition-colors">
            Book a Discovery Call →
          </Link>
          <div className="mt-4 text-[12px] text-text-3">
            We respond within 1 business day · No contracts sent before we talk
          </div>
        </div>
      </section>
    </>
  )
}
