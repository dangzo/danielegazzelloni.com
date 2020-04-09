module.exports = {
  css: {
    loaderOptions: {
      css: {
        url: true,
        sourceMap: true
      },
      scss: {
        prependData: `@import "~@/assets/styles/index.scss";`
      },
      sass: {
        data: `@import "~@/assets/styles/index.scss";`
      }
    },
    sourceMap: true
  }
}