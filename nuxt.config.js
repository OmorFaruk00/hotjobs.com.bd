const https = require('https');
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {

    htmlAttrs: {
      lang: 'en',
    },

    title: 'Hot Jobs BD | Free jobs site in Bangladesh. Search & Post Jobs Free',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'hotjobs.com.bd is one of the most trusted online source for job opportunities. Apply for your desired job, get career advice and improve your skill through training'
      },
      {name: 'keywords', content: 'Hot Jobs BD'},
      {name: 'author', content: 'Hot Jobs BD'},
    ],

    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon.png'},
      {rel: 'stylesheet', id: 'bootstrap-style', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/css/icons.min.css'},
      {rel: 'stylesheet', href: '/css/app.min.css'},
      // {rel: 'stylesheet', href: '/bootstrap-select/dist/css/bootstrap-select.min.css'},
      {rel: 'stylesheet', href: '/css/style.css'},
      // {rel: 'stylesheet', href: '/css/min_style.css'},
      // {rel: 'stylesheet', href: '/css/responsive.css'},
      {rel: 'stylesheet', href: '/css/min_responsive.css'},
    ],

    script: [
      {src: '/libs/jquery/jquery.min.js'},
      {src: '/libs/bootstrap/js/bootstrap.bundle.min.js'},
      {src: '/js/facebook.js'},
      // {src: '/bootstrap-select/dist/js/bootstrap-select.min.js'},
      {src: '/libs/metismenu/metisMenu.min.js'},
      {src: '/libs/simplebar/simplebar.min.js'},
      // {src: '/libs/node-waves/waves.min.js'},
      // {src: '/js/pages/dashboard.init.js'},
      {src: '/js/app.js'},
    ],
  },
  /*
  ** Global CSS
  */
  css: ['@/assets/style/style.css'],

  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: '@/plugins/datepicker.js', ssr: false},
    {src: '@/plugins/owl.js', ssr: false},
    {src: '@/plugins/vueBootstrap.js'},
    {src: '@/plugins/scrollTo.js'},
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'nuxt-moment',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    ['nuxt-gmaps', {
      key: 'AIzaSyBU8GPGJ8ihYBpfMRnbCOsVZJlyvWafPq4',
      //you can use libraries: ['places']
    }],
    ['nuxt-imagemin', {
      optipng: {optimizationLevel: 5},
      gifsicle: {optimizationLevel: 2}
    }],
  ],

  // sitemap
  sitemap: {
    hostname: "https://hotjobs.com.bd/",
    gzip: true,
    // exclude: ["/secret", "/admin/**"]
  },

  // https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap:"https://hotjobs.com.bd/sitemap.xml"
  },

  // axios
  axios: {
    init(axios, context) {
      axios.defaults.httpAgent = new http.Agent({rejectUnauthorized: false});
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    // baseURL: 'http://localhost:8000/',
    baseURL: 'https://api.hotjobs.com.bd/',
    proxyHeaders: false,
    credentials: false,
  },

  /*../
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},

  /*
  **loading color customize
  **loading height customize
   */
  loading: {
    color: '#EC1A3A',
    height: '3px'
  },

}
