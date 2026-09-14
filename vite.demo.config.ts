import { defineConfig } from "vite";

// A page with a mocked Home Assistant, for working on the card without a robot.
export default defineConfig({
  root: "demo",
  server: { port: 5174, strictPort: true, fs: { allow: [".."] } },
});
