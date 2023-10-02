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
        // Where the twig files are located
        root: "./src",
      }),
    ],
    server: {
      // Expose the server to the network allowing access from ip address
      host: true,
    },
  };
};
