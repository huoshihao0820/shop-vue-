module.exports = {
  publicPath: './',
  lintOnSave: true,
  configureWebpack: {
      //关闭 webpack 的性能提示
      performance: {
          hints:false
      }
  
  },
  devServer: {
      proxy: {
          '/api': {
              target: 'http://www.myshop.com/',//后端接口地址
              changeOrigin: true,//是否允许跨越
              pathRewrite: {
                  '^/api': '/api'//重写,
              }
          }
      }
  }
}
