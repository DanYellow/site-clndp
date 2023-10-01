import { resolve } from 'path'

import twig from "@vituum/vite-plugin-twig";
import vituum from "vituum";

export default {
  plugins: [
    vituum(),
    twig({
      root: "./src/pages",
      formats: ["json", "twig.html"],
    }),
  ],
  build: {
    rollupOptions: {
      input: ['./src/pages/index.twig.html'] 
    },
  },
};
