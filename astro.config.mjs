import { defineConfig } from 'astro/config';

// Set SITE_URL in Vercel (Project Settings > Environment Variables) once the
// domain is connected, e.g. https://yourname.dev. It is used for canonical links.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
});
