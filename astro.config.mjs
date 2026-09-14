import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  vite: {
    optimizeDeps: {
      exclude: ['astro'],
    },
    ssr: {
      // Prevents Vite from trying to bundle internal dependencies into temporary SSR files
      noExternal: true,
    },
  },
});