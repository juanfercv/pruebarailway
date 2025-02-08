import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Definir __filename y __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);  // Aquí debe ser __dirname, no _dirname

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src'), 'path': 'path-browserify' }
    ],
  },
  server: {
    host: '0.0.0.0', // Permite acceso en Railway
    port: process.env.PORT || 5173, // Puerto dinámico en Railway
    strictPort: true,
  },
  optimizeDeps: {
    exclude: ['path']
  },

});
