export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'QTIM',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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

  runtimeConfig: {
    public: {
      apiBase: process.env.API_HOST,
    },
  },

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
