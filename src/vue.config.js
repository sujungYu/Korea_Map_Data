
module.exports = {
    devServer: {
      proxy: {
        '/':{
          "target": 'http://openapi.molit.go.kr:8080',
          "pathRewrite": {'^/':''},
          "changeOrigin": true,
          "secure": false
        }
      }
    },
  }