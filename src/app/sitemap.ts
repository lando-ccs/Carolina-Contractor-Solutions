import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.carolinacontractorsolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/build-only', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/web-care-plan', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/market-domination', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/portfolio', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/who-we-serve', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/who-we-serve/roofers', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/who-we-serve/hvac', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/who-we-serve/landscapers', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/who-we-serve/cleaning', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/who-we-serve/plumbing', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/who-we-serve/pressure-washing', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/who-we-serve/general-contractors', priority: 0.7, changeFrequency: 'monthly' },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
