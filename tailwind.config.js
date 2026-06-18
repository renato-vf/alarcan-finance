/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'af-bg':       '#0f1117',
        'af-bg2':      '#0b0d13',
        'af-surface':  '#161b27',
        'af-surface2': '#1a2030',
        'af-border':   '#1e2535',
        'af-blue':     '#3B82F6',
        'af-blueglow': '#60a5fa',
        'af-green':    '#22C55E',
        'af-red':      '#EF4444',
        'af-yellow':   '#EAB308',
        'af-text':     '#F9FAFB',
        'af-muted':    '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
