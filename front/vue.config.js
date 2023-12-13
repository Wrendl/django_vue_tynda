module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `@import "@/assets/css/variables.scss";`
      },
    }
  },
  chainWebpack: config => {
    config.entry('app').clear().add('./src/main.js');
  }
}