import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 4173, // fixed number, ignore env
    host: "0.0.0.0", // external access
    allowedHosts: ["ems-9dj4.onrender.com"], // your Render host
  },
});
