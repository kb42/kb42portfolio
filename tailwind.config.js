/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1b26',
          light: '#24283b',
          dark: '#16161e',
        },
        secondary: {
          DEFAULT: '#7aa2f7',
          light: '#89b4fa',
          dark: '#6c8ee3',
        },
        text: {
          DEFAULT: '#a9b1d6',
          light: '#c0caf5',
          dark: '#7982a9',
        },
        highlight: {
          DEFAULT: '#f7768e',
          light: '#ff9eaf',
          dark: '#e06c75',
        },
        accent: {
          DEFAULT: '#9ece6a',
          light: '#b4e08c',
          dark: '#8ab55f',
        },
        purple: {
          DEFAULT: '#bb9af7',
          light: '#c4a7e6',
          dark: '#a48eff',
        },
        orange: {
          DEFAULT: '#ff9e64',
          light: '#ffb292',
          dark: '#e68a4a',
        }
      },
      fontFamily: {
        calibre: ['var(--font-calibre)'],
        'fira-code': ['var(--font-fira-code)'],
        'sf-mono': ['var(--font-sf-mono)'],
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'typing-line': 'typing-line 3.5s steps(40, end)',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'typing-line': {
          'from': { width: '0', opacity: '0' },
          'to': { width: '100%', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 