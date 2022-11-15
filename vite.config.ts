import { defineConfig } from 'vite';

import { createHtmlPlugin } from 'vite-plugin-html';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [wasm(), topLevelAwait(), createHtmlPlugin()],

  build: {
    outDir: 'build',
  },
  // Custom config here...
});

