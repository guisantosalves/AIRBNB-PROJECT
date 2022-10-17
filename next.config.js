/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com']
  }
}

// images in next config is making the domai enable

module.exports = nextConfig
