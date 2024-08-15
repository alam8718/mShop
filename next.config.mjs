/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "chaldn.com", "mshop-admin.onrender.com"]
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
