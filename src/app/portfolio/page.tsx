import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Contractor Websites & Content',
  description: 'Real websites and jobsite content we have built for contractors across NC & SC. Roofers, landscapers, HVAC, cleaning companies.',
}

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }}>
          <img src="/assets/scsvg 1.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="page-hero-inner">
          <div className="badge badge-dark">Real Work</div>
          <SectionLabel light>Portfolio</SectionLabel>
          <h1>Real Sites.<br /><span className="red">Real Contractors.</span></h1>
          <p>No templates. No stock photos. Every site and piece of content we show is built for an actual contractor in the Carolinas.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="row-label">Contractor Websites</p>
          <div className="portfolio-row-sites">
            <div className="site-card">
              <div className="site-card-screen">
                <div className="dots"><span/><span/><span/></div>
                <div className="site-card-inner">
                  <img src="/assets/Fighinting Grime Home.webp" alt="Fighting Grime Pressure Washing website" />
                  <div className="site-card-inner-content">
                    <span className="tag tag-light" style={{ fontSize: 10 }}>Pressure Washing</span>
                  </div>
                </div>
              </div>
              <div className="site-card-meta">
                <strong>Fighting Grime Pressure Washing</strong>
                <span>Carolinas — Web Care Plan</span>
              </div>
            </div>

            <div className="site-card">
              <div className="site-card-screen" style={{ background: '#001a45' }}>
                <div className="dots"><span/><span/><span/></div>
                <div className="site-card-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center', padding: 24 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#fff', lineHeight: 1.2 }}>Zuly Iyalode<br/>Cleaning, LLC</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>Grand Strand, SC</div>
                  </div>
                </div>
              </div>
              <div className="site-card-meta">
                <strong>Zuly Iyalode Cleaning, LLC</strong>
                <span>Grand Strand, SC — Web Care Plan</span>
              </div>
            </div>

            <div className="site-card">
              <div className="site-card-screen" style={{ background: '#1a3a18' }}>
                <div className="dots"><span/><span/><span/></div>
                <div className="site-card-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center', padding: 24 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#fff', lineHeight: 1.2 }}>Carolina Beach<br/>Landscaping</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>Carolina Beach, NC</div>
                  </div>
                </div>
              </div>
              <div className="site-card-meta">
                <strong>Carolina Beach Landscaping</strong>
                <span>Carolina Beach, NC — Web Care Plan</span>
              </div>
            </div>
          </div>

          <p className="row-label" style={{ marginTop: 32 }}>Jobsite Photography</p>
          <div className="portfolio-row-photos">
            {[
              { src: '/assets/1-Fighting Grime Pics - 00000003.webp',  type: 'Pressure Washing', title: 'Fighting Grime' },
              { src: '/assets/2-Fighting Grime Pics - 00000006.webp',  type: 'Pressure Washing', title: 'Before & After' },
              { src: '/assets/3-Fighting Grime Pics - 00000005.webp',  type: 'Pressure Washing', title: 'Driveway Clean' },
              { src: '/assets/4-Fighting Grime Pics - 00000004.webp',  type: 'Pressure Washing', title: 'House Wash' },
              { src: '/assets/12-DSC00208.webp',   type: 'Content Shoot', title: 'On-Location' },
              { src: '/assets/17-DSC00213.webp',   type: 'Content Shoot', title: 'Portfolio Shot' },
              { src: '/assets/19-DSC00220.webp',   type: 'Content Shoot', title: 'Detail Shot' },
              { src: '/assets/56-DSC00289.webp',   type: 'Content Shoot', title: 'Final Result' },
            ].map((p, i) => (
              <div key={i} className="photo-card">
                <img src={p.src} alt={p.title} />
                <div className="photo-card-label">
                  <div className="photo-card-type">{p.type}</div>
                  <div className="photo-card-title">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <div className="cta-footer-inner">
          <div className="badge badge-dark" style={{ margin: '0 auto 24px' }}><span className="pulse" />Now Accepting Clients</div>
          <h2>Want Work<br />That Looks<br /><span className="red">Like This?</span></h2>
          <p>Every project you see above started with a conversation. Let's talk about yours.</p>
          <Link href="/contact" className="btn btn-secondary btn-lg">Start the Conversation <span className="arrow">&#8594;</span></Link>
          <p className="cta-footer-disclaimer">Web Care Plan available everywhere · Booked Solid + Market Domination — Carolinas only</p>
        </div>
      </section>
    </>
  )
}
