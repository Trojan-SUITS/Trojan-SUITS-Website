// next/image doesn't auto-prefix `basePath` for plain string `src` values
// (only for its own managed assets, e.g. next/font), so any local image
// referenced by a raw path string needs to go through this helper.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
