'use client'

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import SectionLabel from '@/components/SectionLabel'

type FormState = { name: string; business: string; role: string; city: string; review: string }

const MIN = 50
const MAX = 500

export default function LeaveAReviewPage() {
  const [form, setForm] = useState<FormState>({ name: '', business: '', role: '', city: '', review: '' })
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [photo, setPhoto] = useState<File | null>(null)
  const [consent, setConsent] = useState(false)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    if (rating < 1) { setError('Please pick a star rating.'); return }
    if (form.review.length < MIN || form.review.length > MAX) {
      setError(`Your review needs to be between ${MIN} and ${MAX} characters.`); return
    }
    if (!consent) { setError('Please check the consent box so we can publish your review.'); return }

    setLoading(true)
    try {
      const data = new FormData()
      data.append('name', form.name)
      data.append('business', form.business)
      data.append('role', form.role)
      data.append('city', form.city)
      data.append('rating', String(rating))
      data.append('review', form.review)
      data.append('consent', String(consent))
      if (photo) data.append('photo', photo)

      const res = await fetch('/api/review', { method: 'POST', body: data })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
    } catch {
      setError('Something went wrong. Please try again, or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = { width: '100%', padding: '14px 14px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', fontSize: 16, color: 'var(--text)', background: '#fff', outline: 'none' } as const
  const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 8 } as const

  return (
    <>
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">60 Seconds, Tops</div>
          <SectionLabel light>Leave a Review</SectionLabel>
          <h1>Worked With Us?<br /><span className="red">Tell It Straight.</span></h1>
          <p>No essay required. A few honest sentences about what changed for your business goes a long way for the next contractor deciding whether to pull the trigger.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner" style={{ maxWidth: 720 }}>
          {sent ? (
            <div style={{ padding: 'clamp(28px, 6vw, 48px)', background: 'var(--bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>&#10003;</div>
              <h3 style={{ fontSize: 28, color: 'var(--navy)', marginBottom: 12 }}>Thanks &mdash; We Got It.</h3>
              <p style={{ color: 'var(--text)', lineHeight: 1.65 }}>We&apos;ll give it a quick read and get it up on the site shortly. Appreciate you taking the time.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'var(--bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: 'clamp(24px, 5vw, 40px)' }}>
              <h3 style={{ fontSize: 24, color: 'var(--navy)', marginBottom: 28 }}>Your Review</h3>

              {[
                { label: 'Your Name *', name: 'name', placeholder: 'John Smith', required: true },
                { label: 'Business Name *', name: 'business', placeholder: 'Smith Roofing LLC', required: true },
                { label: 'Your Role', name: 'role', placeholder: 'Owner', required: false },
                { label: 'City / State *', name: 'city', placeholder: 'Charlotte, NC', required: true },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>{f.label}</label>
                  <input
                    type="text"
                    name={f.name}
                    value={form[f.name as keyof FormState]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    required={f.required}
                    style={inputStyle}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Rating *</label>
                <div className="star-picker" role="radiogroup" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      type="button"
                      className={`star-btn${n <= (hover || rating) ? ' on' : ''}`}
                      aria-label={`${n} star${n > 1 ? 's' : ''}`}
                      aria-pressed={n === rating}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(n)}
                    >
                      ★
                    </button>
                  ))}
                  <span className="star-picker-label">{rating ? `${rating} of 5` : 'Tap to rate'}</span>
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Your Review *</label>
                <textarea
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  rows={5}
                  minLength={MIN}
                  maxLength={MAX}
                  required
                  placeholder="What did we build for you, and what changed after? Be specific — the phone rings more, you stopped chasing referrals, whatever it is."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                <p style={{ fontSize: 12, color: form.review.length < MIN ? 'var(--text)' : 'var(--navy)', marginTop: 6, textAlign: 'right' }}>
                  {form.review.length} / {MAX} {form.review.length < MIN && `(${MIN - form.review.length} more to go)`}
                </p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Photo or Logo (optional)</label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={e => setPhoto(e.target.files?.[0] ?? null)}
                  style={{ ...inputStyle, padding: '10px 14px' }}
                />
              </div>

              <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 28, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  required
                  style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0, accentColor: 'var(--red)' }}
                />
                <span style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.55 }}>
                  I&apos;m good with Carolina Contractor Solutions publishing this review (with my name, business, and city) on their website and marketing. *
                </span>
              </label>

              <button type="submit" disabled={loading} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Sending...' : 'Submit Review'} <span className="arrow">&#8594;</span>
              </button>
              {error && <p style={{ color: 'var(--red)', fontSize: 13, textAlign: 'center', marginTop: 10 }}>{error}</p>}
              <p style={{ fontSize: 12, color: 'var(--text)', textAlign: 'center', marginTop: 12 }}>Reviewed before it goes live &middot; No spam, ever</p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
