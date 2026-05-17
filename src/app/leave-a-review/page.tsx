'use client'

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

type FormState = {
  name: string
  business: string
  role: string
  city: string
  rating: number
  review: string
  consent: boolean
}

export default function LeaveAReviewPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    business: '',
    role: '',
    city: '',
    rating: 0,
    review: '',
    consent: false,
  })
  const [hoverRating, setHoverRating] = useState(0)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target
    const name = target.name
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setForm(f => ({ ...f, [name]: target.checked }))
    } else {
      setForm(f => ({ ...f, [name]: target.value }))
    }
  }

  function setRating(r: number) {
    setForm(f => ({ ...f, rating: r }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (!form.consent) {
      setError('Please check the consent box so we can use your review.')
      return
    }
    if (form.rating < 1) {
      setError('Please pick a rating.')
      return
    }
    if (form.review.length < 50) {
      setError('Your review needs at least 50 characters.')
      return
    }
    if (form.review.length > 500) {
      setError('Your review is over 500 characters. Trim it down a bit.')
      return
    }

    setLoading(true)
    try {
      const data = new FormData()
      data.append('name', form.name)
      data.append('business', form.business)
      data.append('role', form.role)
      data.append('city', form.city)
      data.append('rating', String(form.rating))
      data.append('review', form.review)
      data.append('consent', String(form.consent))

      const res = await fetch('/api/review', {
        method: 'POST',
        body: data,
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
    } catch {
      setError('Something went wrong. Please try again, or text us at (843) 742-9776.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Leave a Review</div>
          <SectionLabel light>Tell Your Story</SectionLabel>
          <h1>Help the Next<br /><span className="red">Contractor Decide.</span></h1>
          <p>Takes about a minute. Your honest take goes a long way for the next business owner deciding if we&apos;re a fit.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner" style={{ maxWidth: 720 }}>
          {sent ? (
            <div className="review-empty">
              <div style={{ fontSize: 56, color: 'var(--navy)', marginBottom: 8 }}>✓</div>
              <h2>Got It.<br /><span className="red">Thank You.</span></h2>
              <p>Your review is on its way to Lando. We&apos;ll add it to the wall once it&apos;s approved.</p>
              <Link href="/" className="btn btn-primary btn-lg">Back to Home <span className="arrow">&#8594;</span></Link>
            </div>
          ) : (
            <div className="contact-form-card">
              <h3>Tell us how it went</h3>
              <p className="form-sub">All fields except role are required. Reviews are moderated before they go live.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="input-group">
                    <label className="input-label">Your Name *</label>
                    <input className="input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Business Name *</label>
                    <input className="input" type="text" name="business" value={form.business} onChange={handleChange} placeholder="Smith Roofing LLC" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label className="input-label">Your Role</label>
                    <input className="input" type="text" name="role" value={form.role} onChange={handleChange} placeholder="Owner, Operations Manager, etc." />
                  </div>
                  <div className="input-group">
                    <label className="input-label">City + State *</label>
                    <input className="input" type="text" name="city" value={form.city} onChange={handleChange} placeholder="Myrtle Beach, SC" required />
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Your Rating *</label>
                  <div className="star-picker" role="radiogroup" aria-label="Star rating">
                    {[1, 2, 3, 4, 5].map(n => {
                      const filled = n <= (hoverRating || form.rating)
                      return (
                        <button
                          type="button"
                          key={n}
                          className="star-btn"
                          onMouseEnter={() => setHoverRating(n)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(n)}
                          aria-label={`${n} star${n > 1 ? 's' : ''}`}
                          aria-pressed={form.rating === n}
                          style={{ color: filled ? 'var(--red)' : 'rgba(0,40,104,0.18)' }}
                        >
                          ★
                        </button>
                      )
                    })}
                    <span style={{ fontSize: 13, color: 'var(--text2)', marginLeft: 12, alignSelf: 'center' }}>
                      {form.rating > 0 ? `${form.rating} of 5` : 'Pick a rating'}
                    </span>
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Your Review *</label>
                  <textarea
                    className="input"
                    name="review"
                    value={form.review}
                    onChange={handleChange}
                    placeholder="What did we build for you? How has it changed your business?"
                    rows={6}
                    maxLength={500}
                    required
                    style={{ resize: 'vertical', minHeight: 140, fontFamily: 'inherit' }}
                  />
                  <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 6, textAlign: 'right' }}>
                    {form.review.length} / 500 — minimum 50 characters
                  </div>
                </div>

                <div className="input-group" style={{ marginTop: 8 }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--text)', lineHeight: 1.5, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                      style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0 }}
                    />
                    <span>I agree that Carolina Contractor Solutions can use this review on their website and marketing materials.</span>
                  </label>
                </div>

                <button type="submit" disabled={loading} className="submit-btn" style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending...' : 'Submit Review'}
                </button>

                {error && <p style={{ color: 'var(--red)', fontSize: 13, textAlign: 'center', marginTop: 10 }}>{error}</p>}

                <p className="form-note">Moderated before going live. Usually approved within a day.</p>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
