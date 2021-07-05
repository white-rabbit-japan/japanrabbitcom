const breakpoints = {
  xs: '374px',
  sm: '640px',
  md: '768px',
  lg: '960px',
  xl: '1190px',
  xxl: '1440px',
}

module.exports = {
  // mode: 'jit',
  corePlugins: { container: false },
  breakpoints,
  theme: {
    extend: {
      fontSize: {
        'xl+': '1.375rem',
        '4xl+': '2.5rem',
      },
      maxWidth: {
        48: '12rem',
        80: '20rem',
      },
    },
    colors: {
      black: '#000',
      white: '#fff',
      primary: {
        DEFAULT: '#E32C1B',
        soft: '#F64934',
      },
      success: {
        DEFAULT: '#06B53C',
      },
      transparent: 'transparent',
      blackship: '#af75dd', // Blackship primary
      gray: {
        soft: '#F6F6F6',
        DEFAULT: '#EBEBEB',
        strong: '#55555B',
      },
    },
    screens: {
      smUp: { max: breakpoints.xs },
      mdUp: { min: breakpoints.sm },
      lgUp: { min: breakpoints.md },
      xlUp: { min: breakpoints.lg },
      xxlUp: { min: breakpoints.xl },
      xxxlUp: { min: breakpoints.xxl },

      xxlDown: { max: breakpoints.xxl },
      xlDown: { max: breakpoints.xl },
      lgDown: { max: breakpoints.lg },
      mdDown: { max: breakpoints.md },
      smDown: { max: breakpoints.sm },

      xxl: { max: breakpoints.xxl, min: breakpoints.xl },
      xl: { max: breakpoints.xl, min: breakpoints.lg },
      lg: { max: breakpoints.lg, min: breakpoints.md },
      md: { max: breakpoints.md, min: breakpoints.sm },
      sm: { max: breakpoints.sm, min: breakpoints.xs },
      xs: { max: breakpoints.xs }, // xs ONLY
    },
    fontFamily: {
      sans: [
        'proxima-nova',
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
        'Proxima Nova',
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
        /^fa-/,
        /-fa$/,
      ],
    },
  },
}
