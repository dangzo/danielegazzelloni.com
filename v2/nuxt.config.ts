module.exports = {
  mode: 'universal',
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Daniele Gazzelloni - Front-end developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
          name: 'keywords',
          content: `
            front-end developer, daniele gazzelloni, nuxt, vue, vuex, vuetify, react, redux, node.js,
            full-stack, spa, web applications
          `,
      },
      {
        hid: 'description',
        name: 'description',
        content: `
          Daniele Gazzelloni: front-end developer. SPA, web applications. Vue, Vuex, Nuxt, Vuetify.
          React, Redux. Node.js, full-stack background.
        `,
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Raleway:600,800&display=swap'
      },
    ]
  },
  // Global css files
  css: [
    './assets/styles/reset.scss',
    './assets/styles/bulma.scss',
    './assets/styles/transitions.scss',
    './assets/styles/theme.scss'
  ],
  // To load shared scss files without the need of @import in every Vue component
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      './assets/styles/variables.scss'
    ]
  },
  buildModules: [
    // To link scss files
    '@nuxtjs/stylelint-module',
  ],
  /*
  ** Progress bar color set as primary color
  */
  loading: { color: '#08fdd8' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config: any, { isDev, isClient }: { isDev: boolean, isClient: boolean }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
