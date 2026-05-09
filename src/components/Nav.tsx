'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_SERVICES = [
  { href: '/services/web-care-plan',      label: 'Web Care Plan',        desc: 'Site built in 5–7 days, updates included' },
  { href: '/services/booked-solid',       label: 'Booked Solid System',  desc: 'Google Ads + SEO + GBP — Carolinas only' },
  { href: '/services/market-domination',  label: 'Market Domination',    desc: 'Full system: ads, content, automation' },
]

const NAV_SERVE = [
  { href: '/who-we-serve/roofers',     label: 'Roofers' },
  { href: '/who-we-serve/landscapers', label: 'Landscapers' },
  { href: '/who-we-serve/hvac',        label: 'HVAC' },
  { href: '/who-we-serve/cleaning',    label: 'Cleaning' },
]

const LogoSVG = () => (
  <svg width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" style={{ flexShrink: 0 }}>
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

export default function Nav() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [serveOpen, setServeOpen]       = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    h()
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setServeOpen(false)
  }, [pathname])

  return (
    <>
      <nav className={`nav${scrolled || mobileOpen ? ' scrolled' : ''}`}>
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <LogoSVG />
          <div className="nav-logo-wordmark">
            Carolina Contractor Solutions
            <small>NC · SC</small>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          {/* Services dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link" style={{ background: 'none' }}>
              Services
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ marginLeft: 4, verticalAlign: 'middle' }}>
                <path d="M2 3l3 3 3-3"/>
              </svg>
            </button>
            <div className={`nav-dropdown-menu${servicesOpen ? ' open' : ''}`}>
              {NAV_SERVICES.map(s => (
                <Link key={s.href} href={s.href} className="nav-drop-item">
                  <span className="nav-drop-title">{s.label}</span>
                  <span className="nav-drop-desc">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Who We Serve dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setServeOpen(true)}
            onMouseLeave={() => setServeOpen(false)}
          >
            <button className="nav-link" style={{ background: 'none' }}>
              Who We Serve
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ marginLeft: 4, verticalAlign: 'middle' }}>
                <path d="M2 3l3 3 3-3"/>
              </svg>
            </button>
            <div className={`nav-dropdown-menu${serveOpen ? ' open' : ''}`}>
              {NAV_SERVE.map(i => (
                <Link key={i.href} href={i.href} className="nav-drop-item">
                  <span className="nav-drop-title">{i.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/portfolio" className="nav-link">Portfolio</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="nav-ctas" style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
          <Link href="/contact" className="btn btn-ghost btn-sm">Contact</Link>
          <Link href="/services/market-domination" className="btn btn-secondary btn-sm">
            Get Started <span className="arrow">→</span>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
          className="nav-hamburger"
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, marginLeft: 'auto' }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2 }} />
        </button>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="nav-mobile" style={{
          position: 'fixed', top: 76, left: 0, right: 0, zIndex: 99,
          background: 'rgba(0,26,69,0.98)', backdropFilter: 'blur(12px)',
          padding: '24px 24px 32px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>Services</p>
          {NAV_SERVICES.map(s => (
            <Link key={s.href} href={s.href} style={{ display: 'block', padding: '10px 0', fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{s.label}</Link>
          ))}
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.35)', marginBottom: 8, marginTop: 16 }}>Who We Serve</p>
          {NAV_SERVE.map(i => (
            <Link key={i.href} href={i.href} style={{ display: 'block', padding: '10px 0', fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{i.label}</Link>
          ))}
          <Link href="/portfolio" style={{ display: 'block', padding: '10px 0', fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)', marginTop: 16 }}>Portfolio</Link>
          <Link href="/contact"   style={{ display: 'block', padding: '10px 0', fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Contact</Link>
          <Link href="/services/market-domination" className="btn btn-secondary" style={{ marginTop: 20, justifyContent: 'center' }}>
            Get Started <span className="arrow">→</span>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .nav-links, .nav-ctas { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
