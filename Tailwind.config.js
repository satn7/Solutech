/** @type {import('tailwindcss').Config} */
module.exports = {
  // Caminho correto para projetos Next.js com 'pages' e 'components'
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Fontes de ambas as configurações
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      // Cores da segunda configuração
      colors: {
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          950: '#0C1B33',
        },
        green: {
          400: '#4ADE80',
          500: '#22C55E',
        },
        purple: {
          400: '#A78BFA',
          500: '#8B5CF6',
        },
        neutral: {
          300: '#D1D5DB',
          400: '#9CA3AF',
          800: '#1F2937',
          900: '#111827',
        },
      },
      // Animações e Keyframes combinados
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'text-flicker': 'text-flicker 2s linear infinite',
        'fade-in-up': 'fade-in-up 1.2s ease forwards',
        'float': 'float 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'text-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: 1 },
          '20%, 22%, 24%, 55%': { opacity: 0.2 },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
      },
      // Efeitos de sombra e imagens de fundo combinados
      boxShadow: {
        'neon': '0 0 15px rgba(72, 187, 255, 0.4), 0 0 30px rgba(192, 132, 252, 0.3)',
      },
      backgroundImage: {
        'grid-pattern': "url('/particles.svg')",
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
