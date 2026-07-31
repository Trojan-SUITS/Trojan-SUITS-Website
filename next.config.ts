import type { NextConfig } from "next";

// Set by the GitHub Pages workflow only — Vercel and local dev leave this
// unset, so basePath/output stay empty/normal there.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "Trojan-SUITS-Website";

const nextConfig: NextConfig = {
  // next/image doesn't auto-prefix basePath for plain string `src` paths
  // (only for its own managed assets), so components read this to prefix
  // photo paths themselves. See src/lib/basePath.ts.
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
  ...(isGithubPages
    ? {
        output: "export",
        basePath: `/${repoName}`,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
