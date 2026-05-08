import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
export default function GeneralContractorsPage() {
  return (
    <>
      <section className="bg-bg pt-[72px] pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          <div className="inline-flex items-center gap-2 bg-navy/10 border border-navy/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[11px] font-bold text-navy uppercase tracking-widest">Websites · Nationwide</span>
          </div>
          <SectionLabel>General Contractors</SectionLabel>
          <h1 className="font-heading text-[52px] text-navy leading-[1.0] mb-6">A Site That Reflects<br/><span className="text-red">Your Quality of Work.</span></h1>
          <p className="text-[18px] text-text-2 leading-relaxed max-w-3xl mb-8">Remodels, additions, new builds — your site should be as polished as your finished projects. We build contractor websites that capture high-quality leads from homeowners actively looking — available nationwide.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white font-semibold text-[15px] rounded-sm hover:bg-navy-light transition-colors">Get a Quote →</Link>
        </div>
      </section>
    </>
  )
}
