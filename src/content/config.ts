import { defineCollection, z } from 'astro:content';

const changeNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    season: z.number(),
  }),
});

export const collections = {
  'changenotes': changeNotes,
};
