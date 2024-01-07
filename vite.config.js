import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "bechbox.ui",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        // Ensure CSS is output as a separate file
        assetFileNames: (assetInfo) =>
          assetInfo.name.endsWith(".css") ? "style.css" : assetInfo.name,
      },
    },
  },
});
