import Link from 'next/link'

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const TkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.86 4.86 0 0 1-1.01-.07z"/>
  </svg>
)

const LogoSVG = () => (
  <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="10" fill="#002868"/>
    <path d="M14 18a8 8 0 1 0 6.8 12.2 6 6 0 1 1-7.2-9A8 8 0 0 1 14 18z" fill="#fff"/>
    <path d="M33 52c-.6-6-1.2-12 .2-18 .4-1.6 1-3.2 1.8-4.6.4-.7 1.4-.7 1.8 0 .8 1.4 1.4 3 1.8 4.6 1.4 6 .8 12 .2 18H33z" fill="#fff"/>
    <g fill="#fff">
      <path d="M36 28c-4-4-9-5-14-4 3 3 7 5 11 5z"/>
      <path d="M36 28c-2-5-6-9-11-10 1 4 4 8 8 10z"/>
      <path d="M36 28c1-5-1-10-5-13-1 4-.5 9 2 12z"/>
      <path d="M36 28c4-4 9-5 14-4-3 3-7 5-11 5z"/>
      <path d="M36 28c2-5 6-9 11-10-1 4-4 8-8 10z"/>
      <path d="M36 28c-1-5 1-10 5-13 1 4 .5 9-2 12z"/>
    </g>
    <rect y="56" width="64" height="8" fill="#E31212"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand col */}
          <div>
            <div className="footer-brand-logo"><LogoSVG /></div>
            <div className="footer-brand-wordmark">
              Carolina Contractor Solutions
              <small>NC · SC</small>
            </div>
            <p className="footer-tagline">
              Marketing built exclusively for contractors across North and South Carolina. Websites, ads, content, and done-for-you lead systems.
            </p>
            <div className="footer-contact">
              <a href="mailto:info@carolinacontractorsolutions.com">info@carolinacontractorsolutions.com</a>
              <a href="tel:8437429776">(843) 742-9776</a>
            </div>
          </div>

          {/* Services col */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/services/web-care-plan">Web Care Plan</Link></li>
              <li><Link href="/services/booked-solid">Booked Solid System</Link></li>
              <li><Link href="/services/market-domination">Market Domination</Link></li>
            </ul>
          </div>

          {/* Who We Serve col */}
          <div className="footer-col">
            <h5>Who We Serve</h5>
            <ul>
              <li><Link href="/who-we-serve/roofers">Roofers</Link></li>
              <li><Link href="/who-we-serve/landscapers">Landscapers</Link></li>
              <li><Link href="/who-we-serve/hvac">HVAC</Link></li>
              <li><Link href="/who-we-serve/cleaning">Cleaning</Link></li>
              <li><Link href="/who-we-serve">All Industries</Link></li>
            </ul>
          </div>

          {/* Company col */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div style={{ marginTop: 28 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>Serving</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>
                Charlotte · Raleigh · Asheville<br/>
                Charleston · Myrtle Beach<br/>
                Greenville · Wilmington<br/>
                All of NC &amp; SC
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Carolina Contractor Solutions · All rights reserved</p>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Instagram"><IgIcon /></a>
            <a href="#" className="footer-social" aria-label="Facebook"><FbIcon /></a>
            <a href="#" className="footer-social" aria-label="TikTok"><TkIcon /></a>
          </div>
        </div>
      </div>
      <div style={{ height: 3, background: 'var(--red)', width: '100%' }} />
    </footer>
  )
}
