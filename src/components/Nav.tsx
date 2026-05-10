'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const PhoneIcon = () => (
  <svg style={{ width: 16, height: 16, stroke: '#fff', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 11 19.79 19.79 0 0 1 1.97 2.4 2 2 0 0 1 3.97.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
)

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<null | 'services' | 'who'>(null)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!navRef.current) return
      if (!navRef.current.contains(e.target as Node)) setOpenDropdown(null)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const toggle = (k: 'services' | 'who') => (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenDropdown((cur) => (cur === k ? null : k))
  }

  return (
    <>
      <nav id="navbar" ref={navRef}>
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/newccslogo.webp" alt="Carolina Contractor Solutions" />
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {/* Services dropdown */}
            <div className={`nav-dropdown${openDropdown === 'services' ? ' open' : ''}`}>
              <button
                type="button"
                className="nav-link"
                aria-expanded={openDropdown === 'services'}
                onClick={toggle('services')}
              >
                Services <ChevronIcon />
              </button>
              <div className="nav-dropdown-menu">
                <Link href="/services/web-care-plan" className="nav-drop-item">
                  <div className="nav-drop-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <div>
                    <span className="nav-drop-title">Web Care Plan</span>
                    <span className="nav-drop-desc">Tier 1 — Sites built to rank locally and book jobs</span>
                  </div>
                </Link>
                <Link href="/services/booked-solid" className="nav-drop-item">
                  <div className="nav-drop-icon">
                    <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                  </div>
                  <div>
                    <span className="nav-drop-title">Booked Solid System</span>
                    <span className="nav-drop-desc">Tier 2 — Google Ads + SEO that keep your phone ringing</span>
                  </div>
                </Link>
                <Link href="/services/market-domination" className="nav-drop-item">
                  <div className="nav-drop-icon">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 11 19.79 19.79 0 0 1 1.97 2.4 2 2 0 0 1 3.97.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <span className="nav-drop-title">Market Domination</span>
                    <span className="nav-drop-desc">Tier 3 — The full system to own your market</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Who We Serve dropdown */}
            <div className={`nav-dropdown${openDropdown === 'who' ? ' open' : ''}`}>
              <button
                type="button"
                className="nav-link"
                aria-expanded={openDropdown === 'who'}
                onClick={toggle('who')}
              >
                Who We Serve <ChevronIcon />
              </button>
              <div className="nav-dropdown-menu">
                <Link href="/who-we-serve/roofers" className="nav-drop-item">
                  <div className="nav-drop-icon">
                    <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <div>
                    <span className="nav-drop-title">Roofers</span>
                    <span className="nav-drop-desc">Storm season or slow season — we keep you booked</span>
                  </div>
                </Link>
                <Link href="/who-we-serve/hvac" className="nav-drop-item">
                  <div className="nav-drop-icon">
                    <svg viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
                  </div>
                  <div>
                    <span className="nav-drop-title">HVAC</span>
                    <span className="nav-drop-desc">Heating and cooling calls before your competitor</span>
                  </div>
                </Link>
                <Link href="/who-we-serve/landscapers" className="nav-drop-item">
                  <div className="nav-drop-icon">
                    <svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                  </div>
                  <div>
                    <span className="nav-drop-title">Landscapers</span>
                    <span className="nav-drop-desc">More maintenance contracts, less chasing referrals</span>
                  </div>
                </Link>
                <Link href="/who-we-serve/general-contractors" className="nav-drop-item">
                  <div className="nav-drop-icon">
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
                  </div>
                  <div>
                    <span className="nav-drop-title">Concrete & Hardscaping</span>
                    <span className="nav-drop-desc">Premium work deserves a presence that matches it</span>
                  </div>
                </Link>
              </div>
            </div>

            <Link href="/portfolio" className="nav-link">Our Work</Link>
            <Link href="/contact"   className="nav-link">Resources</Link>
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <Link href="#contact" className="btn btn-navy" style={{ fontSize: 14, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <PhoneIcon />
              Book a Call
            </Link>
            <button
              className="nav-hamburger"
              aria-label="Menu"
              onClick={() => setMobileOpen(v => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`}>
        <p className="mobile-section-label">Services</p>
        <Link href="/services/web-care-plan"       className="mobile-link" onClick={() => setMobileOpen(false)}>Web Care Plan</Link>
        <Link href="/services/booked-solid"       className="mobile-link" onClick={() => setMobileOpen(false)}>Booked Solid System</Link>
        <Link href="/services/market-domination"  className="mobile-link" onClick={() => setMobileOpen(false)}>Market Domination</Link>
        <p className="mobile-section-label">Who We Serve</p>
        <Link href="/who-we-serve/roofers"      className="mobile-link" onClick={() => setMobileOpen(false)}>Roofers</Link>
        <Link href="/who-we-serve/hvac"         className="mobile-link" onClick={() => setMobileOpen(false)}>HVAC</Link>
        <Link href="/who-we-serve/landscapers"  className="mobile-link" onClick={() => setMobileOpen(false)}>Landscapers</Link>
        <Link href="/who-we-serve/general-contractors" className="mobile-link" onClick={() => setMobileOpen(false)}>Concrete & Hardscaping</Link>
        <Link href="/portfolio" className="mobile-link" onClick={() => setMobileOpen(false)}>Our Work</Link>
        <Link href="/contact"   className="mobile-link" onClick={() => setMobileOpen(false)}>Contact</Link>
        <Link href="#contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>Book a Call</Link>
      </div>
    </>
  )
}
