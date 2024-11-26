export default {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
