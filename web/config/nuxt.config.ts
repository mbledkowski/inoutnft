// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxt/image",
      {
        dir: 'assets/img'
      }
    ],
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "~/config/i18n.config.ts",
        locales: ['en', 'pl'],
        defaultLocale: 'en',
      },
    ],
    [
      "@nuxt/ui",
      {
        configPath: "~/tailwind.config",
        cssPath: "~/assets/css/tailwind.css",
      },
    ],
  ],
});
