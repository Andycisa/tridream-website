import type { NextConfig } from "next";

const CANONICAL_URL = "https://www.tridreamcoaching.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "tridreamcoaching.com",
          },
        ],
        destination: `${CANONICAL_URL}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.tridreamcoaching.com",
          },
        ],
        missing: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "https",
          },
        ],
        destination: `${CANONICAL_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
