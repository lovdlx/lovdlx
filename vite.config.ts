import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Supports both custom domain / user.github.io (BASE_PATH='/')
// and project repos user.github.io/repo-name (BASE_PATH='/repo-name/')
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
