import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Set the Turbopack root to this package directory to avoid
    // Turbopack inferring the workspace root when multiple lockfiles exist.
    root: path.join(__dirname),
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
