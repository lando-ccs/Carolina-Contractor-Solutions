import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        {/* Brand col */}
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/newccsfooterlogo.webp" alt="Carolina Contractor Solutions" loading="lazy" />
          <p className="footer-tagline">Done-for-you marketing for contractors across the Carolinas.</p>
          <div className="footer-contact-info">
            <a href="tel:8437429776">(843) 742-9776</a>
            <a href="mailto:info@carolinacontractorsolutions.com">info@carolinacontractorsolutions.com</a>
          </div>
          <div className="footer-socials">
            <a href="#" className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-btn tiktok" aria-label="TikTok">
              <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.76a8.27 8.27 0 004.84 1.55V6.87a4.85 4.85 0 01-1.07-.18z"/></svg>
            </a>
            <a href="#" className="social-btn" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" style={{ fill: 'rgba(255,255,255,0.7)', stroke: 'none' }}/></svg>
            </a>
          </div>
        </div>

        {/* Services col */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/build-only">Build Only</Link></li>
            <li><Link href="/services/web-care-plan">Web Care Plan</Link></li>
            <li><Link href="/services/market-domination">Market Domination</Link></li>
          </ul>
        </div>

        {/* Pages col */}
        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><Link href="/portfolio">Our Work</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Serving col */}
        <div className="footer-col">
          <h4>Serving</h4>
          <ul>
            <li>Myrtle Beach, SC</li>
            <li>Charleston, SC</li>
            <li>Charlotte, NC</li>
            <li>Greenville, SC</li>
            <li>Asheville, NC</li>
            <li>Surrounding Areas</li>
          </ul>
        </div>

        {/* Follow col */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Carolina Contractor Solutions</p>
        <Link href="/reviews" className="footer-bottom-link">Reviews</Link>
      </div>
    </footer>
  )
}
