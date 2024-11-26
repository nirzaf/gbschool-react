import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          supabase: ['@supabase/supabase-js'],
          utils: ['date-fns']
        }
      }
    },
    chunkSizeWarningLimit: 550
  },
  server: {
    port: 5173,
    open: false,
    host: true,
  }
});
