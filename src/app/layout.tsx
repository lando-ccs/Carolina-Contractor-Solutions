import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const SITE_URL = 'https://www.carolinacontractorsolutions.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Carolina Contractor Solutions',
  description: 'Done-for-you marketing for contractors across North and South Carolina. Websites, content shoots, Google Ads, and Meta Ads.',
  url: SITE_URL,
  telephone: '+1-843-742-9776',
  email: 'info@carolinacontractorsolutions.com',
  image: `${SITE_URL}/assets/newccslogo.webp`,
  logo: `${SITE_URL}/assets/newccslogo.webp`,
  priceRange: '$$',
  areaServed: [
    { '@type': 'State', name: 'North Carolina' },
    { '@type': 'State', name: 'South Carolina' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'SC',
    addressCountry: 'US',
  },
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Nav />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
