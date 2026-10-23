/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          deep: '#070C18',       /* Deep cosmic space background */
          dark: '#0B1120',       /* Navy slate dark surface */
          surface: '#111C31',    /* Elevated panel surface */
          card: '#152035',       /* Rich slate card */
          cardHover: '#1B2945',  /* Hover card surface */
          border: '#1E293B',     /* Subtle slate border */
          accent: '#06B6D4',     /* Tech electric cyan / teal */
          accentHover: '#0891B2',/* Darker teal */
          accentLight: '#22D3EE',/* Bright electric cyan */
          blue: '#3B82F6',       /* Vibrant tech blue */
          indigo: '#6366F1',     /* Electric indigo */
          gold: '#F59E0B',       /* Premium conversion gold */
          goldLight: '#FBBF24',
          muted: '#94A3B8',      /* Soft gray body text */
          silver: '#CBD5E1',     /* High contrast body text */
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'glow-blue': '0 0 35px -5px rgba(59, 130, 246, 0.25)',
        'glow-gold': '0 0 35px -5px rgba(245, 158, 11, 0.25)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
