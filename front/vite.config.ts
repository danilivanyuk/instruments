import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.join(__dirname, "src") }],
  },
});
