/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          cyan: '#22D3EE',
          neon: '#22D3EE',
        },
        green: {
          frosted_mint: {
            DEFAULT: '#d8f3dc',
            100: '#16461d',
            200: '#2b8c3a',
            300: '#4cc85e',
            400: '#92dd9d',
            500: '#d8f3dc',
            600: '#e0f5e3',
            700: '#e8f8ea',
            800: '#effaf1',
            900: '#f7fdf8'
          },
          celadon: {
            DEFAULT: '#b7e4c7',
            100: '#173c24',
            200: '#2d7847',
            300: '#44b46b',
            400: '#7dce99',
            500: '#b7e4c7',
            600: '#c7ead3',
            700: '#d5efde',
            800: '#e3f4e9',
            900: '#f1faf4'
          },
          mint_leaf: {
            DEFAULT: '#74c69d',
            100: '#122d20',
            200: '#255a3f',
            300: '#37875f',
            400: '#49b47e',
            500: '#74c69d',
            600: '#91d2b1',
            700: '#acddc5',
            800: '#c8e9d8',
            900: '#e3f4ec'
          },
          sea_green: {
            DEFAULT: '#40916c',
            100: '#0d1d16',
            200: '#1a3a2b',
            300: '#265741',
            400: '#337457',
            500: '#40916c',
            600: '#58b68b',
            700: '#82c8a8',
            800: '#abdac5',
            900: '#d5ede2'
          },
          dark_emerald: {
            DEFAULT: '#2d6a4f',
            100: '#091510',
            200: '#122b20',
            300: '#1c4030',
            400: '#255640',
            500: '#2d6a4f',
            600: '#439d75',
            700: '#69bf98',
            800: '#9bd4ba',
            900: '#cdeadd'
          },
          pine_teal: {
            DEFAULT: '#1b4332',
            100: '#050d0a',
            200: '#0a1a14',
            300: '#10271e',
            400: '#153527',
            500: '#1b4332',
            600: '#327d5e',
            700: '#4cb78b',
            800: '#87cfb1',
            900: '#c3e7d8'
          },
          evergreen: {
            DEFAULT: '#081c15',
            100: '#020604',
            200: '#030b08',
            300: '#05110d',
            400: '#061611',
            500: '#081c15',
            600: '#1d664c',
            700: '#32b084',
            800: '#6bd5b0',
            900: '#b5ead8'
          }
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#0F172A',
        },
        text: {
          primary: '#64748B',
          secondary: '#F4F4F4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 15px #00f0ff' },
          '100%': { boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00f0ff' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '20px 20px',
      },
    },
  },
  plugins: [],
};
