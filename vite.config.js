import { resolve } from "path";

import twig from "@vituum/vite-plugin-twig";
import vituum from "vituum";

export default ({ mode }) => {
  return {
    ...(mode === "production" ? { base: "https://danyellow.net/clndp/" } : {}),
    plugins: [
      //   pages(),
      vituum(),
      twig({
        root: "./src/pages",
      }),
    ],
    build: {
      manifest: true,
      emptyOutDir: true,
      rollupOptions: {
        input: ["./src/pages/index.twig"],
        output: {
          dir: resolve(process.cwd(), "dist"),
        },
      },
    },
  };
};
