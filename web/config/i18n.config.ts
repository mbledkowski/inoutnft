export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      login: 'Connect wallet'
    },
    pl: {
      welcome: 'Witaj',
      login: 'Połącz portfel'
    }
  }
}))
