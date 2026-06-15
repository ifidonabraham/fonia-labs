import fs from "node:fs";
import path from "node:path";

const IMAGE_RE = /\.(png|jpe?g|webp|avif|gif|svg)$/i;

/**
 * Returns the public paths of real screenshots for a company, read at build
 * time from `public/screenshots/<slug>/`. Drop image files into that folder
 * and they appear automatically (sorted by file name). Returns [] when none
 * exist, so the page can fall back to labeled placeholders.
 */
export function getScreenshots(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "screenshots", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_RE.test(file))
      .sort()
      .map((file) => `/screenshots/${slug}/${file}`);
  } catch {
    return [];
  }
}
