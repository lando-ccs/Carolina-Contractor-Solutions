import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import PainSolution from '@/components/PainSolution'
import Timeline, { type TimelineStep } from '@/components/Timeline'
import Faq, { type FaqItem } from '@/components/Faq'
import TradeCtaFooter from '@/components/TradeCtaFooter'
import OurWork from '@/components/OurWork'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Services — 3 Tiers for Contractor Marketing',
  description: 'Service tiers for contractors in the Carolinas: Build Only, Web Care Plan, and Market Domination. Pick what fits your goals.',
}

type Tier = {
  href: string
  num: string
  tier: string
  title: string
  price: string
  badge: string
  body: string
  cta: string
  includes: string[]
  featured?: boolean
  popular?: boolean
}

const tiers: Tier[] = [
  {
    href: '/services/build-only',
    num: '01',
    tier: 'Tier 1',
    title: 'Build Only',
    price: '$500–$2,000 one-time',
    badge: 'Nationwide',
    body: 'A professional contractor website built once. You own the code, the domain, and the hosting account. No subscription, no contract — just a real site for your business.',
    cta: 'Learn More',
    includes: ['$500–$2,000 one-time', 'Custom 3–7 page build', 'Mobile-first + local SEO', 'You own everything', '21-day bug-fix warranty', '7–10 day delivery'],
  },
  {
    href: '/services/web-care-plan',
    num: '02',
    tier: 'Tier 2',
    title: 'Web Care Plan',
    price: 'From $500 build · $500/mo',
    badge: 'Nationwide',
    body: 'A professional contractor site built to rank locally and book jobs. Website build starts at $500, then $500/month for ongoing updates, hosting, and support.',
    cta: 'Learn More',
    includes: ['Build from $500 one-time', 'Custom design + copywriting', 'Mobile-first build', 'SEO + local schema', '$500/mo ongoing care', 'Hosting + updates included'],
    popular: true,
  },
  {
    href: '/services/market-domination',
    num: '03',
    tier: 'Tier 3',
    title: 'Market Domination',
    price: '$5,000/mo',
    badge: 'Carolinas Only · One Per Market',
    body: 'Google + Meta Ads, monthly on-location content shoots, and full brand production. One contractor per trade per market — permanently locked in.',
    cta: 'Check Availability',
    includes: ['Google + Meta Ads', 'Monthly content shoots', 'Ad & organic creative', 'Brand story + photography', '90-day lead guarantee', 'Permanent market exclusivity'],
    featured: true,
  },
]

const pain = [
  'You picked a $20/mo template builder — your site looks like everyone else’s',
  'Your agency charges $2k/mo and you can’t reach a human',
  'No one is updating your content, photos, or local SEO',
  'You don’t know what your competitor is spending on ads',
]
const solution = [
  'A real custom site you own outright — or one we maintain',
  'Text us directly — no tickets, 48-hr update turnaround',
  'Monthly on-location shoots delivering real ad creative',
  'Permanent market lock available on Tier 3 — one per trade',
]

const steps: TimelineStep[] = [
  { num: '01', title: 'Pick Your Tier', body: 'Build-only if you just need a site. Web Care if you want it maintained. Market Domination if you want the full operation.' },
  { num: '02', title: '30-Min Discovery', body: 'A short call to confirm scope and market. No prep needed — we ask the questions.' },
  { num: '03', title: 'We Take It From Here', body: 'Build, launch, and (on Care/Domination) keep it sharp every month. You focus on the jobs.' },
]

const faqs: FaqItem[] = [
  { q: 'Which tier is right for me?', a: 'If you just need a site and want to own it, Build Only. If you want the site plus someone keeping it sharp every month, Web Care Plan. If you want the full lead operation — ads, content, automation, market lock — Market Domination.' },
  { q: 'Can I start at one tier and move up later?', a: 'Yes. Most contractors start with Build Only or Web Care and step up to Market Domination once they want exclusivity. Your build carries over.' },
  { q: 'Do I have to be in the Carolinas?', a: 'Build Only and Web Care Plan are available nationwide. Market Domination is Carolinas only — one contractor per trade per market.' },
  { q: 'Are there long contracts?', a: 'Build Only is one-time, no contract. Web Care is month-to-month after a 3-month minimum. Market Domination offers month-to-month, 3-month, and 6-month commits.' },
  { q: 'Can I see real work first?', a: 'Yes — every tier links out to the same portfolio. We’ll also walk you through it on the discovery call.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero" style={{ minHeight: 'auto', paddingBottom: 96 }}>
        <div className="page-hero-inner">
          <SectionLabel light>Services</SectionLabel>
          <h1>Three Tiers.<br /><span className="red">One Goal.</span></h1>
          <p>More calls, more booked jobs. Pick the tier that fits where you are right now — or text us and we&apos;ll tell you which one fits.</p>
          <div className="page-hero-cta">
            <Link href="/contact?service=not-sure" className="btn btn-primary btn-lg">Book a Free Demo <span className="arrow">&rarr;</span></Link>
            <Link href="/portfolio" className="btn btn-outline-light btn-lg">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">3 tiers · no surprises</span>
            <span className="hero-trust-item">Build-only available nationwide</span>
            <span className="hero-trust-item">Carolinas-only on Tier 3</span>
          </div>
        </div>
      </section>

      {/* ── TIERS (existing pattern, polished w/ tier badges) ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Three Tiers</SectionLabel>
            <h2>Pick The<br /><span className="red">Right Lane.</span></h2>
            <p>Same team, same standards, three commitment levels. Browse the rows below — every tier has its own deep-dive page.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {tiers.map(t => (
              <div
                key={t.num}
                className={`service-card${t.featured ? ' featured' : ''}`}
                style={{ padding: '40px 48px', position: 'relative' }}
              >
                {t.popular && <div className="service-card-tier-badge">Most Popular</div>}
                {t.featured && <div className="service-card-tier-badge" style={{ background: 'var(--red)' }}>Carolinas Only</div>}
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
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: t.featured ? 'rgba(255,255,255,0.4)' : 'var(--text)', marginBottom: 6 }}>{t.tier}</div>
                    <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 36, color: t.featured ? '#fff' : 'var(--navy)', marginBottom: 12, lineHeight: 1.1 }}>{t.title}</h2>
                    <p style={{ fontSize: 15, color: t.featured ? 'rgba(255,255,255,0.7)' : 'var(--text)', lineHeight: 1.65, marginBottom: 24 }}>{t.body}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                      <Link href={t.href} className="btn btn-primary">
                        {t.cta} &#8594;
                      </Link>
                      <span style={{ fontFamily: 'var(--font-h)', fontSize: 22, color: t.featured ? '#fff' : 'var(--navy)' }}>{t.price}</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: t.featured ? 'rgba(255,255,255,0.4)' : 'var(--text)', marginBottom: 14 }}>Includes</div>
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

      {/* ── PAIN vs SOLUTION ── */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>The Difference</SectionLabel>
            <h2>Why Contractors<br /><span className="red">Switch To CCS.</span></h2>
            <p>If you&apos;re already paying for a website or ads and the phone still isn&apos;t ringing, you&apos;re in the left column. Here&apos;s the swap.</p>
          </div>
          <PainSolution
            painLabel="Where Most Contractors Are"
            painTitle="The Marketing Stack Most Contractors Run"
            pain={pain}
            solutionLabel="With CCS"
            solutionTitle="The Setup You Actually Wanted"
            solution={solution}
          />
        </div>
      </section>

      {/* ── HOW IT WORKS (timeline) ── */}
      <section className="section dark">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel light>How It Works</SectionLabel>
            <h2><span className="white">Three Steps.</span><br /><span className="red">No Guesswork.</span></h2>
            <p>Whichever tier you pick, the path looks the same.</p>
          </div>
          <Timeline steps={steps} />
        </div>
      </section>

      {/* ── OUR WORK (shared portfolio block) ── */}
      <OurWork />

      {/* ── CONTACT ── */}
      <ContactSection />

      {/* ── FAQ ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head center">
            <SectionLabel>FAQ</SectionLabel>
            <h2>Common<br /><span className="red">Questions.</span></h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <TradeCtaFooter
        badge="Not Sure Which Tier?"
        headingTop="Tell Us Where You Are."
        headingBottom="We'll Pick The Tier."
        body="30 minutes on the phone and we'll tell you straight — Build, Care, or Domination — and what it costs. No upsell pressure."
        href="/contact?service=not-sure"
        ctaLabel="Book A Free Demo"
      />
    </>
  )
}
