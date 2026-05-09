import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Services — 3 Tiers for Contractor Marketing',
  description: 'Three service tiers for contractors in the Carolinas: Web Care Plan, Booked Solid System, and Market Domination. Pick what fits your goals.',
}

const tiers = [
  {
    href: '/services/web-care-plan',
    num: '01',
    tier: 'Tier 1',
    title: 'Web Care Plan',
    price: '$500/mo',
    badge: 'Nationwide',
    body: 'A professional contractor site built in 5–7 days, with monthly updates included. No setup fee. Month-to-month after 3 months. Built to rank locally and book jobs.',
    cta: 'Learn More',
    includes: ['Custom design + copywriting', 'Mobile-first build', 'SEO + local schema', 'Call tracking', '3–5 updates/month included', '30-day support'],
  },
  {
    href: '/services/booked-solid',
    num: '02',
    tier: 'Tier 2',
    title: 'Booked Solid System',
    price: '$2,000/mo',
    badge: 'Carolinas Only',
    body: 'Google Ads + SEO + Google Business Profile management. A complete done-for-you lead machine that keeps your phone ringing every month.',
    cta: 'See the System',
    includes: ['Google Ads management', 'Local SEO', 'Google Business Profile', 'Weekly optimization', '60-day lead guarantee', 'Monthly reporting'],
    featured: true,
  },
  {
    href: '/services/market-domination',
    num: '03',
    tier: 'Tier 3',
    title: 'Market Domination',
    price: '$5,000/mo',
    badge: 'Carolinas Only · One Per Market',
    body: 'Google Ads + Meta Ads + 3–5 monthly on-location content shoots + full GoHighLevel pipeline automation. One contractor per trade per market — permanently locked in.',
    cta: 'Check Availability',
    includes: ['Google + Meta Ads', '3–5 monthly content shoots', 'GoHighLevel CRM + automation', 'Live lead dashboard', '90-day lead guarantee', 'Permanent market exclusivity'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: 'auto', paddingBottom: 64 }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }} aria-hidden="true">
          <img src="/assets/scsvg 1.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="page-hero-inner">
          <SectionLabel light>Services</SectionLabel>
          <h1>Three Tiers.<br /><span className="red">One Goal.</span></h1>
          <p>More calls, more booked jobs. Pick the tier that fits where you are right now.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {tiers.map(t => (
              <div
                key={t.num}
                className={`service-card${t.featured ? ' featured' : ''}`}
                style={{ padding: '40px 48px' }}
              >
                <div className="tier-card-grid">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <div className="service-card-num" style={{ marginBottom: 0 }}>{t.num}</div>
                      <span style={{
                        fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px',
                        padding: '4px 12px', borderRadius: 20,
                        background: t.featured ? 'rgba(227,18,18,0.2)' : 'rgba(0,40,104,0.08)',
                        color: t.featured ? 'var(--red-light, #ff6b6b)' : 'var(--navy)',
                      }}>{t.badge}</span>
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: t.featured ? 'rgba(255,255,255,0.4)' : 'var(--text3)', marginBottom: 6 }}>{t.tier}</div>
                    <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 36, color: t.featured ? '#fff' : 'var(--navy)', marginBottom: 12, lineHeight: 1.1 }}>{t.title}</h2>
                    <p style={{ fontSize: 15, color: t.featured ? 'rgba(255,255,255,0.7)' : 'var(--text)', lineHeight: 1.65, marginBottom: 24 }}>{t.body}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <Link
                        href={t.href}
                        className={t.featured ? 'btn btn-secondary' : 'btn btn-primary'}
                      >
                        {t.cta} &#8594;
                      </Link>
                      <span style={{ fontFamily: 'var(--font-h)', fontSize: 22, color: t.featured ? '#fff' : 'var(--navy)' }}>{t.price}</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: t.featured ? 'rgba(255,255,255,0.4)' : 'var(--text3)', marginBottom: 14 }}>Includes</div>
                    <ul className="service-check-list">
                      {t.includes.map(item => (
                        <li key={item} className="service-check" style={{ color: t.featured ? 'rgba(255,255,255,0.8)' : undefined }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
