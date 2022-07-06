import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oleo+Script:wght@400;700&display=swap', rel: "stylesheet" },
    ],
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: { config: './tailwind.config.js' },
          autoprefixer: {},
        }
      },
    },
  },
  buildModules: ['@pinia/nuxt'],
  css: ["@/assets/css/tailwind.css"]
});
