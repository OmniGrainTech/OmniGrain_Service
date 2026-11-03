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
          bg: '#F8FAFC',          /* Crisp snow slate background */
          surface: '#FFFFFF',     /* Pure white card surface */
          surfaceAlt: '#F1F5F9',  /* Soft tinted card surface */
          border: '#E2E8F0',      /* Subtle crisp border */
          borderHover: '#CBD5E1',
          navy: '#0F172A',        /* Rich midnight navy text */
          slate: '#334155',       /* Deep body slate text */
          muted: '#64748B',       /* Subtle subtitle text */
          accent: '#0284C7',      /* Vibrant tech electric cyan-blue */
          accentHover: '#0369A1',
          accentLight: '#E0F2FE', /* Light cyan pill background */
          cyan: '#06B6D4',
          blue: '#2563EB',        /* Trust royal blue */
          blueDark: '#1D4ED8',
          amber: '#F59E0B',       /* High-contrast star & badge gold */
          amberLight: '#FEF3C7',
          emerald: '#10B981',     /* WhatsApp & conversion green */
          emeraldHover: '#059669',
          emeraldLight: '#D1FAE5',
        }
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'clean-md': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'clean-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'clean-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
        'cta-glow': '0 10px 30px -5px rgba(37, 99, 235, 0.35)',
        'whatsapp-glow': '0 10px 30px -5px rgba(16, 185, 129, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
