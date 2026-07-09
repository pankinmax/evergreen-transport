import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the on-screen development indicator (the floating "N" badge).
  devIndicators: false,
  images: {
    // Temporary hero photography from Unsplash — swap for local assets later.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
