import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  root: '.',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true
  },
  server: {
    port: 5173,
    open: false,
    host: true,
    strictPort: true,
    hmr: {
      clientPort: 5173
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src')
    }
  }
});
