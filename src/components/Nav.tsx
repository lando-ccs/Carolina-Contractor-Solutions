'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const services = [
  { href: '/services/websites',     label: 'Contractor Websites',    desc: 'Conversion-first sites built for trades' },
  { href: '/services/booked-solid', label: 'Booked Solid System',    desc: 'Done-for-you lead machine — Carolinas only' },
  { href: '/services/content',      label: 'Photo & Content',        desc: 'Jobsite shoots, video, and ad creative' },
]

const industries = [
  { href: '/who-we-serve/roofers',     label: 'Roofers' },
  { href: '/who-we-serve/landscapers', label: 'Landscapers' },
  { href: '/who-we-serve/hvac',        label: 'HVAC' },
  { href: '/who-we-serve/cleaning',    label: 'Cleaning' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    h()
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DDE3ED]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
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
            <div className="leading-tight">
              <div className="font-heading text-[15px] text-navy tracking-wide uppercase">Carolina Contractor Solutions</div>
              <div className="font-body font-semibold text-[9px] text-red tracking-[2px] uppercase mt-0.5">NC · SC</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium text-text-2 hover:text-navy rounded-sm transition-colors">
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
                  <path d="M2 4l4 4 4-4"/>
                </svg>
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-[#DDE3ED] rounded-lg shadow-xl p-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {services.map(s => (
                  <Link key={s.href} href={s.href} className="flex gap-3 p-3 rounded-md hover:bg-bg transition-colors">
                    <div>
                      <div className="text-[13px] font-bold text-navy">{s.label}</div>
                      <div className="text-[12px] text-text-2 mt-0.5">{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Who We Serve Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium text-text-2 hover:text-navy rounded-sm transition-colors">
                Who We Serve
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
                  <path d="M2 4l4 4 4-4"/>
                </svg>
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-[#DDE3ED] rounded-lg shadow-xl p-2 transition-all duration-200 ${industriesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/who-we-serve" className="flex p-3 rounded-md hover:bg-bg transition-colors text-[13px] font-bold text-navy">
                  All Industries →
                </Link>
                {industries.map(i => (
                  <Link key={i.href} href={i.href} className="flex p-3 rounded-md hover:bg-bg transition-colors text-[13px] font-medium text-text-2 hover:text-navy">
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/portfolio" className="px-4 py-2 text-[14px] font-medium text-text-2 hover:text-navy transition-colors">
              Portfolio
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="px-5 py-2.5 text-[14px] font-semibold text-navy border border-[#DDE3ED] rounded-sm hover:border-navy transition-colors">
              Contact
            </Link>
            <Link href="/services/booked-solid" className="px-5 py-2.5 text-[14px] font-semibold bg-red text-white rounded-sm hover:bg-red-dark transition-colors">
              Get Started →
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#DDE3ED] px-6 py-4 space-y-1">
            <div className="text-[11px] font-bold text-text-3 uppercase tracking-widest px-2 pt-2 pb-1">Services</div>
            {services.map(s => (
              <Link key={s.href} href={s.href} className="block px-2 py-2.5 text-[14px] font-medium text-text-2 hover:text-navy">{s.label}</Link>
            ))}
            <div className="text-[11px] font-bold text-text-3 uppercase tracking-widest px-2 pt-4 pb-1">Who We Serve</div>
            <Link href="/who-we-serve" className="block px-2 py-2.5 text-[14px] font-medium text-text-2 hover:text-navy">All Industries</Link>
            {industries.map(i => (
              <Link key={i.href} href={i.href} className="block px-2 py-2.5 text-[14px] font-medium text-text-2 hover:text-navy">{i.label}</Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/portfolio" className="block px-2 py-2.5 text-[14px] font-medium text-text-2 hover:text-navy">Portfolio</Link>
              <Link href="/contact" className="block px-2 py-2.5 text-[14px] font-medium text-text-2 hover:text-navy">Contact</Link>
              <Link href="/services/booked-solid" className="block text-center mt-2 px-5 py-3 text-[14px] font-semibold bg-red text-white rounded-sm hover:bg-red-dark transition-colors">
                Get Started →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
