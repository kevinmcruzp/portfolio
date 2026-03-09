import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_URL_DOMAIN_IMAGE || "example.com",
        pathname: "**",
        protocol: "https",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
