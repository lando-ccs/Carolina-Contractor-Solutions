import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Who We Serve — Contractor Marketing for Trades in NC & SC',
  description: 'CCS builds websites for all contractor types nationwide, and runs the Booked Solid System for roofers, landscapers, and HVAC in the Carolinas.',
}

const bssIndustries = [
  {
    href: '/who-we-serve/roofers',
    icon: '🏠',
    title: 'Roofers',
    body: 'Storm season campaigns, insurance claim leads, repair & replacement — the full Booked Solid System, built for roofing.',
    region: 'NC & SC',
    services: ['Booked Solid System', 'Websites', 'Content'],
  },
  {
    href: '/who-we-serve/landscapers',
    icon: '🌿',
    title: 'Landscapers',
    body: 'Design-build, lawn maintenance, hardscape — we shoot the yard work and turn it into campaigns that book estimates.',
    region: 'NC & SC',
    services: ['Booked Solid System', 'Websites', 'Content'],
  },
  {
    href: '/who-we-serve/hvac',
    icon: '❄️',
    title: 'HVAC',
    body: 'Install and service calls targeting homeowners by ZIP code and home age — seasonal campaigns that fill your schedule.',
    region: 'NC & SC',
    services: ['Booked Solid System', 'Websites', 'Content'],
  },
]

const websiteIndustries = [
  {
    href: '/who-we-serve/cleaning',
    icon: '✨',
    title: 'Cleaning',
    body: 'Residential and commercial cleaning businesses that need a site that builds trust and books appointments.',
    region: 'Nationwide',
    services: ['Websites', 'Content'],
  },
  {
    href: '/who-we-serve/pressure-washing',
    icon: '💧',
    title: 'Pressure Washing',
    body: 'Before/after-driven sites that show exactly what you do and make it easy to get a quote.',
    region: 'Nationwide',
    services: ['Websites', 'Content'],
  },
  {
    href: '/who-we-serve/general-contractors',
    icon: '🔨',
    title: 'General Contractors',
    body: 'Remodels, additions, new builds — a site that reflects your quality and captures leads from homeowners actively looking.',
    region: 'Nationwide',
    services: ['Websites'],
  },
  {
    href: '/who-we-serve/plumbing',
    icon: '🔧',
    title: 'Plumbing',
    body: 'Emergency service, installs, and remodels — a fast site that captures the homeowner before they move to the next result.',
    region: 'Nationwide',
    services: ['Websites'],
  },
]

export default function WhoWeServePage() {
  return (
    <>
      <section className="bg-bg pt-[72px] pb-12 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          <SectionLabel>Who We Serve</SectionLabel>
          <h1 className="font-heading text-[52px] text-navy leading-[1.0] mb-4">
            Built for the Trades.<br /><span className="text-red">Made in the Carolinas.</span>
          </h1>
          <p className="text-[18px] text-text-2 max-w-3xl leading-relaxed">
            We build contractor websites for all trades, nationwide. Our full Booked Solid System — ads, content, and automation — is exclusively for roofers, landscapers, and HVAC companies in NC & SC.
          </p>
        </div>
      </section>

      {/* BSS Industries */}
      <section className="bg-navy py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <SectionLabel light>Booked Solid System</SectionLabel>
          </div>
          <h2 className="font-heading text-[38px] text-white mb-3">Full System Available</h2>
          <p className="text-[15px] text-white/60 mb-10 max-w-2xl">
            These three industries get access to the complete Booked Solid System — website, ads, monthly content shoot, CRM automation, and pipeline dashboard.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {bssIndustries.map(i => (
              <Link
                key={i.title}
                href={i.href}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                <div className="text-3xl mb-4">{i.icon}</div>
                <h3 className="font-heading text-[24px] text-white mb-2">{i.title}</h3>
                <p className="text-[13px] text-white/60 leading-relaxed flex-1 mb-4">{i.body}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {i.services.map(s => (
                    <span key={s} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s === 'Booked Solid System' ? 'bg-red text-white' : 'bg-white/10 text-white/70'}`}>{s}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/40 font-semibold uppercase tracking-wider">{i.region}</span>
                  <span className="text-[13px] font-semibold text-red-light group-hover:translate-x-1 transition-transform inline-block">See industry →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Website-only Industries */}
      <section className="bg-bg2 py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Websites for All Trades</SectionLabel>
          <h2 className="font-heading text-[38px] text-navy mb-3">Nationwide Website Services</h2>
          <p className="text-[15px] text-text-2 mb-10 max-w-2xl">
            Contractor websites are available to all trades, anywhere in the US. No geographic restrictions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {websiteIndustries.map(i => (
              <Link
                key={i.title}
                href={i.href}
                className="group bg-white border border-[#DDE3ED] rounded-xl p-5 hover:border-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="text-2xl mb-3">{i.icon}</div>
                <h3 className="font-heading text-[20px] text-navy mb-2">{i.title}</h3>
                <p className="text-[12px] text-text-2 leading-relaxed flex-1 mb-3">{i.body}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {i.services.map(s => (
                    <span key={s} className="text-[10px] font-semibold text-text-2 bg-bg2 border border-[#DDE3ED] px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
                <div className="text-[12px] font-semibold text-red group-hover:translate-x-1 transition-transform inline-block">Learn more →</div>
              </Link>
            ))}
          </div>
          <div className="mt-8 p-5 bg-white border border-[#DDE3ED] rounded-xl text-center">
            <p className="text-[14px] text-text-2">
              Don't see your trade? <Link href="/contact" className="text-navy font-semibold hover:text-red transition-colors">Contact us →</Link> — if you're a contractor, we can build your site.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
