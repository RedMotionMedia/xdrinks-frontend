/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    MAPBOX_KEY: process.env.MAPBOX_KEY
  }
}

module.exports = nextConfig
