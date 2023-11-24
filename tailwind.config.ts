import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b3149',
        primaryDark: '#092334',
        primaryLight: '#0d3b58',
        secondary: '#28b6d5',
        secondaryDark: '#2a696c',
      },
    },
  },
  plugins: [],
}
export default config
