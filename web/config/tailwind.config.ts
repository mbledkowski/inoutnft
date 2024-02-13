import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'violet': {
          50: '#efeffe',
          100: '#e1e2fe',
          200: '#cac9fc',
          300: '#aba7f9',
          400: '#9485f4',
          500: '#8268ec',
          600: '#754be0',
          700: '#653dc5',
          800: '#52349f',
          900: '#45317e',
          950: '#291d49',
        }
      },
      fontFamily: {
        main: ["General Sans", "sans-serif"],
        side: ["Quicksand", "sans-serif"],
      }
    }
  }
}
