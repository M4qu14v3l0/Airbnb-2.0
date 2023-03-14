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
        hostname: 'upload.wikimedia.org',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
