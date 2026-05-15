import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Marketing for Plumbers in NC & SC — CCS',
  description: 'Websites, Google Ads, and done-for-you marketing for plumbing contractors across North and South Carolina. Service calls, repairs, and emergency campaigns.',
}

export default function PlumbingPage() {
  return (
    <>
      <section className="bg-bg pt-[72px] pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          <div className="inline-flex items-center gap-2 bg-navy/10 border border-navy/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[11px] font-bold text-navy uppercase tracking-widest">Websites · Nationwide</span>
          </div>
          <SectionLabel>Plumbing</SectionLabel>
          <h1 className="font-heading text-[52px] text-navy leading-[1.0] mb-6">Fast Site.<br/><span className="text-red">First Call Wins.</span></h1>
          <p className="text-[18px] text-text-2 leading-relaxed max-w-3xl mb-8">Emergency plumbing calls go to whoever loads fastest and looks most trustworthy. We build plumbing sites that check both boxes and make it effortless to call or book — available nationwide.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white font-semibold text-[15px] rounded-sm hover:bg-navy-light transition-colors">Get a Quote →</Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-4 border border-navy/30 text-navy font-semibold text-[15px] rounded-sm hover:bg-navy/5 transition-colors">View Our Work</Link>
          </div>
        </div>
      </section>
    </>
  )
}
