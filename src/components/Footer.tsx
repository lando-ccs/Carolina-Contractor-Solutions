import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-end pr-12">
        <svg width="480" height="480" viewBox="0 0 64 64" aria-hidden="true">
          <rect width="64" height="64" rx="10" fill="#fff"/>
          <path d="M14 18a8 8 0 1 0 6.8 12.2 6 6 0 1 1-7.2-9A8 8 0 0 1 14 18z" fill="#002868"/>
          <path d="M33 52c-.6-6-1.2-12 .2-18 .4-1.6 1-3.2 1.8-4.6.4-.7 1.4-.7 1.8 0 .8 1.4 1.4 3 1.8 4.6 1.4 6 .8 12 .2 18H33z" fill="#002868"/>
          <g fill="#002868">
            <path d="M36 28c-4-4-9-5-14-4 3 3 7 5 11 5z"/>
            <path d="M36 28c-2-5-6-9-11-10 1 4 4 8 8 10z"/>
            <path d="M36 28c1-5-1-10-5-13-1 4-.5 9 2 12z"/>
            <path d="M36 28c4-4 9-5 14-4-3 3-7 5-11 5z"/>
            <path d="M36 28c2-5 6-9 11-10-1 4-4 8-8 10z"/>
            <path d="M36 28c-1-5 1-10 5-13 1 4 .5 9-2 12z"/>
          </g>
          <rect y="56" width="64" height="8" fill="#E31212"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-heading text-[18px] text-white uppercase tracking-wide mb-3">
              Carolina Contractor Solutions
            </div>
            <div className="text-[9px] font-semibold text-red tracking-[2px] uppercase mb-4">NC · SC</div>
            <p className="text-[13px] text-white/60 leading-relaxed mb-5">
              Marketing built exclusively for contractors across North and South Carolina. Websites, content, and done-for-you lead systems.
            </p>
            <div className="space-y-1.5">
              <a href="mailto:hello@carolinacontractorsolutions.com" className="block text-[13px] text-white/50 hover:text-white transition-colors">
                hello@carolinacontractorsolutions.com
              </a>
              <a href="tel:9805551234" className="block text-[13px] text-white/50 hover:text-white transition-colors">
                (980) 555-1234
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-body font-bold text-[11px] uppercase tracking-widest text-white/40 mb-4">Services</h5>
            <ul className="space-y-2.5">
              {[
                { href: '/services/websites',     label: 'Contractor Websites' },
                { href: '/services/booked-solid', label: 'Booked Solid System' },
                { href: '/services/content',      label: 'Photo & Content' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h5 className="font-body font-bold text-[11px] uppercase tracking-widest text-white/40 mb-4">Who We Serve</h5>
            <ul className="space-y-2.5">
              {[
                { href: '/who-we-serve',             label: 'All Industries' },
                { href: '/who-we-serve/roofers',     label: 'Roofers' },
                { href: '/who-we-serve/landscapers', label: 'Landscapers' },
                { href: '/who-we-serve/hvac',        label: 'HVAC' },
                { href: '/who-we-serve/cleaning',    label: 'Cleaning' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-body font-bold text-[11px] uppercase tracking-widest text-white/40 mb-4">Company</h5>
            <ul className="space-y-2.5">
              {[
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/contact',   label: 'Contact' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h5 className="font-body font-bold text-[11px] uppercase tracking-widest text-white/40 mb-4">Serving</h5>
              <p className="text-[12px] text-white/50 leading-relaxed">
                Charlotte · Raleigh · Asheville<br/>Charleston · Myrtle Beach · Greenville<br/>And all of NC & SC
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[12px] text-white/30">
            © 2026 Carolina Contractor Solutions · All rights reserved
          </div>
          <div className="flex items-center gap-4">
            {['Instagram', 'Facebook', 'TikTok'].map(s => (
              <a key={s} href="#" className="text-[12px] text-white/30 hover:text-white/70 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Red bar at bottom */}
      <div className="h-1 bg-red w-full" />
    </footer>
  )
}
