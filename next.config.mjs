

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
    env: {
      ApiEdgePoint: "https://staging.artemamed.com",
    },
    images: {
      domains: ["staging.artemamed.com"],
    },
  };

export default nextConfig;
