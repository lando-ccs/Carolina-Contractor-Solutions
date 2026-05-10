import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who We Serve — Contractor Marketing in NC & SC',
  description: 'CCS works exclusively with contractors: roofers, HVAC companies, landscapers, and cleaning businesses across North and South Carolina.',
}

const trades = [
  { href: '/who-we-serve/roofers',     title: 'Roofers',     body: 'Storm damage, repair & replacement — we get you in front of homeowners the moment they search.', systems: ['Market Domination', 'Booked Solid System', 'Web Care Plan'] },
  { href: '/who-we-serve/hvac',        title: 'HVAC',        body: 'Install and service calls that actually ring your phone. We target homeowners by ZIP and season.',   systems: ['Market Domination', 'Booked Solid System', 'Web Care Plan'] },
  { href: '/who-we-serve/landscapers', title: 'Landscapers', body: 'Design-build, lawn care, hardscape — we shoot the work and turn it into campaigns that book.',       systems: ['Market Domination', 'Booked Solid System', 'Web Care Plan'] },
  { href: '/who-we-serve/cleaning',    title: 'Cleaning',    body: 'Stand out in a crowded market with a site that builds trust and turns visitors into appointments.',    systems: ['Booked Solid System', 'Web Care Plan'] },
]

export default function WhoWeServePage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Contractor-Only Agency</div>
          <SectionLabel light>Who We Serve</SectionLabel>
          <h1>Built for the Trades.<br /><span className="red">Made in the Carolinas.</span></h1>
          <p>We only work with contractors. Every campaign we run and every site we build speaks directly to homeowners in your market.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>Industries</SectionLabel>
            <h2>Four Trades.<br /><span className="red">One Focus.</span></h2>
          </div>
          <div className="trades-grid">
            {trades.map(t => (
              <Link key={t.href} href={t.href} className="trade-card">
                <h3>{t.title}</h3>
                <p>{t.body}</p>
                <div className="trade-card-tags">
                  {t.systems.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <div className="cta-footer-inner">
          <div className="badge badge-dark" style={{ margin: '0 auto 24px' }}><span className="pulse" />Now Accepting Clients</div>
          <h2>See If Your<br />Market Is<br /><span className="red">Available.</span></h2>
          <p>One contractor per trade per market. Check if your spot is still open.</p>
          <Link href="/contact" className="btn btn-secondary btn-lg">Check My Market <span className="arrow">&#8594;</span></Link>
          <p className="cta-footer-disclaimer">Carolinas only — NC &amp; SC</p>
        </div>
      </section>
    </>
  )
}
