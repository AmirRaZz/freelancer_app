import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/ui",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@features": "/src/features",
      "@styles": "/src/styles",
    },
  },
});
