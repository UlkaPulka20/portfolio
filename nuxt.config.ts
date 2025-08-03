export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      title: 'Ulkapulka',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0',
        },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/webp', href: 'https://linnwarme.com/wp-content/uploads/2024/11/Pastel-Fondant-floral-3.webp' }],
    },
  },
  routeRules: {
    '/**': {
      prerender: true,
      cache: {
        swr: true,
        maxAge: 120,
        staleMaxAge: 60,
        headersOnly: true,
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/**': { isr: false },
    },
  },
  experimental: {
    viewTransition: false,
    renderJsonPayloads: true,
  },
  sourcemap: true,
  compatibilityDate: '2025-07-01',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@nuxt/image'],
  css: ['@/assets/scss/global.scss', '@/assets/scss/screens.scss'],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
});
