import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    role: z.string(),
    company: z.string().optional(),
    year: z.string(),
    team: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    role: z.string(),
    year: z.string(),
    skills: z.array(z.string()),
    tools: z.array(z.string()),
    demoUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experiments };
