import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
        prefixDefaultLocale: false // 'false' si quieres que el español no tenga /es/
    }
  }
});