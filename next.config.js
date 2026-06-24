/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    ppr: true,
    taint: true, // Enables React taint API for enhanced security
    typedRoutes: true // Enables type checking for routes
  },
};

module.exports = nextConfig;