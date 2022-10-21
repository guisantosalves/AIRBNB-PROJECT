/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', 'https://jsonkeeper.com/b/4G1G']
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoid29ya2d1aXNhbnRvcyIsImEiOiJjbDloOG9iOWUwOTE3M3dtZW03ZTU1cmJvIn0.PJJJPRdxld8wrEusBosSNg',
  }
}

// images in next config is making the domai enable

module.exports = nextConfig
