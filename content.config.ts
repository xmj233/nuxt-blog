import { defineCollection, defineContentConfig } from '@nuxt/content'
import { asRobotsCollection } from '@nuxtjs/robots/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      ...asRobotsCollection({
        type: 'page',
        source: '**/*.md',
      }),
    }),
  },
})
