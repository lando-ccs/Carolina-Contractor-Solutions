import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Book a Discovery Call | Carolina Contractor Solutions',
  description: 'Tell us about your contracting business and we\'ll reach out to schedule a discovery call. Serving NC & SC from Myrtle Beach to Charlotte to Asheville.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
