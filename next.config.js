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
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com',
        port: '',
      },
    ],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoibTRxdTE0djNsMCIsImEiOiJjbGY3ZnpleG0wMXZvM3Bxd3UwaGJneGM4In0.Aq9WkjN3lCzkQEojdGANKA'
  }
}

module.exports = nextConfig
