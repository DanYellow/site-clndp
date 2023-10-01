import { resolve } from "path";

import { loadEnv } from "vite";
import twig from "@vituum/vite-plugin-twig";
import vituum from "vituum";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    ...(mode === "production" ? { base: process.env.VITE_BASE_PATH } : {}),
    plugins: [
      vituum(),
      twig({
        root: "./src/pages",
      }),
    ],
    build: {
      manifest: true,
      emptyOutDir: true,
      rollupOptions: {
        input: ["./src/pages/*.twig"],
        output: {
          dir: resolve(process.cwd(), "dist"),
        },
      },
    },
  };
};
