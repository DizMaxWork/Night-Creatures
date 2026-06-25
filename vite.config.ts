import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const base = env.VITE_BASE_PATH || "/";

  return {
    base,
    plugins: [react()],
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            motion: ["framer-motion"],
          },
        },
      },
    },
    server: {
      port: 5173,
      strictPort: false,
    },
    preview: {
      port: 4173,
    },
  };
});
