import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Services — Websites, Booked Solid System & Photo/Content',
  description: 'Three services for contractors: conversion-focused websites (nationwide), the Booked Solid System done-for-you lead engine (Carolinas), and jobsite photo & content (Carolinas).',
}

const services = [
  {
    href: '/services/websites',
    num: '01',
    title: 'Contractor Websites',
    badge: 'Nationwide',
    badgeColor: 'bg-navy/10 text-navy',
    body: 'A conversion-focused contractor site that loads fast, earns trust in seconds, and makes it dead simple for homeowners to call or book. Custom design, real copywriting, SEO, and call tracking included.',
    cta: 'Get a Quote',
    includes: ['Custom design + copy', 'Mobile-first build', 'SEO + local schema', 'Call tracking', 'Google Reviews embedded', '30-day support'],
  },
  {
    href: '/services/booked-solid',
    num: '02',
    title: 'Booked Solid System',
    badge: 'Carolinas Only',
    badgeColor: 'bg-red/10 text-red',
    body: 'A fully done-for-you client acquisition engine. Premium website, Meta ad campaigns with monthly on-location content shoots, a complete GoHighLevel CRM with automated follow-up, and a real-time pipeline dashboard.',
    cta: 'See the System',
    includes: ['Premium website', 'Meta ads + creative', 'Monthly content shoot', 'GoHighLevel CRM + automation', 'Pipeline dashboard', 'Monthly strategy call'],
    featured: true,
  },
  {
    href: '/services/content',
    num: '03',
    title: 'Photo & Content',
    badge: 'Carolinas Only',
    badgeColor: 'bg-navy/10 text-navy',
    body: 'A half-day on your jobsite gets you months of ad-ready video and photos. No stock. No templates. Everything shot and edited to match your brand and feed directly into your campaigns.',
    cta: 'Book a Shoot',
    includes: ['Half-day on-site shoot', 'Short-form vertical cuts', 'Before & after sets', 'Brand-matched edit', 'Ad-ready asset library'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-bg pt-[72px] pb-12 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          <SectionLabel>Services</SectionLabel>
          <h1 className="font-heading text-[52px] text-navy leading-[1.0] mb-4">
            Three Services.<br /><span className="text-red">One Goal.</span>
          </h1>
          <p className="text-[18px] text-text-2 max-w-2xl leading-relaxed">
            More calls, more booked jobs. Pick what you need, or get the whole system.
          </p>
        </div>
      </section>

      <section className="bg-bg pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map(s => (
            <div
              key={s.num}
              className={`rounded-xl border-2 p-8 ${s.featured ? 'border-navy bg-navy' : 'border-[#DDE3ED] bg-white'}`}
            >
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`font-heading text-[48px] leading-none ${s.featured ? 'text-white/20' : 'text-[#DDE3ED]'}`}>{s.num}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${s.featured ? 'bg-red/20 text-red-light' : s.badgeColor}`}>{s.badge}</span>
                  </div>
                  <h2 className={`font-heading text-[32px] mb-3 ${s.featured ? 'text-white' : 'text-navy'}`}>{s.title}</h2>
                  <p className={`text-[15px] leading-relaxed mb-5 ${s.featured ? 'text-white/70' : 'text-text-2'}`}>{s.body}</p>
                  <Link
                    href={s.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 font-semibold text-[14px] rounded-sm transition-colors ${
                      s.featured ? 'bg-red text-white hover:bg-red-dark' : 'bg-navy text-white hover:bg-navy-light'
                    }`}
                  >
                    {s.cta} →
                  </Link>
                </div>
                <div>
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${s.featured ? 'text-white/40' : 'text-text-3'}`}>Includes</div>
                  <ul className="space-y-2">
                    {s.includes.map(item => (
                      <li key={item} className={`flex items-center gap-2 text-[13px] ${s.featured ? 'text-white/70' : 'text-text-2'}`}>
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] flex-shrink-0 ${s.featured ? 'bg-red/20 text-red-light' : 'bg-red/10 text-red'}`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
