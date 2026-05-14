import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: {
    default: 'Carolina Contractor Solutions — Marketing for Contractors in NC & SC',
    template: '%s | Carolina Contractor Solutions',
  },
  description: 'Done-for-you marketing for contractors across the Carolinas. Websites, content shoots, Google Ads, and Meta Ads that turn local searchers into booked jobs for roofers, landscapers, HVAC, and more.',
  keywords: ['contractor marketing', 'roofing marketing', 'HVAC marketing', 'landscaping marketing', 'North Carolina', 'South Carolina', 'contractor website'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Carolina Contractor Solutions',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
