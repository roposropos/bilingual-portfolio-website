import type { NextConfig } from "next";

// The portfolio itself is one self-contained HTML file in /public/site.html.
// Next.js only serves it: "/", "/pl" and "/en" all rewrite to that file
// (the page reads /pl or /en from the URL and picks the language).
const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/site.html" },
        { source: "/pl", destination: "/site.html" },
        { source: "/en", destination: "/site.html" }
      ],
      afterFiles: [],
      fallback: []
    };
  }
};

export default nextConfig;
