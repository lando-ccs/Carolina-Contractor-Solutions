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
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '48px', alignItems: 'center' }}>
            <img
              src="/assets/portfolio/Fighting Grime@2x (1).webp"
              alt="Fighting Grime website"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <div>
              <div className="badge badge-dark" style={{ display: 'inline-flex', marginBottom: '16px' }}>Pressure Washing · Charlotte, NC</div>
              <h2>Fighting Grime<br /><span className="red">Pressure Washing</span></h2>
              <p style={{ color: 'var(--text2)', fontSize: '16px', lineHeight: 1.6, margin: '16px 0 20px' }}>
                Charlotte-based pressure washing company. Built a conversion-focused site from scratch — local SEO, click-to-call structure, and a design that earns trust in under five seconds.
              </p>
              <div className="badge badge-red" style={{ display: 'inline-flex', marginBottom: '24px' }}>Web Care Plan</div>
              <div>
                <a href="https://fightinggrimepressurewashing.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Live Site →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-dark" style={{ display: 'inline-flex', marginBottom: '16px' }}>Cleaning Services · Charlotte, NC</div>
              <h2>Zuly Iyalode<br /><span className="red">Cleaning</span></h2>
              <p style={{ color: 'var(--text2)', fontSize: '16px', lineHeight: 1.6, margin: '16px 0 20px' }}>
                Cleaning company site with a strong brand presence, mobile-first build, and lead capture built into every page.
              </p>
              <div className="badge badge-red" style={{ display: 'inline-flex' }}>Web Care Plan</div>
            </div>
            <img
              src="/assets/portfolio/zuly@2x (1).webp"
              alt="Zuly Iyalode Cleaning website"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '48px', alignItems: 'center' }}>
            <img
              src="/assets/cblmockupvideo-ezgif.com-optiwebp.webp"
              alt="Carolina Beach Landscaping site preview"
              style={{ width: '100%', display: 'block' }}
            />
            <div>
              <div className="badge badge-dark" style={{ display: 'inline-flex', marginBottom: '16px' }}>Landscaping · Carolina Beach, NC</div>
              <h2>Carolina Beach<br /><span className="red">Landscaping</span></h2>
              <p style={{ color: 'var(--text2)', fontSize: '16px', lineHeight: 1.6, margin: '16px 0 20px' }}>
                Full brand build for a Carolina Beach landscaping company — custom video hero, coastal market SEO, and a site that looks as good as the work they do.
              </p>
              <div className="badge badge-red" style={{ display: 'inline-flex', marginBottom: '24px' }}>Market Domination</div>
              <div>
                <a href="https://caroliabeachlandscaping.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Live Site →</a>
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
          <Link href="/contact" className="btn btn-secondary btn-lg">Book a Discovery Call <span className="arrow">→</span></Link>
        </div>
      </section>
    </>
  )
}
