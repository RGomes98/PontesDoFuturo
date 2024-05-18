import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), TanStackRouterVite()],
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
});
