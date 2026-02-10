/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your exact MUI theme colors
        'primary': {
          DEFAULT: '#50a7c3',
          light: '#2f697f',
          dark: '#004ba0',
          50: '#f0f9ff',
          100: '#e0f2fe',
          600: '#2f697f',
          700: '#004ba0',
        },
        'secondary': {
          DEFAULT: '#9c27b0',
          light: '#d05ce3',
          dark: '#6a0080',
          50: '#faf5ff',
          100: '#f3e8ff',
          600: '#d05ce3',
          700: '#6a0080',
        },
        'error': '#dc2626',
        'warning': '#f59e0b',
        'success': '#16a34a',
        'info': '#0284c7',
        'background': '#f9fafb',
        'paper': '#ffffff',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
        'text-disabled': '#9ca3af',
        'divider': '#e5e7eb',
      },
      borderRadius: {
        'mui': '10px',
        'mui-lg': '12px',
        'mui-xl': '14px',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}