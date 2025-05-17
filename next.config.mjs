/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co.com"],
    qualities: [100],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
