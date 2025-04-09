import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          pdfjs: ['pdfjs-dist']
        }
      }
    }
  }
});
