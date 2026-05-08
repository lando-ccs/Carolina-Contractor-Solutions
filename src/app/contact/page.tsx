'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export default function ContactPage() {
  return (
    <>
      <section className="bg-bg pt-[72px] pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h1 className="font-heading text-[48px] text-navy leading-[1.0] mb-5">
                Let's Talk.
              </h1>
              <p className="text-[16px] text-text-2 leading-relaxed mb-8">
                Fill out the form and we'll be in touch within 1 business day. If you're interested in the Booked Solid System, let us know your trade, market, and how you're currently getting leads.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: '📞', label: 'Phone', val: '(980) 555-1234', href: 'tel:9805551234' },
                  { icon: '✉️', label: 'Email', val: 'hello@carolinacontractorsolutions.com', href: 'mailto:hello@carolinacontractorsolutions.com' },
                  { icon: '📍', label: 'Serving', val: 'NC & SC (Full System) · Nationwide (Websites)', href: null },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{c.icon}</span>
                    <div>
                      <div className="text-[11px] font-bold text-text-3 uppercase tracking-widest">{c.label}</div>
                      {c.href
                        ? <a href={c.href} className="text-[14px] text-text-2 hover:text-navy transition-colors">{c.val}</a>
                        : <div className="text-[14px] text-text-2">{c.val}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-navy/5 border border-[#DDE3ED] rounded-xl p-5">
                <div className="font-heading text-[18px] text-navy mb-2">Interested in the Booked Solid System?</div>
                <p className="text-[13px] text-text-2 leading-relaxed mb-3">
                  Available exclusively for roofers, landscapers, and HVAC companies in NC & SC. One client per market.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {['Roofers', 'Landscapers', 'HVAC'].map(t => (
                    <span key={t} className="text-[11px] font-bold bg-red text-white px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                  <span className="text-[11px] font-medium text-text-3 px-2.5 py-1">NC & SC only</span>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white border border-[#DDE3ED] rounded-xl p-7 shadow-sm">
              <h2 className="font-heading text-[24px] text-navy mb-6">Tell Us About Your Business</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-text mb-1.5">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-bg border-[1.5px] border-[#DDE3ED] rounded-sm px-3 py-2.5 text-[14px] text-text placeholder-text-3 focus:outline-none focus:border-navy transition-colors font-body" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-text mb-1.5">Last Name</label>
                    <input type="text" placeholder="Smith" className="w-full bg-bg border-[1.5px] border-[#DDE3ED] rounded-sm px-3 py-2.5 text-[14px] text-text placeholder-text-3 focus:outline-none focus:border-navy transition-colors font-body" />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-text mb-1.5">Business Name</label>
                  <input type="text" placeholder="Palmetto Roofing Co." className="w-full bg-bg border-[1.5px] border-[#DDE3ED] rounded-sm px-3 py-2.5 text-[14px] text-text placeholder-text-3 focus:outline-none focus:border-navy transition-colors font-body" />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-text mb-1.5">Email</label>
                  <input type="email" placeholder="john@yourcompany.com" className="w-full bg-bg border-[1.5px] border-[#DDE3ED] rounded-sm px-3 py-2.5 text-[14px] text-text placeholder-text-3 focus:outline-none focus:border-navy transition-colors font-body" />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-text mb-1.5">Phone</label>
                  <input type="tel" placeholder="(980) 555-0000" className="w-full bg-bg border-[1.5px] border-[#DDE3ED] rounded-sm px-3 py-2.5 text-[14px] text-text placeholder-text-3 focus:outline-none focus:border-navy transition-colors font-body" />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-text mb-1.5">What are you interested in?</label>
                  <select className="w-full bg-bg border-[1.5px] border-[#DDE3ED] rounded-sm px-3 py-2.5 text-[14px] text-text focus:outline-none focus:border-navy transition-colors font-body">
                    <option value="">Select a service...</option>
                    <option>Booked Solid System (Roofing / Landscaping / HVAC — NC & SC)</option>
                    <option>Contractor Website (Any trade, nationwide)</option>
                    <option>Photo & Content Shoot (NC & SC)</option>
                    <option>Not sure — want to talk</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-text mb-1.5">Tell us about your business</label>
                  <textarea placeholder="Trade, market, how you're currently getting leads, biggest challenge..." rows={4} className="w-full bg-bg border-[1.5px] border-[#DDE3ED] rounded-sm px-3 py-2.5 text-[14px] text-text placeholder-text-3 focus:outline-none focus:border-navy transition-colors font-body resize-none" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-red text-white font-semibold text-[15px] rounded-sm hover:bg-red-dark transition-colors">
                  Send Message →
                </button>
                <p className="text-[11px] text-text-3 text-center">We respond within 1 business day</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
