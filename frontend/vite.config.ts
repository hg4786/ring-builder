import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../extensions/ring-builder-ui/assets",
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve(__dirname, "src/main.tsx"), // your entry point
      output: {
        entryFileNames: "ring-builder.js",
        assetFileNames: "ring-builder.css",
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    cors: true,
  },
});