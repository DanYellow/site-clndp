import nunjucks from "@vituum/vite-plugin-nunjucks";
import vituum from "vituum";

export default {
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
  },
  plugins: [
    nunjucks()
  ],
  build: {
    // rollupOptions: {
    //   input: ["index.njk.html"],
    // },
  },
};
