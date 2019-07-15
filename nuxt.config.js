import glob from 'glob-all';
import {join} from 'path';
import pkg from './package.json';
import PurgecssPlugin from 'purgecss-webpack-plugin';

module.exports = {
  mode: 'universal',

  /*
  ** Environment variables
  */
  env: {
    consumerKey:         process.env.NODE_ENV !== 'production' ? (process.env.LOCAL_CONSUMER_KEY ? process.env.LOCAL_CONSUMER_KEY : process.env.DEV_CONSUMER_KEY) : process.env.CONSUMER_KEY,
    consumerSecret:      process.env.NODE_ENV !== 'production' ? (process.env.LOCAL_CONSUMER_SECRET ? process.env.LOCAL_CONSUMER_SECRET : process.env.DEV_CONSUMER_SECRET) : process.env.CONSUMER_SECRET,
    accessToken:         process.env.NODE_ENV !== 'production' ? (process.env.LOCAL_ACCESS_TOKEN ? process.env.LOCAL_ACCESS_TOKEN : process.env.DEV_ACCESS_TOKEN) : process.env.ACCESS_TOKEN,
    accessTokenSecret:   process.env.NODE_ENV !== 'production' ? (process.env.LOCAL_ACCESS_TOKEN_SECRET ? process.env.LOCAL_ACCESS_TOKEN_SECRET : process.env.DEV_ACCESS_TOKEN_SECRET) : process.env.ACCESS_TOKEN_SECRET
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
    '~/assets/css/tailwind.css',
    '~/assets/css/components/components.scss',
    '~/assets/css/pages/index.scss'
  ],

  styleResources: {
    scss: [
      '~/assets/css/settings.scss'
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/style-resources',
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
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js')
      }
    },

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
      };

      if(!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              join(__dirname, './pages/**/*.vue'),
              join(__dirname, './layouts/**/*.vue'),
              join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      };

      config.node = {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      };
    }
  }
}
