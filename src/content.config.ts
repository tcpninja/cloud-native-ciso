import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories } from '@data/categories';
import { tags } from '@data/tags';

// Extract category names for the enum
const categoryNames = categories.map((category) => category.name);
// Extract tag names from the enum
const tagNames = tags.map((tags) => tags.name);

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            excerpt: z.string(),
            featured: z.boolean().default(false).optional(),
            featuredImage: image().optional(),
            publishDate: z.string().transform((str) => new Date(str)),
            publish: z.boolean().default(true),
            categories: z.array(z.enum(categoryNames as [string, ...string[]])).default([]),
            seo: z
                .object({
                    title: z.string().optional(),
                    description: z.string().optional(),
                    image: z.string().optional(),
                })
                .optional(),
        }),
});

const playbook = defineCollection({
    loader: glob({ base: './src/content/playbook', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
        // Required fields
        title: z.string(),
        excerpt: z.string(),
        description: z.string(),
        slug: z.string(),

        // Optional media and ordering
        featuredImage: image().optional(),
        image: image().optional(),
        order: z.number().default(999),
        publishDate: z.string().transform((str) => new Date(str)),
        publish: z.boolean().default(true),

        // Optional categorization and metadata
        audience: z.enum(['founder', 'developer', 'product-manager', 'security-lead']).optional(),
        focus: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional(),
        categories: z.array(z.string()).optional(),
        level: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),

        // Optional call to action
        link: z.string().optional(),
        ctaLabel: z.string().optional(),
        ctaLink: z.string().optional(),

        // Optional SEO metadata
        seo: z
            .object({
            title: z.string().optional(),
            description: z.string().optional(),
            image: z.string().optional(), // string since it might be absolute or external
            })
            .optional(),
        }),
    });

const legal = defineCollection({
    loader: glob({ base: './src/content/legal', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        lastUpdated: z.string().transform((str) => new Date(str)),
        seo: z
            .object({
                title: z.string().optional(),
                description: z.string().optional(),
            })
            .optional(),
    }),
});

export const collections = { blog, legal, playbook };
