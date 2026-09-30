/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FDFCF9',
          100: '#FAF8F3',
          200: '#F3EFE6',
          300: '#E8E2D4',
          400: '#D6CDBA',
        },
        charcoal: {
          900: '#0F1012',
          800: '#1A1C20',
          700: '#2A2D34',
          600: '#424651',
          500: '#5F6472',
          400: '#868D9E',
          300: '#B0B6C5',
        },
        brand: {
          DEFAULT: '#C84B27', // Terracotta Vermilion accent
          hover: '#B23E1C',
          light: '#FDF4F0',
          border: '#E8D5CC',
          dark: '#933013',
        },
        accent: {
          gold: '#C59B27',
          teal: '#1B6B68',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        editorial: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(15, 16, 18, 0.05), 0 2px 6px -1px rgba(15, 16, 18, 0.03)',
        'card-hover': '0 12px 32px -4px rgba(15, 16, 18, 0.08), 0 4px 12px -2px rgba(15, 16, 18, 0.04)',
        'editorial': '0 20px 40px -15px rgba(15, 16, 18, 0.07)',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
}
