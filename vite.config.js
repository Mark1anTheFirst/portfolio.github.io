import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})