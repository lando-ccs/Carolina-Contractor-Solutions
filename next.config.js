/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/services/websites', destination: '/services/web-care-plan',     permanent: true },
      { source: '/services/content',  destination: '/services/market-domination', permanent: true },
    ]
  },
}

module.exports = nextConfig
