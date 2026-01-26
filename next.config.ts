import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_URL_DOMAIN_IMAGE || 'example.com',
        pathname: '**',
        protocol: 'https',
      },
    ],
  }
};

export default nextConfig;
