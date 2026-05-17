import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function POST(req: Request) {
  try {
    const data = await req.formData()

    const name = String(data.get('name') || '').trim()
    const business = String(data.get('business') || '').trim()
    const role = String(data.get('role') || '').trim()
    const city = String(data.get('city') || '').trim()
    const rating = Number(data.get('rating') || 0)
    const review = String(data.get('review') || '').trim()
    const consent = data.get('consent') === 'true' || data.get('consent') === 'on'
    const photo = data.get('photo')

    // Basic validation
    if (!name || !business || !city || !rating || !review || !consent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (review.length < 50 || review.length > 500) {
      return NextResponse.json({ error: 'Review must be 50–500 characters' }, { status: 400 })
    }
    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be 1–5' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const recipient = process.env.REVIEWS_TO || process.env.CONTACT_TO

    const attachments: { filename: string; content: Buffer }[] = []
    if (photo && typeof photo === 'object' && 'arrayBuffer' in photo && photo.size > 0) {
      const buf = Buffer.from(await photo.arrayBuffer())
      attachments.push({ filename: photo.name || 'review-photo', content: buf })
    }

    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating)

    await transporter.sendMail({
      from: `"CCS Reviews" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject: `New Review Submission: ${name} @ ${business}`,
      attachments,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background: #002868; padding: 24px 32px; border-radius: 6px 6px 0 0; margin: -32px -32px 32px;">
            <h1 style="color: #fff; font-size: 22px; margin: 0;">New Review Submitted</h1>
            <p style="color: rgba(255,255,255,0.7); font-size: 13px; margin: 6px 0 0;">Review and approve before publishing to the site.</p>
          </div>

          <div style="text-align: center; margin-bottom: 24px; padding: 16px; background: #f9f9f9; border-radius: 6px;">
            <div style="font-size: 24px; color: #E31212; letter-spacing: 4px;">${stars}</div>
            <div style="font-size: 13px; color: #666; margin-top: 4px;">${rating} of 5 stars</div>
          </div>

          <div style="padding: 20px; background: #fff; border: 1px solid #eee; border-radius: 6px; margin-bottom: 24px;">
            <p style="margin: 0; font-style: italic; color: #333; line-height: 1.6; font-size: 15px;">"${escapeHtml(review)}"</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 140px; font-size: 13px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #111;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Business</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #111;">${escapeHtml(business)}</td></tr>
            ${role ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Role</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${escapeHtml(role)}</td></tr>` : ''}
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Location</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${escapeHtml(city)}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Photo</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${attachments.length ? 'Attached to this email' : 'None'}</td></tr>
            <tr><td style="padding: 10px 0; color: #666; font-size: 13px;">Consent</td><td style="padding: 10px 0; color: #111;"><span style="background: #16a34a; color: #fff; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 700;">APPROVED FOR USE</span></td></tr>
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #f9f9f9; border-radius: 6px; font-size: 12px; color: #999;">
            To publish: add this review to the <code>reviews</code> array in <code>src/app/reviews/page.tsx</code>.
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Review submission error:', err)
    return NextResponse.json({ error: 'Failed to submit review' }, { status: 500 })
  }
}
