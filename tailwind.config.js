const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '960px',
  xl: '1190px',
  xxl: '1344px',
}

module.exports = {
  mode: 'jit',
  corePlugins: { container: false },
  breakpoints,
  theme: {
    extend: {
      fontSize: {
        'xl+': '1.375rem',
        '4xl+': '2.5rem',
      },
    },
    colors: {
      black: '#000',
      white: '#fff',
      gray: {
        200: '#cdcdcd',
        300: '#989898',
        400: '#544a64',
        500: '#2e2d3f',
        600: '#3e394c',
        700: '#201e29', // Background
        900: '#191226',
      },
      purple: {
        100: '#f5e8ff', // Body text
        200: '#e1d9f7',
        400: '#af75dd', // Primary
        600: '#9b59b6',
        700: '#8f4baa',
      },
      red: {
        500: '#ee4d4d',
      },
      green: {
        400: '#00c967',
      },
      transparent: 'transparent',
    },
    screens: {
      mdUp: { min: breakpoints.sm },
      lgUp: { min: breakpoints.md },
      xlUp: { min: breakpoints.lg },
      xxlUp: { min: breakpoints.xl },
      xxxlUp: { min: breakpoints.xxl },

      xxlDown: { max: breakpoints.xxl },
      xlDown: { max: breakpoints.xl },
      lgDown: { max: breakpoints.lg },
      mdDown: { max: breakpoints.md },

      xxl: { max: breakpoints.xxl, min: breakpoints.xl },
      xl: { max: breakpoints.xl, min: breakpoints.lg },
      lg: { max: breakpoints.lg, min: breakpoints.md },
      md: { max: breakpoints.md, min: breakpoints.sm },
      sm: { max: breakpoints.sm }, // sm ONLY
    },
    fontFamily: {
      sans: [
        'Open Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      sansTitle: [
        '"Signika"',
        'Open Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      handwriting: [
        'Caveat',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    mode: 'all',
    content: [
      'src/index.html',
      'src/**/*.js',
      'src/**/*.vue',
      'content/**/*.md',
    ],
    options: {
      safelist: [
        'html',
        'body',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        /^fa-/, /-fa$/
      ],
    }
  }
}
