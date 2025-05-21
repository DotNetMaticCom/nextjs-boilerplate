// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // "Hata Döndüren Proje"deki output: 'standalone' ve experimental ayarları buraya eklenmeyecek.
};

export default nextConfig;