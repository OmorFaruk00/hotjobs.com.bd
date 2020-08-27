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

    title: 'Hot Jobs BD',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Hot Jobs BD'},
    ],

    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'stylesheet', id: 'bootstrap-style', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/css/icons.min.css'},
      {rel: 'stylesheet', href: '/css/app.min.css'},
      {rel: 'stylesheet', href: '/css/app.min.css'},
      {rel: 'stylesheet', href: '/bootstrap-select/dist/css/bootstrap-select.min.css'},
      {rel: 'stylesheet', href: '/css/style.css'},
      {rel: 'stylesheet', href: '/css/responsive.css'},
    ],

    script: [
      {src: '/libs/jquery/jquery.min.js'},
      {src: '/libs/bootstrap/js/bootstrap.bundle.min.js'},
      {src: '/bootstrap-select/dist/js/bootstrap-select.min.js'},
      {src: '/libs/metismenu/metisMenu.min.js'},
      {src: '/libs/simplebar/simplebar.min.js'},
      {src: '/libs/node-waves/waves.min.js'},
      {src: '/js/pages/dashboard.init.js'},
      {src: '/js/app.js'},
    ],
  },
  /*
  ** Global CSS
  */
  css: ['@/assets/style/style.css'],

  transition:{
    name: 'fade',
    mode:'out-in',
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src:'@/plugins/datepicker.js', ssr:false},
    {src:'@/plugins/owl.js', ssr:false},
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
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'nuxt-moment',
    'nuxt-vue-multiselect',
    ['nuxt-gmaps', {
      key: 'AIzaSyBU8GPGJ8ihYBpfMRnbCOsVZJlyvWafPq4',
      //you can use libraries: ['places']
    }]
  ],

  axios: {
    init(axios, context) {
      axios.defaults.httpAgent = new http.Agent({rejectUnauthorized: false});
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    // baseURL: 'http://localhost:8000/',
    baseURL: 'https://api.hotjobs.com.bd/'
  },

  /*
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
