/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-red': '#FF0000',
        'custom-black': '#000000',
        'custom-gray': '#F3F4F6',
        'text-secondary': '#A0AEC0', // Added this line
        'neutral-800': '#2D3748', // Added this line
        'neutral-700': '#4A5568', // Added this line
        'neutral-600': '#718096', // Added this line
        'neutral-400': '#CBD5E0', // Added this line
        'accent-1': '#E53E3E', // Added this line
        'accent-2': '#38B2AC', // Added this line
        'sky-100': '#EBF8FF', // Added this line
        'indigo-500': '#667EEA', // Added this line
        'indigo-600': '#5A67D8', // Added this line
      },
      spacing: {
        '128': '32rem',
      },
      width: {
        '280': '280px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};