/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aqua: {
          base: '#00ffff',
          bright: '#7df9ff',
          soft: '#88daeb',
          dark: '#004958',
          abyss: '#003333',
          teal: '#008080',
          deep: '#001f26',
        },
        navy: {
          950: '#001a20',
          900: '#00262f',
          850: '#00333e',
          800: '#004250',
          750: '#005263',
          700: '#00657a',
          600: '#007b94',
        },
        electric: {
          300: '#88daeb',
          400: '#7df9ff',
          500: '#00ffff',
          600: '#00a3cc',
        },
        circuiteal: {
          300: '#7df9ff',
          400: '#00ffff',
          500: '#008080',
          600: '#004958',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px 2px rgba(0, 255, 255, 0.45)',
        'glow-aqua': '0 0 35px 4px rgba(125, 249, 255, 0.4)',
        'glow-ambient': '0 20px 80px -10px rgba(0, 255, 255, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
