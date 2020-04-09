module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [
      { src: '/assets/vendor/jquery/jquery.min.js' },
      { src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js' },
      { src: '/assets/vendor/jquery.easing/jquery.easing.min.js' },
      { src: '/assets/vendor/php-email-form/validate.js' },
      { src: '/assets/vendor/owl.carousel/owl.carousel.min.js' },
      { src: '/assets/vendor/isotope-layout/isotope.pkgd.min.js' },
      { src: '/assets/vendor/venobox/venobox.min.js' },
      { src: '/assets/vendor/aos/aos.js' },
      { src: '/assets/js/main.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/assets/vendor/icofont/icofont.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/assets/vendor/boxicons/css/boxicons.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/assets/vendor/owl.carousel/assets/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/assets/vendor/venobox/venobox.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/assets/vendor/aos/aos.css'
      }
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
    '~/assets/css/style.css',
    '~/assets/vendor/bootstrap/css/bootstrap.min.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vee-validate.js', '~plugins/filters.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
