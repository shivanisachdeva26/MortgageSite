// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;




import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React Strict Mode to highlight potential issues
  swcMinify: true,       // Enables SWC-based minification for faster builds
  images: {
    domains: ["example.com"], // Add any domains you want to allow for images
  },
  // Enable TypeScript strict mode if not already
  typescript: {
    ignoreBuildErrors: false,
  },
  // You can add other Next.js configuration options here
};

export default nextConfig;
