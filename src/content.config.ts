// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const casinos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/casinos' }),
  schema: ({ image }) =>
    z.object({
      basic: z.object({
        cover: image(),
        name: z.string(),
        description: z.string(),
        established: z.string(),
        website: z.string(),
        owner: z.string(),
        license: z.string(),
        rating: z.number(),
        bonus: z.string()
      }),
      secondary: z.object({
        title: z.string(),
        description: z.string()
      }),
      financialInfo: z.object({
        minimumDeposit: z.string(),
        minimumWithdrawal: z.string(),
        gameCount: z.string()
      }),
      author: z.string(),
      depositMethods: z
        .array(
          z.object({
            name: z.string(),
            code: z.string()
          })
        )
        .optional(),
      withdrawalMethods: z
        .array(
          z.object({
            name: z.string(),
            code: z.string()
          })
        )
        .optional(),
      games: z
        .array(
          z.object({
            name: z.string(),
            icon: z.string(),
            available: z.boolean()
          })
        )
        .optional()
    })
});

const generals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/site' }),
  schema: ({ image }) =>
    z.object({
      siteLogo: image(),
      seo: z.object({
        siteTitle: z.string(),
        siteDescription: z.string(),
        siteKeywords: z.string()
      }),
      menu: z.array(
        z.object({
          label: z.string(),
          link: z.string()
        })
      ),
      heroSection: z.object({
        title: z.string(),
        description: z.string(),
        primaryButtonText: z.string(),
        secondaryButtonText: z.string()
      }),
      whyTrustSection: z.object({
        sectionTitle: z.string(),
        trustCards: z.array(
          z.object({
            title: z.string(),
            description: z.string()
          })
        )
      })
    })
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      bio: z.string()
    })
});

export const collections = { casinos, generals, authors };
