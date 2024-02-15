import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.5rem', { lineHeight: '2rem' }],
      'xl': ['2.5rem', { lineHeight: '1' }],
      '2xl': ['3.5rem', { lineHeight: '1' }],
      '3xl': ['5rem', { lineHeight: '1' }],
    },
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
        body: ["Quicksand", "sans-serif"],
      },
    }
  }
}
