export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'apple-touch-icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  devtools: {
    enabled: false,
  },

  css: [
    '@/assets/css/main.css',
  ],

  modules: ['@nuxtjs/google-fonts', '@nuxt/icon'],

  routeRules: {
    '/': {
      redirect: '/posts',
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    autoImport: false,
  },

  googleFonts: {
    families: {
      Roboto: [400],
    },
  },

  compatibilityDate: '2024-08-07',
});
