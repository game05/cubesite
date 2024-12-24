import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vous pouvez ajouter des couleurs personnalisées ici
      },
      fontFamily: {
        // Vous pouvez ajouter des polices personnalisées ici
      },
    },
  },
  plugins: [],
}
export default config
