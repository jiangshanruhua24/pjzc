module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.1.12:30001",
        pathRewrite: { "^/api": "" }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": "src",
        'components': '@/components',
        'assets': '@/assets',
        'request': '@/request',
        'views': '@/views',
      }
    }
  }
}
