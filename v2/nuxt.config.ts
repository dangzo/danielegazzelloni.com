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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // To load shared scss files without the need of @import in every Vue component
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
   // your settings here
   scss: './assets/styles/bulma.scss'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
