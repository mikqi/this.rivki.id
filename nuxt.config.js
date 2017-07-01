module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['velocity-animate']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:700|Poppins'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'http://zeptojs.com/zepto.min.js'
      }
    ]
  },
  css: [
    {
      src: '~assets/scss/skeleton.scss',
      lang: 'scss'
    },
    '~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2199e8' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#2199e8'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}
