import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/WITDASHIFTS-DRINK/", // 👈 This tells Vite to use the correct path on GitHub Pages
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
