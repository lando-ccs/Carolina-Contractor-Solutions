import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Portfolio — Real Contractor Sites Built by CCS',
  description: 'Real contractor websites and content shoots built by Carolina Contractor Solutions. Cleaning, landscaping, pressure washing, and more.',
}

const projects = [
  {
    id: 'zuly',
    client: 'Zuly Iyalode Cleaning, LLC',
    location: 'Grand Strand, SC',
    type: 'Cleaning',
    tags: ['Next.js', 'SEO', 'Quote Form', 'Google Reviews'],
    summary: 'Woman & mother owned, 8 years in business. Built a 3-page site with a working quote form, real before/after gallery, embedded Google reviews, and full local SEO — launched in one day.',
    highlights: ['Working quote form with email delivery', 'Before/after gallery from real client photos', 'Embedded Google reviews', 'LocalBusiness + AggregateRating schema', 'FAQ section + local SEO optimization'],
    color: 'from-navy to-navy-dark',
    label: 'Cleaning',
    placeholder: true,
    url: 'zuly-cleaning-lando-ccs-projects.vercel.app',
  },
  {
    id: 'fighting-grime',
    client: 'Fighting Grime Pressure Washing',
    location: 'Carolinas',
    type: 'Pressure Washing',
    tags: ['Website', 'Before/After', 'SEO'],
    summary: 'Conversion-focused hero, real before/after work gallery, and a site optimized to capture homeowners searching for pressure washing in their area.',
    highlights: ['Real jobsite before/after gallery', 'Conversion-focused hero section', 'Local SEO for Carolinas market', 'Mobile-first design'],
    color: 'from-[#2a4a7f] to-navy-dark',
    label: 'Pressure Washing',
    placeholder: false,
  },
  {
    id: 'cbl',
    client: 'Carolina Beach Landscaping',
    location: 'Carolina Beach, NC',
    type: 'Landscaping',
    tags: ['Website', 'Video Hero', 'Gallery', 'SEO'],
    summary: 'Video hero showcasing real jobsite footage, project gallery, and seasonal campaign landing pages — built around the premium design-build work CBL is known for.',
    highlights: ['Video hero from real jobsite shoot', 'Project portfolio gallery', 'Seasonal campaign pages', 'Full local SEO + GBP optimization'],
    color: 'from-[#2d5a27] to-[#1a3a18]',
    label: 'Landscaping',
    placeholder: false,
  },
  {
    id: 'courtesea',
    client: 'CourteSea',
    location: 'Carolinas',
    type: 'Marine / Service',
    tags: ['Website', 'Custom Design', 'SEO'],
    summary: 'A clean, premium site for a marine service business — custom design that reflects the quality of the work and drives qualified inquiries.',
    highlights: ['Custom premium design', 'Service area targeting', 'Lead capture optimization', 'Mobile-first build'],
    color: 'from-[#0a3d6b] to-[#052040]',
    label: 'Marine Service',
    placeholder: false,
  },
]

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-bg pt-[72px] pb-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto pt-12">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="font-heading text-[52px] text-navy leading-[1.0] mb-4">
            Real Sites.<br /><span className="text-red">Real Contractors.</span>
          </h1>
          <p className="text-[18px] text-text-2 max-w-2xl leading-relaxed">
            Every site below was built from scratch — custom design, real copy, real photos. No templates, no stock.
          </p>
        </div>
      </section>

      <section className="bg-bg pb-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((p, idx) => (
            <div key={p.id} className={`rounded-xl border border-[#DDE3ED] bg-white overflow-hidden ${idx === 0 ? 'ring-2 ring-navy' : ''}`}>
              {idx === 0 && (
                <div className="bg-navy text-white text-center py-2 text-[11px] font-bold uppercase tracking-widest">
                  ✦ Latest Project
                </div>
              )}
              <div className="grid md:grid-cols-5 gap-0">
                {/* Screen preview */}
                <div className={`md:col-span-2 bg-gradient-to-br ${p.color} p-8 flex flex-col justify-between min-h-[240px]`}>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    {p.url && <span className="ml-2 text-[10px] text-white/30 font-mono">{p.url}</span>}
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1">{p.label}</div>
                    <div className="font-heading text-[26px] text-white leading-tight mb-2">{p.client.split(' ').slice(0, 3).join(' ')}</div>
                    <div className="text-[12px] text-white/50">{p.location}</div>
                    {p.placeholder && (
                      <div className="mt-3 inline-block bg-white/10 border border-white/20 rounded px-3 py-1 text-[10px] text-white/60">
                        📸 Screenshots coming soon
                      </div>
                    )}
                  </div>
                </div>

                {/* Detail */}
                <div className="md:col-span-3 p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 className="font-body font-bold text-[18px] text-text">{p.client}</h2>
                      <div className="text-[13px] text-text-3">{p.location} · {p.type}</div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {p.tags.map(t => (
                        <span key={t} className="text-[10px] font-semibold bg-bg2 border border-[#DDE3ED] text-text-2 px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[14px] text-text-2 leading-relaxed mb-5">{p.summary}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {p.highlights.map(h => (
                      <div key={h} className="flex items-start gap-2 text-[12px] text-text-2">
                        <span className="text-red flex-shrink-0 mt-0.5">✓</span> {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-[40px] text-white mb-4">Want to be next?</h2>
          <p className="text-[16px] text-white/60 mb-8">We build contractor sites fast and get them generating leads — no drag, no months of back-and-forth.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/services/websites" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-navy font-semibold text-[15px] rounded-sm hover:bg-bg transition-colors">
              Get a Website →
            </Link>
            <Link href="/services/booked-solid" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-red text-white font-semibold text-[15px] rounded-sm hover:bg-red-dark transition-colors">
              See the Booked Solid System →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
