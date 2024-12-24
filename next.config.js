/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: [
      'static.planetminecraft.com',
      'staticg.sportskeeda.com',
      'cdn.gameserver.news'
    ],
  },
}

module.exports = nextConfig
