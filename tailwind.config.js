/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    screens:{
      'phone':'393px',
      'tablet':'640px',
      'laptop':'1024px',
      'desktop':'1440px',
    },
    extend: {
      colors:{
        backgroundColor:'#FFFAE5',
      }
    },
  },
  plugins: [],
};

