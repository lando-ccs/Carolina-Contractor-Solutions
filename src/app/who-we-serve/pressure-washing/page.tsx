import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
export default function PressureWashingPage() {
  return (
    <>
      <section className="bg-bg pt-[72px] pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          <div className="inline-flex items-center gap-2 bg-navy/10 border border-navy/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[11px] font-bold text-navy uppercase tracking-widest">Websites + Content · Nationwide</span>
          </div>
          <SectionLabel>Pressure Washing</SectionLabel>
          <h1 className="font-heading text-[52px] text-navy leading-[1.0] mb-6">Before & After Sells.<br/><span className="text-red">We Build Around It.</span></h1>
          <p className="text-[18px] text-text-2 leading-relaxed max-w-3xl mb-8">Nothing markets pressure washing better than a great before/after. We build sites that showcase your real work and make it effortless for homeowners to get a quote — available nationwide.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white font-semibold text-[15px] rounded-sm hover:bg-navy-light transition-colors">Get a Quote →</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Featured Work</SectionLabel>
            <h2>See It<br /><span className="red">Live.</span></h2>
          </div>
          <div className="portfolio-grid">
            <div className="port-card">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" />
                </div>
                <div className="browser-screen">
                  <img src="/assets/portfolio/Fighinting Grime Home.webp" alt="Fighting Grime Pressure Washing website" />
                </div>
              </div>
              <div className="port-card-footer">
                <span className="port-trade">Pressure Washing</span>
                <h4>Fighting Grime Pressure Washing</h4>
                <span className="port-sub">Website Design · Myrtle Beach, SC</span>
                <a href="https://fightinggrimepressurewashing.com" target="_blank" rel="noopener noreferrer" className="port-link">
                  View Live Site
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
