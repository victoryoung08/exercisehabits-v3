/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
      {
        protocol: "https",
        hostname: "exercise-habits-backend-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
