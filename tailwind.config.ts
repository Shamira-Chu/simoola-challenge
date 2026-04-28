import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        'simoola-purple': '#A294F9', // O roxo da sidebar
        'simoola-dark': '#0F0F12',   // Um fundo dark para o modo tech
        'simoola-neon-pink': '#FF00FF',
        'simoola-neon-blue': '#00FFFF',
        'simoola-yellow': '#FFD700',
        'simoola-text': '#5D5A88',
      },
    },
  },
} satisfies Config