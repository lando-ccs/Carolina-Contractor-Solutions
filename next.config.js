/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/services/websites',     destination: '/services/web-care-plan',     permanent: true },
      { source: '/services/content',      destination: '/services/market-domination', permanent: true },
      { source: '/services/booked-solid', destination: '/services/market-domination', permanent: true },
      { source: '/who-we-serve/general-contractors', destination: '/who-we-serve/concrete-hardscaping', permanent: true },
    ]
  },
}

module.exports = nextConfig
