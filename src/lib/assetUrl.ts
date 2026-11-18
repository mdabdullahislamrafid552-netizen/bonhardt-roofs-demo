export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prefixes local public asset paths with NEXT_PUBLIC_BASE_PATH so images and
 * icons work identically on localhost, custom domains, and GitHub Pages subpaths.
 */
export function assetUrl(path: string): string {
  if (!path.startsWith("/")) return path;
  if (!BASE_PATH) return path;
  if (path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
