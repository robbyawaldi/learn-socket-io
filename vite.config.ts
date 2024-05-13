import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/socket": "http://localhost:3000/socket.io",
    },
  },
  plugins: [vue()],
});
