// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default/index.vue'
// import VueScrollTo from 'vue-scrollto'
// import VueFuse from 'vue-fuse'
import setupAnalytics from './services/analytics'

const REFERRAL_COOKIE_AGE = 3 * 24 * 60 * 60 // three days
const REFERRAL_COOKIE_KEY = 'friend_referral_code'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.prototype.$log = console.log.bind(console)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Vue.use(VueScrollTo, {
  //   duration: 500,
  //   easing: 'ease',
  // })

  // Vue.use(VueFuse)

  const addMeta = (key, value) =>
    head.meta.push({
      name: key,
      property: key,
      content: value,
    })

  addMeta('keywords', 'Japan Rabbit,Japan,proxy,buying')

  // TODO this should be provided for each page when more content is added, not globally
  addMeta('og:url', 'https://japanrabbit.com')
  addMeta('og:locale', 'en')
  addMeta('og:title', 'Japan Rabbit | Proxy-buying from Japan')
  addMeta(
    'og:description',
    'Pioneers of proxy-buying from Japan. We treat everyone like a VIP. Innovative, customer-focused, and honest. Shop any Japanese store, simple and easy.'
  )

  addMeta('og:image', 'https://japanrabbit.com/img/japanrabbit-sns.png')
  addMeta(
    'og:image:secure_url',
    'https://japanrabbit.com/img/japanrabbit-sns.png'
  )
  addMeta('og:image:alt', 'Japan Rabbit: Proxy-buying from Japan')
  addMeta('og:image:width', '1200')
  addMeta('og:image:height', '630')

  head.bodyAttrs = { class: 'bg-gray' }

  if (isClient) {
    setupAnalytics(Vue, router)

    // Set referral cookie if available
    router.beforeEach((to, from, next) => {
      const { ref } = to.query || {}
      if (ref) {
        const domain =
          process.env.NODE_ENV === 'development' ? '' : 'domain=japanrabbit.com'
        document.cookie = `${REFERRAL_COOKIE_KEY}=${ref}; max-age=${REFERRAL_COOKIE_AGE}; path=/; ${domain}`
      }

      next()
    })
  }

  if (process.env.NODE_ENV === 'development') {
    // Import languages here in development
    // for HOT MODULE RELOAD
    const { SUPPORTED_LOCALES } = require('./i18n/locales')
    for (const locale of SUPPORTED_LOCALES)
      appOptions.i18n.setLocaleMessage(
        locale,
        require(`./i18n/translations/${locale}.yml`)
      )
  }
}
