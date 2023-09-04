/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    apiUrl: isProduction ? 'https://readspishstories.com/api': 'http://localhost:4000',
  },
  publicRuntimeConfig: {
    apiUrl: isProduction ? 'https://readspishstories.com/api': 'http://localhost:4000',
  },
}

module.exports = nextConfig
