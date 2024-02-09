// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/eslint-module',
      {

      }
    ],
    [
      '@nuxt/test-utils/module',
      {
        vitestConfig: './config/vitest.config.ts'
      }
    ],
    [
      '@nuxtjs/i18n',
      {
        vueI18n: './config/i18n.config.ts'
      }
    ],
    ['@nuxtjs/tailwindcss',
      {
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~/config/tailwind.config',
      }
    ],
    ['shadcn-nuxt',
      {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
      }
    ],
    '@nuxtjs/color-mode'
  ],
})
