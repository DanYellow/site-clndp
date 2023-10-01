import { resolve } from "path";

import twig from "@vituum/vite-plugin-twig";
import vituum from "vituum";

export default {
//   base: "",
//   root: resolve(process.cwd(), "src/pages"),
  plugins: [
    vituum(),
    twig({
        root: "./src/pages",
    }),
  ],
  build: {
    rollupOptions: {
      input: ["./src/pages/index.twig"],
    },
  },
};
