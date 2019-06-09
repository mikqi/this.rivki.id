module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Muhammad Rivki',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'google-site-verification',
        content: '0EwAgA6z9K0d-KmQ103WbSwl6CvBLa1rj0Ghfc8rrMY'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'Hello Mikqi' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Hello, i'm Muhammad Rivki. A Front-End Engineer currently living in Jakarta, Indonesia"
      },
      { property: 'og:title', content: 'Online Portfolio of Muhammad Rivki' },
      { property: 'og:url', content: 'http://this.rivki.id' },
      {
        property: 'og:descrition',
        content:
          'Muhammad Rivki, a Front-End Engineer from Jakarta, Indonesia. who loves simplicity, create great looking web products and performance first.'
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:site_name',
        content: 'Muhammad Rivki - Front-End Engineer | Jakarta, Indonesia'
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@__mikqi' },
      { property: 'twitter:creator', content: '@__mikqi' },
      {
        property: 'twitter:title',
        content: 'Online Portfolio of Muhammad Rivki'
      },
      {
        property: 'twitter:description',
        content:
          'Muhammad Rivki, a Front-End Engineer from Jakarta, Indonesia. who loves simplicity, create great looking web products and performance first.'
      },
      { rel: 'alternate', href: 'http://this.rivki.id', hreflang: 'en-ID' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:300,400&display=swap'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fee994' },

  /*
  ** Global CSS
  */
  css: [
    {
      src: '@/assets/styles/index.scss',
      lang: 'scss'
    },
    '@/assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-101975024-1'
      }
    ]
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://this.rivki.id',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    exclude: ['/typing']
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  manifest: {
    theme_color: '#fee994'
  }
}
