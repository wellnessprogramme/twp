const withPWA = require('next-pwa')

const nextConfig = {
  images: { domains: ['www2.dsoares.me'] },
  webpack5: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
}

module.exports = withPWA(nextConfig)
