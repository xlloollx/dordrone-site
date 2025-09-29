import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration enabling React and Vitest testing environment
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  }
});