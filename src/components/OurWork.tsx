import React from 'react'

/**
 * Shared "Our Work" / Portfolio section — identical to the homepage version.
 * Used on the homepage, all 7 trade pages, and all 4 services pages.
 *
 * Keep this single source of truth in sync — DO NOT inline-fork copies on
 * individual pages.
 */
export default function OurWork() {
  const photos = [
    { src: '/assets/1-Fighting Grime Pics - 00000003.webp', alt: 'Fighting Grime pressure washing' },
    { src: '/assets/17-DSC00213.webp',                       alt: 'Carolina Beach Landscaping crew' },
    { src: '/assets/3-Fighting Grime Pics - 00000005.webp', alt: 'Fighting Grime pressure washing' },
    { src: '/assets/12-DSC00208.webp',                       alt: 'Carolina Beach Landscaping crew' },
    { src: '/assets/2-Fighting Grime Pics - 00000006.webp', alt: 'Fighting Grime pressure washing' },
    { src: '/assets/19-DSC00220.webp',                       alt: 'Carolina Beach Landscaping crew' },
  ]
  const allPhotos = [...photos, ...photos]

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-inner">
        <div className="section-label">Our Portfolio</div>
        <h2 className="portfolio-h2">Work That <span className="red">Speaks for Itself.</span></h2>

        <div className="port-section-label">
          <span className="psl-title">Website Portfolio</span>
          <span className="psl-count">03 Live Sites</span>
        </div>

        <div className="portfolio-grid">
          <div className="port-card">
            <div className="browser-frame">
              <div className="browser-bar"><div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" /></div>
              <div className="browser-screen">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/portfolio/Fighinting Grime Home.webp" alt="Fighting Grime Pressure Washing website" loading="lazy" />
              </div>
            </div>
            <div className="port-card-footer">
              <h4>Fighting Grime Pressure Washing</h4>
              <span className="port-sub">Website Design · Myrtle Beach, SC</span>
              <span className="port-trade">Pressure Washing</span>
              <a href="https://fightinggrimepressurewashing.com" target="_blank" rel="noopener noreferrer" className="port-link">
                View Live Site
                <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

          <div className="port-card">
            <div className="browser-frame">
              <div className="browser-bar"><div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" /></div>
              <div className="browser-screen">
                <video src="/assets/portfolio/cblhero.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
            <div className="port-card-footer">
              <h4>Carolina Beach Landscaping</h4>
              <span className="port-sub">Website Design · Photo &amp; Video · Myrtle Beach, SC</span>
              <span className="port-trade">Landscaping</span>
              <a href="https://caroliabeachlandscaping.com" target="_blank" rel="noopener noreferrer" className="port-link">
                View Live Site
                <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

          <div className="port-card">
            <div className="browser-frame">
              <div className="browser-bar"><div className="b-dot r" /><div className="b-dot y" /><div className="b-dot g" /></div>
              <div className="browser-screen">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/portfolio/zulydesktophome.webp" alt="Zuly Iyalode Cleaning website" loading="lazy" />
              </div>
            </div>
            <div className="port-card-footer">
              <h4>Zuly Iyalode Cleaning</h4>
              <span className="port-sub">Cleaning Services · Myrtle Beach, SC</span>
              <span className="port-trade">Cleaning</span>
              <a href="https://zulyiyalodecleaning.com" target="_blank" rel="noopener noreferrer" className="port-link">
                View Live Site
                <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="port-section-label">
          <span className="psl-title">Photo &amp; Video</span>
          <span className="psl-count">Shot by CCS</span>
        </div>
        <div className="photo-ticker">
          <div className="photo-track">
            {allPhotos.map((p, i) => (
              <div key={i} className="photo-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
