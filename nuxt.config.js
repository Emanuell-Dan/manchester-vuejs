const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Environment variables
  */
 env: {
  consumerKey:         process.env.NODE_ENV !== 'production' ? process.env.LOCAL_CONSUMER_KEY : process.env.CONSUMER_KEY,
  consumerSecret:      process.env.NODE_ENV !== 'production' ? process.env.LOCAL_CONSUMER_SECRET : process.env.CONSUMER_KEY_SECRET,
  accessToken:         process.env.NODE_ENV !== 'production' ? process.env.LOCAL_ACCESS_TOKEN : process.env.ACCESS_TOKEN_SECRET,
	accessTokenSecret:   process.env.NODE_ENV !== 'production' ? process.env.LOCAL_ACCESS_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET
 },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
 plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

  proxy: {
    '/api/': { target: 'https://api.meetup.com/2', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      config.node = {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      };
    }
  }
}
