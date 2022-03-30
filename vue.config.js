module.exports = {
  css: { /* 转rem */
    loaderOptions: {
      scss: {
        // 这里的选项会传递给 css-loader
        prependData: `@import "~@/assets/scss/base.scss";`
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100
          })
        ]
      }
    }
  },
  devServer: {/* 解决跨域问题 */
    proxy: {
      'api': {
        target: 'http://localhost:7001',
        changeOrigin: true,//跨域访问
        // pathRewrite: {"^/api" : ""}//如果开发项目的时候后端给的请求地址里面没有api的话
        //然后在axios.js里面create里写一个baseURL: '/api'
      }
    }
  },
  configureWebpack: { /* 引入第三方插件,遵循eslent规范 */
    externals: {
      AMap: 'AMap',
      AMapUI: 'AMapUI'
    }
  }
}
