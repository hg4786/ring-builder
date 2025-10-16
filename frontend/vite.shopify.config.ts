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
      input: path.resolve(__dirname, "src/main.tsx"),
      output: {
        entryFileNames: "ring-builder.js",
        assetFileNames: (assetInfo) => {
          // Separate images and CSS correctly
          if (/\.(css)$/.test(assetInfo.name ?? "")) {
            return "ring-builder.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    cors: true,
  },
});