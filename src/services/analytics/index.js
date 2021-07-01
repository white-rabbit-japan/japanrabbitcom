import createAnalytics from './setup'

export default function (Vue, router) {
  const { analytics, install } = createAnalytics((track) => ({}), {
    segmentId: process.env.GRIDSOME_SEGMENT_KEY,
    debug: false,
    redirectAnalytics: true,
  })

  Vue.use(install)

  router.afterEach((to, from) => {
    // Make a page call for each navigation event
    // Timeout fixes 'title' being empty for a first time route
    setTimeout(() => {
      analytics.page(to.fullPath)
    })
  })
}
