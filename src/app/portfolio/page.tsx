import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Contractor Websites Built to Convert | CCS',
  description: 'Real websites built for real contractors across the Carolinas. See the work.',
}

export default function PortfolioPage() {
  return (
    <>
      <div className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <SectionLabel light>Our Work</SectionLabel>
          <h1 style={{ color: '#fff', marginTop: '18px' }}>
            Work That Speaks<br /><span style={{ color: 'var(--red)' }}>For Itself.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px' }}>
            Every site is built conversion-first, trade-specific, and designed to rank. Here&apos;s what that looks like.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="portfolio-grid">

            {/* Fighting Grime */}
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
                <p className="port-desc">Myrtle Beach-based pressure washing company. Built a conversion-focused site from scratch — local SEO, click-to-call structure, and a design that earns trust in under five seconds.</p>
                <a href="https://fightinggrimepressurewashing.com" target="_blank" rel="noopener noreferrer" className="port-link">
                  View Live Site
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>

            {/* Carolina Beach Landscaping */}
            <div className="port-card">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" />
                </div>
                <div className="browser-screen">
                  <video src="/assets/portfolio/cblhero.mp4" autoPlay loop muted playsInline />
                </div>
              </div>
              <div className="port-card-footer">
                <span className="port-trade">Landscaping</span>
                <h4>Carolina Beach Landscaping</h4>
                <span className="port-sub">Website Design · Photo &amp; Video · Myrtle Beach, SC</span>
                <p className="port-desc">Full brand build for a Carolina Beach landscaping company — custom video hero, coastal market SEO, and a site that looks as good as the work they do.</p>
                <a href="https://caroliabeachlandscaping.com" target="_blank" rel="noopener noreferrer" className="port-link">
                  View Live Site
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>

            {/* Zuly Iyalode Cleaning */}
            <div className="port-card">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" />
                </div>
                <div className="browser-screen">
                  <img src="/assets/portfolio/zulydesktophome.webp" alt="Zuly Iyalode Cleaning website" loading="lazy" />
                </div>
              </div>
              <div className="port-card-footer">
                <span className="port-trade">Cleaning</span>
                <h4>Zuly Iyalode Cleaning</h4>
                <span className="port-sub">Cleaning Services · Myrtle Beach, SC</span>
                <p className="port-desc">Cleaning company site with a strong brand presence, mobile-first build, and lead capture built into every page.</p>
                <a href="https://zulyiyalodecleaning.com" target="_blank" rel="noopener noreferrer" className="port-link">
                  View Live Site
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <SectionLabel light>Ready?</SectionLabel>
          <h2 style={{ color: '#fff', marginTop: '18px' }}>
            Want to be<br /><span style={{ color: 'var(--red)' }}>next?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.6, marginBottom: '32px' }}>
            We only take one contractor per trade per market. Book a call and we&apos;ll tell you if your market is still open.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">Book a Discovery Call <span className="arrow">→</span></Link>
        </div>
      </section>
    </>
  )
}
