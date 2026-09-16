import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/Portfolio_WIP/',
  build: {
    outDir: '.output/public',
    emptyOutDir: true,
  },
  tanstackStart: {
    pages: {
      prender: true,
    },
    nitro: {
      preset: 'static',
      serveStatic: true,
    },
  },
});
