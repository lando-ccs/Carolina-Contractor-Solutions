import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, company, phone, email, trade, market, service, message } = body

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const serviceLabel: Record<string, string> = {
      'web-care-plan': 'Web Care Plan — from $500 build + $500/mo',
      'market-domination': 'Market Domination — $5,000/mo',
      'not-sure': 'Not sure yet — let\'s talk',
    }

    await transporter.sendMail({
      from: `"CCS Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Lead: ${name} — ${trade} in ${market}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background: #002868; padding: 24px 32px; border-radius: 6px 6px 0 0; margin: -32px -32px 32px;">
            <h1 style="color: #fff; font-size: 22px; margin: 0;">New Lead — Carolina Contractor Solutions</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 140px; font-size: 13px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #111;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #111;">${company}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #111;"><a href="tel:${phone}" style="color: #002868;">${phone}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #111;"><a href="mailto:${email}" style="color: #002868;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Trade</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #111;">${trade}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Market</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #111;">${market}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><span style="background: #E31212; color: #fff; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 700;">${serviceLabel[service] ?? service}</span></td></tr>
            ${message ? `<tr><td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #333; line-height: 1.6;">${message}</td></tr>` : ''}
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #f9f9f9; border-radius: 6px; font-size: 12px; color: #999;">
            Hit reply to respond directly to ${name} at ${email}
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
