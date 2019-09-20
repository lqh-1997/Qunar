const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@css', resolve('src/assets/css'))
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    https: false,

    open: false,

    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
