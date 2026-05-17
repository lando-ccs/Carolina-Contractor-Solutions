import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import OurWork from '@/components/OurWork'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Reviews — Carolina Contractor Solutions',
  description: 'Real results from real contractors across the Carolinas. See what business owners say after working with Carolina Contractor Solutions.',
}

type Review = {
  rating: number
  text: string
  name: string
  business: string
  city: string
  trade: string
  photo?: string
}

// Approved reviews only. New submissions arrive by email and get added here
// after a quick review — see src/app/api/review/route.ts.
const reviews: Review[] = []

function Stars({ rating }: { rating: number }) {
  return (
    <div className="review-card-stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      <span className="review-card-stars-off">{'★'.repeat(5 - rating)}</span>
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Client Reviews</div>
          <SectionLabel light>Reviews</SectionLabel>
          <h1>Don&apos;t Take<br /><span className="red">Our Word For It.</span></h1>
          <p>Real results from real contractors across the Carolinas. No stock photos, no made-up names &mdash; just owners who put us to work.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          {reviews.length > 0 ? (
            <div className="review-grid">
              {reviews.map((r, i) => (
                <article className="review-card" key={i}>
                  <Stars rating={r.rating} />
                  <p className="review-card-text">&ldquo;{r.text}&rdquo;</p>
                  <div className="review-card-author">
                    {r.photo && (
                      <div className="review-card-avatar">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={r.photo} alt={`${r.business} logo`} loading="lazy" />
                      </div>
                    )}
                    <div>
                      <div className="review-card-name">{r.name} &mdash; {r.business}</div>
                      <div className="review-card-city">{r.city}</div>
                    </div>
                  </div>
                  <span className="review-card-pill">{r.trade}</span>
                </article>
              ))}
            </div>
          ) : (
            <div className="review-empty">
              <SectionLabel center>First-Mover Advantage</SectionLabel>
              <h2>We&apos;re Collecting<br /><span className="red">Our First Wave.</span></h2>
              <p>Reviews are rolling in. If you&apos;ve worked with us, your honest take helps the next contractor decide. Be one of the first on the wall.</p>
              <Link href="/leave-a-review" className="btn btn-primary btn-lg">
                Leave a Review <span className="arrow">&#8594;</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <OurWork />

      <section className="section">
        <div className="section-inner">
          <div className="review-cta">
            <h2>Worked With Us?</h2>
            <p>Takes about a minute. Your honest take helps the next contractor decide.</p>
            <Link href="/leave-a-review" className="btn btn-primary btn-lg">
              Leave a Review <span className="arrow">&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
