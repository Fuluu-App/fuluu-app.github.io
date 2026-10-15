import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves plain files, so the site is exported as static HTML.
  output: "export",
  // /privacy/ -> privacy/index.html, which GitHub Pages resolves without rewrites.
  trailingSlash: true,
};

export default nextConfig;
