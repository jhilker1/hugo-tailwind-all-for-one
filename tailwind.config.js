const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    gridTemplateAreas: {
      mobile: ['header header header', 'main main main', 'footer footer footer'],
      desktop: ['sidebar header header', 'sidebar main main', 'sidebar footer footer'],
    },
    extend: {
        gridTemplateColumns: {
        layout: '0.7fr 2.3fr 1fr',
      },
      gridTemplateRows: {
        layout: '0.2fr 2.6fr 0.2fr',
      },
        fontFamily: {
            header: "'Roboto Slab', serif",
        },

        height: {
          '13': '52px',
          '18': '66px'
        },

        colors: {
          blueGray: colors.blueGray
        },
        typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme('colors.gray.300'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
 variants: {
   gridTemplateAreas: ['responsive'],
   scrollbar: ['dark'],
   extend: {
     typography: ['dark'],
   },
 },

  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
    require('tailwind-scrollbar'),
  ],
}