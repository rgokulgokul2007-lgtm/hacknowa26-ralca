/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18',
          900: '#0B132B',
          800: '#1C2541',
          700: '#2A3656',
        },
        emergency: {
          red: '#EF4444',
          orange: '#F97316',
          amber: '#F59E0B',
          green: '#10B981',
          blue: '#3B82F6',
          cyan: '#06B6D4'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'beacon': 'beacon 2s ease-in-out infinite',
      },
      keyframes: {
        beacon: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.25)', opacity: '0.6' }
        }
      }
    },
  },
  plugins: [],
}
