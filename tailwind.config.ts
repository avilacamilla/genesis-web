import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#fff',
        secondary: '#525252',
        accent: '#236b97'
      }
    }
  },
  corePlugins: {
    preflight: true // Habilita o preflight para aplicar estilos base
  }
}
