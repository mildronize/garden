
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const base = process.env.NODE_ENV === 'production' ? '/js/' : '/';

export default defineConfig({
  base,
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, '../public/js'),
    rollupOptions: {
      input: {
        "main": resolve(__dirname, 'src/components/main/index.html'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
})