// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.ts';

export default defineConfig({
  // URL pública: se usa para que la imagen de vista previa (Open Graph) funcione en WhatsApp.
  site: site.url,
  vite: {
    plugins: [tailwindcss()],
  },
});
