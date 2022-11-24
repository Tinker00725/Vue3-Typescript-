module.exports = {
  configureWebpack:{
    devServer:{
      open:true,
      proxy:{
        '/api':{
          target:'http://1.116.64.64:5004/',
          changeOrigin:true,
        }
      }
    }
  }
}