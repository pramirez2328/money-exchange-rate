import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Set this to your specific base URL if necessary
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches your Amplify build settings
    sourcemap: true, // Optional: Useful for debugging
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});
