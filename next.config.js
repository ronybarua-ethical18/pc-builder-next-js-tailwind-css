/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'study.com'], // Add the domains of your external images here
  },
}

module.exports = nextConfig
