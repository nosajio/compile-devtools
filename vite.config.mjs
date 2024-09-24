import { defineConfig } from "vite";

export default defineConfig({
  root: "./public/devtools-internal",
  base: "/devtools-internal-compiled/",
  mode: "production",
  esbuild: {
    supported: {
      "top-level-await": true, // devtools use some top level awaits
    },
  },
  build: {
    outDir: "../devtools-internal-compiled",
    emptyOutDir: true,
    rollupOptions: {
      input: "./public/devtools-internal/inspector.html",
      external: ["puppeteer", "lighthouse", "debug", "stream", "child_process"],
    },
  },
});
