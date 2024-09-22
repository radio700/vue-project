// const { defineConfig } = require('@vue/cli-service')
// chainWebpack: config => {
//   config.module
//     .rule('vue')
//     .use('vue-loader')
//     .loader('vue-loader')
//     .tap(options => {
//       // modify the options...
//       return options
//     })
// }

// module.exports = defineConfig({
//   transpileDependencies: true
// }
//)
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch') // prefetch 삭제 
  }
}