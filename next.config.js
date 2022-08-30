/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['openweathermap.org'],
  },
  env: {
    OPEN_WEATHERMAP_API_KEY: process.env.OPEN_WEATHERMAP_API_KEY,
  },
}

module.exports = nextConfig

