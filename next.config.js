/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.peru.travel',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'wallpapercave.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
