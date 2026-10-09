import type { NextConfig } from "next";

const privateDevOrigins = [
  "localhost",
  "*.localhost",
  "127.0.0.1",
  "0.0.0.0",
  "192.168.*.*",
  "10.*.*.*",
  "172.*.*.*",
];

const envAllowedDevOrigins =
  process.env.ALLOWED_DEV_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  allowedDevOrigins: [...new Set([...privateDevOrigins, ...envAllowedDevOrigins])],
  images: {
    localPatterns: [
      {
        pathname: "/profile.jpg",
      },
    ],
  },
};

export default nextConfig;
