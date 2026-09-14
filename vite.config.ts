import { defineConfig } from "vite";

// One ES module with Lit and the icons bundled in: HACS serves exactly this file.
export default defineConfig({
  build: {
    lib: {
      entry: "src/yarbo-local-card.ts",
      formats: ["es"],
      fileName: () => "yarbo-local-card.js",
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    target: "es2022",
  },
});
