import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import config from "./config";

// https://vitejs.dev/config/
export default defineConfig({
  base: config.base,
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), Markdown()],
});
