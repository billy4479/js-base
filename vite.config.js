import { defineConfig } from 'vite';

import { minifyHtml } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    minifyHtml(),
  ],

  build: {
    outDir: 'build'
  }
  // Custom config here...
});
