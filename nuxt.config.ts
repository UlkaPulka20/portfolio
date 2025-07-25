// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Ulkapulka',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: "viewport",
          content: "width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
        },
        { key: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://linnwarme.com/wp-content/uploads/2024/11/Pastel-Fondant-floral-3.webp' }]
    }
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  modules: ['@element-plus/nuxt', '@nuxt/image']
})