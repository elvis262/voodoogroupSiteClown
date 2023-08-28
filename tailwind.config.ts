import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'patriot': ['	Patriot Light', 'sans-serif']
      },
      gridTemplateColumns: {
        'masonary' : 'repeat(auto-fill, minmax(25px, 80px))'
      }
    },
  },
  plugins: [],
}
export default config
