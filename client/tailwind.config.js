/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wood: {
          lightest: '#F5EFE6',
          light: '#E6D5B8',
          medium: '#A47551',
          dark: '#704632',
          darkest: '#462919'
        },
        accent: {
          primary: '#A45C40',
          secondary: '#D4B996'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.1)' },
          '25%': { transform: 'translate(10%, 15%) scale(1.05)' },
          '50%': { transform: 'translate(-5%, 10%) scale(1.15)' },
          '75%': { transform: 'translate(3%, -5%) scale(1.07)' },
        }
      },
      backgroundImage: {
        'wood-pattern': "url('https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'wood-light': "url('https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1600')"
      }
    },
  },
  plugins: [],
}