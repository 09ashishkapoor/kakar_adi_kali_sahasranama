import { defineConfig } from 'astro/config';

// The canonical origin lives in src/lib/site.js. Change it there.
export default defineConfig({
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'always',
});
