// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const tailwind = require('tailwindcss')
const { DATE_FORMATS } = require('./src/i18n/date-formats')
const { NUMBER_FORMATS } = require('./src/i18n/number-formats')
const {
  SUPPORTED_LANGUAGES,
  FALLBACK_LOCALE,
  DEFAULT_LOCALE,
} = require('./src/i18n/locales')

const postcssPlugins = [tailwind()]

// const japanrabbitUrl =
//   process.env.CONTEXT === 'production'
//     ? 'https://app.japanrabbit.com/api'
//     : 'https://app-staging.japanrabbit.com/api'

// siteDescription = meta description tag.
module.exports = {
  siteName: 'Japan Rabbit',
  siteDescription:
    'Pioneers of proxy-buying from Japan. We treat everyone like a VIP. Innovative, customer-focused, and honest. Shop any Japanese store, simple and easy.',
  siteUrl: 'https://japanrabbit.com',
  plugins: [
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: SUPPORTED_LANGUAGES.map((l) => l.locale),
        pathAliases: SUPPORTED_LANGUAGES.reduce(
          (acc, l) => ({ ...acc, [l.locale]: l.path }),
          {}
        ),
        defaultLocale: DEFAULT_LOCALE,
        fallbackLocale: FALLBACK_LOCALE,
        enablePathRewrite: true, // rewrite path with locale prefix
        rewriteDefaultLanguage: false, // rewrite default locale
        dateTimeFormats: DATE_FORMATS,
        numberFormats: NUMBER_FORMATS,
        messages: SUPPORTED_LANGUAGES.reduce(
          (acc, l) => ({
            ...acc,
            [l.locale]: yaml.safeLoad(
              // @ts-ignore
              fs.readFileSync(
                path.resolve(`./src/i18n/translations/${l.locale}.yml`)
              )
            ),
          }),
          {}
        ),
      },
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'content/**/*.md',
    //     typeName: 'Doc',
    //     route: '/:slug',
    //   },
    // },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/en/', '/en/*'],
        cacheTime: 600_000, // default
      },
    },
    // {
    //   use: '@gridsome/source-graphql',
    //   options: {
    //     url: japanrabbitUrl,
    //     // process.env.NODE_ENV === 'development'
    //     //   ? 'http://localhost:4030'
    //     //   : japanrabbitUrl,
    //     fieldName: 'japanrabbit',
    //     typeName: 'jr',

    //     // headers: {
    //     //   Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    //     // },
    //   },
    // },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      })

    config.module
      .rule('yml')
      .test(/\.ya?ml$/)
      .resourceQuery(/stream/)
      .use('yaml-loader')
      .loader('yaml-loader')
      .options({
        asStream: true,
      })
  },
}
