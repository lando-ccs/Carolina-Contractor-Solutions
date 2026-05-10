'use client'

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import SectionLabel from '@/components/SectionLabel'
import Link from 'next/link'

type FormState = { name: string; company: string; phone: string; email: string; trade: string; market: string; service: string; message: string }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', company: '', phone: '', email: '', trade: '', market: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
    } catch {
      setError('Something went wrong. Please try calling or emailing us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <img className="page-hero-map" src="/assets/Carolinas-bg-img 1.webp" alt="" aria-hidden="true" />
        <div className="page-hero-inner">
          <div className="badge badge-dark">Free Consultation</div>
          <SectionLabel light>Contact</SectionLabel>
          <h1>Let&apos;s See If<br /><span className="red">You&apos;re a Fit.</span></h1>
          <p>Fill out the form below and we&apos;ll reach out within one business day to schedule a 30-minute discovery call. No pitch &mdash; just a conversation about your market and your goals.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="how-grid">
            {/* Left */}
            <div>
              <SectionLabel>What to Expect</SectionLabel>
              <h2 style={{ fontSize: 48, color: 'var(--navy)', marginBottom: 24 }}>30-Minute<br /><span style={{ color: 'var(--red)' }}>Discovery Call.</span></h2>
              <div className="steps-col">
                {[
                  { n: '01', t: 'Fill Out the Form', b: 'Tell us your trade, your market, and what you are hoping to get out of a partnership.' },
                  { n: '02', t: 'We Check Availability', b: 'We confirm whether your trade and market is still open. If it is, we schedule a call.' },
                  { n: '03', t: 'Discovery Call (30 min)', b: 'We map your service area, best job types, and current marketing situation. Zero pressure.' },
                  { n: '04', t: 'Proposal Within 48 Hours', b: "If we're a fit, you get a clear proposal with pricing and a launch timeline." },
                ].map(s => (
                  <div key={s.n} className="step" style={{ borderBottomColor: 'var(--border)' }}>
                    <div className="step-num" style={{ color: 'var(--red)' }}>{s.n}</div>
                    <div>
                      <h4 style={{ color: 'var(--navy)' }}>{s.t}</h4>
                      <p style={{ color: 'var(--text)' }}>{s.b}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 48, padding: 32, background: 'var(--bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--text)', marginBottom: 16 }}>Contact Info</p>
                <a href="tel:8437429776" style={{ display: 'block', fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>(843) 742-9776</a>
                <a href="mailto:info@carolinacontractorsolutions.com" style={{ display: 'block', fontSize: 15, color: 'var(--text)' }}>info@carolinacontractorsolutions.com</a>
                <p style={{ fontSize: 13, color: 'var(--text)', marginTop: 16, lineHeight: 1.6 }}>Serving NC &amp; SC &mdash; Myrtle Beach to Charlotte to Asheville</p>
              </div>
            </div>

            {/* Right */}
            <div>
              {sent ? (
                <div style={{ padding: 48, background: 'var(--bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>&#10003;</div>
                  <h3 style={{ fontSize: 28, color: 'var(--navy)', marginBottom: 12 }}>Got It &mdash; We&apos;ll Be in Touch.</h3>
                  <p style={{ color: 'var(--text)', lineHeight: 1.65 }}>We&apos;ll reach out within one business day to schedule your discovery call.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: 'var(--bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: 40 }}>
                  <h3 style={{ fontSize: 24, color: 'var(--navy)', marginBottom: 28 }}>Tell Us About Your Business</h3>
                  {[
                    { label: 'Full Name *',     name: 'name',    type: 'text',  placeholder: 'John Smith' },
                    { label: 'Company Name *',  name: 'company', type: 'text',  placeholder: 'Smith Roofing LLC' },
                    { label: 'Phone Number *',  name: 'phone',   type: 'tel',   placeholder: '(843) 555-0100' },
                    { label: 'Email Address *', name: 'email',   type: 'email', placeholder: 'john@smithroofing.com' },
                    { label: 'City / Service Area *', name: 'market', type: 'text', placeholder: 'Charlotte, NC' },
                  ].map(f => (
                    <div key={f.name} style={{ marginBottom: 20 }}>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name as keyof FormState]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        required
                        style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', fontSize: 15, color: 'var(--text)', background: '#fff', outline: 'none' }}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>Trade / Industry *</label>
                    <select name="trade" value={form.trade} onChange={handleChange} required style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', fontSize: 15, color: 'var(--text)', background: '#fff', outline: 'none' }}>
                      <option value="">Select your trade</option>
                      <option>Roofing</option>
                      <option>HVAC</option>
                      <option>Landscaping</option>
                      <option>Cleaning</option>
                      <option>Pressure Washing</option>
                      <option>Plumbing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>Which service are you interested in? *</label>
                    <select name="service" value={form.service} onChange={handleChange} required style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', fontSize: 15, color: 'var(--text)', background: '#fff', outline: 'none' }}>
                      <option value="" disabled>Select a service...</option>
                      <option value="web-care-plan">Web Care Plan — from $500 build + $500/mo care</option>
                      <option value="booked-solid">Booked Solid System — $2,000/mo (Google Ads + SEO)</option>
                      <option value="market-domination">Market Domination — $5,000/mo (Full system)</option>
                      <option value="not-sure">Not sure yet — let&apos;s talk</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>Anything else we should know?</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Current monthly revenue, biggest challenge, how you heard about us..." style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', fontSize: 15, color: 'var(--text)', background: '#fff', outline: 'none', resize: 'vertical' }} />
                  </div>
                  <button type="submit" disabled={loading} className="btn btn-secondary btn-lg" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Sending...' : 'Submit & Check Availability'} <span className="arrow">&#8594;</span>
                  </button>
                  {error && <p style={{ color: 'var(--red)', fontSize: 13, textAlign: 'center', marginTop: 10 }}>{error}</p>}
                  <p style={{ fontSize: 12, color: 'var(--text)', textAlign: 'center', marginTop: 12 }}>We respond within one business day &middot; No spam, ever</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
