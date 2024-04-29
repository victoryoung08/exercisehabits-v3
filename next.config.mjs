/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "exercise-habits-backend-production.up.railway.app",
      "exercisehabits-v3.vercel.app",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
      {
        protocol: "https",
        hostname: "exercise-habits-backend-production.up.railway.app",
        port: '4000',
      },
      {
        protocol: "https",
        hostname: "exercisehabits-v3.vercel.app",
      },
    ],
  },
};

export default nextConfig;
