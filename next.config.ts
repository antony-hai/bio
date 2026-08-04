import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 保留服务端渲染能力，以便后续接入 DeepSeek API Route
  // 如需纯静态导出，可改为 output: 'export'
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
