import type { ImageMetadata } from 'astro';

// Every image uploaded through the CMS lands in src/assets/uploads.
// Astro resizes and converts them at build time, so a 5 MB phone photo
// is shipped as a small WebP.
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/uploads/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

export function findImage(path?: string): ImageMetadata | undefined {
  if (!path) return undefined;
  const found = images[path]?.default;
  if (!found) console.warn(`[image] "${path}" was not found in src/assets/uploads, so it will not be shown.`);
  return found;
}
