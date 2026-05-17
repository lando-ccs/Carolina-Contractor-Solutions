'use client'

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'

type ContactFormState = { name: string; phone: string; email: string; trade: string }

interface ContactSectionProps {
  /** Pre-filled service value sent to /api/contact. Defaults to 'not-sure'. */
  service?: string
  /** Override the heading top line. */
  headingTop?: string
  /** Override the heading bottom line (rendered in red). */
  headingBottom?: string
  /** Override the body line under the heading. */
  body?: string
}

/**
 * Shared Contact section — identical to the homepage version.
 * Used on the homepage, all 7 trade pages, all 4 services pages.
 *
 * Edit here to change the section everywhere. Per-page overrides via props.
 */
export default function ContactSection({
  service = 'not-sure',
  headingTop = 'Ready to Stop',
  headingBottom = 'Running on Referrals?',
  body = "Book a free 30-minute strategy call. We'll get to know your business and figure out if we're able to help you dominate your market.",
}: ContactSectionProps = {}) {
  const [form, setForm] = useState<ContactFormState>({ name: '', phone: '', email: '', trade: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, company: '', market: '', service, message: '' }),
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
    } catch {
      setError('Something went wrong. Please call or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="contact-bg" src="/assets/scsvg 1.webp" alt="" aria-hidden="true" loading="lazy" />

      <div className="contact-inner">
        <div className="contact-left">
          <div className="section-label">Contact</div>
          <h2 className="contact-h2">{headingTop}<br /><span className="red">{headingBottom}</span></h2>
          <p className="contact-sub">{body}</p>

          <div className="contact-divider" />

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 11 19.79 19.79 0 0 1 1.97 2.4 2 2 0 0 1 3.97.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Text Or Call</div>
                <div className="contact-item-val">(843) 742-9776</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">info@carolinacontractorsolutions.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Serving</div>
                <div className="contact-item-val">NC &amp; SC — Myrtle Beach to Charlotte</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Hours</div>
                <div className="contact-item-val">Mon–Fri, 9am–6pm EST</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-form-card">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '24px 8px' }}>
                <div style={{ fontSize: 48, marginBottom: 12, color: 'var(--navy)' }}>✓</div>
                <h3 style={{ marginBottom: 8 }}>Got It — We&apos;ll Be in Touch.</h3>
                <p style={{ color: 'var(--text)', lineHeight: 1.6 }}>We&apos;ll reach out within one business day to set up your free strategy call.</p>
              </div>
            ) : (
              <>
                <h3>Book Your Free Call</h3>
                <p className="form-sub">Takes 30 seconds. We&apos;ll reach out within 24 hours.</p>

                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="service" value={service} />
                  <div className="input-group">
                    <label className="input-label">Name</label>
                    <input className="input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-row">
                    <div className="input-group">
                      <label className="input-label">Phone Number</label>
                      <input className="input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(843) 000-0000" required />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Email</label>
                      <input className="input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@yourbusiness.com" required />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Trade</label>
                    <select className="input" name="trade" value={form.trade} onChange={handleChange} required>
                      <option value="" disabled>Select...</option>
                      <option>Roofing</option>
                      <option>HVAC</option>
                      <option>Concrete &amp; Hardscaping</option>
                      <option>Landscaping</option>
                      <option>Pressure Washing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" disabled={loading} className="submit-btn" style={{ opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Sending...' : 'Submit'}
                  </button>
                  {error && <p style={{ color: 'var(--red)', fontSize: 13, textAlign: 'center', marginTop: 10 }}>{error}</p>}
                  <p className="form-note">We&apos;ll get back within 24 hours. No Spam Ever.</p>
                </form>
                <p className="form-contact-link">
                  Want to talk specifics? <Link href="/contact">Visit our contact page →</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
