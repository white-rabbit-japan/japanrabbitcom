// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { pathPrefix } = require('./gridsome.config')

module.exports = function (api, options) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/404',
      component: './src/templates/404.vue',
    })

    createPage({
      path: '/',
      component: './src/templates/Home/index.vue',
    })

    createPage({
      path: '/style',
      component: './src/templates/Style/index.vue',
    })
  })

  api.loadSource((store) => {
    /*
    Clean the pathPrefix
    ====================
    not used =>  '/'
    ''       =>  '/'
    '/'      =>  '/'
    '/path'  =>  '/path'
    'path'   =>  '/path'
    'path/'  =>  '/path'
    '/path/' =>  '/path'
    */
    const cleanedPathPrefix = `${
      pathPrefix
        ? ['', ...pathPrefix.split('/').filter((dir) => dir.length)].join('/')
        : ''
    }`

    /*
    Query
    =====
    <static-query>        <!-- or a page-query -->
    {
      metaData{
        pathPrefix
      }
    }
    </static-query>

    Requests for static files should look like this:
    ===============================================
    Using static-queries: axios( this.$static.metadata.pathPrefix + "/fileName" )
    Using page-queries,   axios( this.$page.metadata.pathPrefix   + "/fileName" )
    */
    store.addMetadata('pathPrefix', cleanedPathPrefix)

    store.addMetadata('appUrl', 'https://app.japanrabbit.com')
    store.addMetadata('docsUrl', 'https://support.japanrabbit.com')
  })
}
