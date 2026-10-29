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
        navy: {
          950: '#040814',
          900: '#0a0f1d',
          850: '#0e172c',
          800: '#14213d',
          750: '#1b2a4e',
          700: '#233863',
          600: '#334e80',
        },
        electric: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#00f0ff',
          600: '#0284c7',
        },
        circuiteal: {
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px -2px rgba(0, 240, 255, 0.35)',
        'glow-teal': '0 0 20px -2px rgba(20, 184, 166, 0.35)',
        'glow-purple': '0 0 20px -2px rgba(168, 85, 247, 0.35)',
        'glow-amber': '0 0 20px -2px rgba(245, 158, 11, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'trace-flow': 'traceFlow 4s linear infinite',
      },
      keyframes: {
        traceFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
