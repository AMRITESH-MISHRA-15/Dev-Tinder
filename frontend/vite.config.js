import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


export default ({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/login": {
          target: `${env.VITE_BACKEND_URL}`,
          changeOrigin: true,
        },
        "/signup": {
          target: `${env.VITE_BACKEND_URL}`,
          changeOrigin: true,
        },
        "/logout": {
          target: `${env.VITE_BACKEND_URL}`,
          changeOrigin: true,
        },
        "/profile/view": { 
          target: `${env.VITE_BACKEND_URL}`,
          changeOrigin: true,
        },
      },
    },
  });
};
