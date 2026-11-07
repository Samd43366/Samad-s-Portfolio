import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The CMS may save an empty string for a blank link, so allow that.
const optionalUrl = z.union([z.string().url(), z.literal('')]).optional();

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // One sentence, plain language: what problem it solves.
    summary: z.string(),
    // live = a visitor can use it now. building = in progress. planned = not started.
    status: z.enum(['live', 'building', 'planned']),
    stack: z.array(z.string()).min(1),
    year: z.number(),
    order: z.number().default(99),
    featured: z.boolean().default(true),
    draft: z.boolean().default(false),
    demo: optionalUrl,
    repo: optionalUrl,
    // Extra links: write-up, video, paper, anything else.
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    // Optional screenshot shown under the title. Upload through the CMS.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { projects };
