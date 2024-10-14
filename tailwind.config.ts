import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#1E40AF', // Exemplo de cor primária personalizada
        secondary: '#9333EA', // Exemplo de cor secundária personalizada
        accent: '#F59E0B' // Exemplo de cor de destaque
        // Adicione mais cores conforme necessário
      }
    }
  }
}
