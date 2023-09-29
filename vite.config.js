import twig from "@vituum/vite-plugin-twig";
import vituum from "vituum";

export default {
  plugins: [
    vituum(),
    twig({
      root: "./src/pages",
      formats: ['twig', 'json.twig', 'json', 'twig.html']
    }),
  ],
  build: {
    rollupOptions: {
      input: ["index.twig.html"],
    },
  },
};
