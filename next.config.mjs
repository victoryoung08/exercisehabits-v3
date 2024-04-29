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
        protocol: "http",
        hostname: "exercise-habits-backend-production.up.railway.app",
        port: "4000",
      },
    ],
  },
};

export default nextConfig;
