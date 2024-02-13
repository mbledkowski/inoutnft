// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "~/config/i18n.config.ts",
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
