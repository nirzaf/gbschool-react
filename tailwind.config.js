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
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: '#1E3A8A',  // Deep navy blue
          light: '#2563EB',     // Bright blue
          dark: '#101b43',      // Midnight mirage
          mythical: '#1e2d5b',  // Mythical night
        },
        // Accent Colors
        accent: {
          gold: '#F59E0B',      // Warm gold
          purple: '#7C3AED',    // Royal purple
          emerald: '#059669',   // Fresh green
        },
        // Surface Colors
        surface: {
          light: '#DBEAFE',     // Light blue background
          beach: '#f6f0e8',     // White beach
        },
        // Neutral Colors
        neutral: {
          dark: '#1F2937',      // Dark gray for text/headings
          medium: '#6B7280',    // Medium gray for secondary text
          light: '#F3F4F6',     // Light gray for backgrounds
          toffee: '#cab293',    // Windsor toffee
          gunpowder: '#45485c', // Gun powder
          shadow: '#7b8095',    // Your shadow
          muesli: '#987b52',    // Muesli
        },
        // Semantic Colors
        semantic: {
          success: '#059669',   // Green for positive actions
          warning: '#F59E0B',   // Gold for warnings
          error: '#DC2626',     // Red for errors
          info: '#2563EB',      // Blue for information
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
