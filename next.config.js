/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["arthowe.site"],
  },
};

module.exports = nextConfig;
