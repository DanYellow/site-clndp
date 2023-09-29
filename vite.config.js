import twig from "@vituum/vite-plugin-twig";
import vituum from "vituum";

export default {
  plugins: [
    vituum(),
    twig({
      root: "./src/pages",
    }),
  ],
  build: {
    rollupOptions: {
      input: ["index.twig"],
    },
  },
};
