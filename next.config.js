/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'study.com', 'img-prod-cms-rt-microsoft-com.akamaized.net'], // Add the domains of your external images here
  },
}

module.exports = nextConfig
