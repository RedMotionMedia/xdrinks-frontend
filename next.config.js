/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  env:{
    MAPBOX_KEY: process.env.MAPBOX_KEY
  }
}

module.exports = nextConfig
