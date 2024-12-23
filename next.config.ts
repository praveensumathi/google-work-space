import type { NextConfig } from "next";

const isProd = true;
const repoName = "google-work-space"; // Replace with your GitHub repository name

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true,
};

export default nextConfig;
