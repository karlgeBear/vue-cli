// vue.config.js
const path = require('path')
module.exports = { // 只能写vue封装的配置
  runtimeCompiler: true, //配置vue带编译器的版本
  lintOnSave: false, // 关闭Eslint规则
  publicPath:"./", //用法和webpack本身的output.publickPath用法一致


  configureWebpack: { // 内部写webpack原生配置
    resolve: {
      /* 
      1.简化模块路径
      2.加快打包速度
      */
      extensions: ['.js', '.vue', 'json'], //指定那些后缀的模块可以省略后缀
      alias: { //模块路径别名
        //'@': path.resolve(__dirname, 'src'),
        //'vue$': 'vue/dist/vue.esm.js',  //表示精准匹配  带vue编译器
        'components': path.resolve(__dirname, 'src/components'),
        'common':path.resolve('src/common')
      }
    }
  },

  devServer: {
    proxy: { // http://localhost:3000/api
      //'/api': 'http://localhost:4000'    //==> http://localhost:4000/api/xxx
      '/api': { //匹配处理以/api开头的请求
        target: 'http://localhost:4000', //转发的目标地址
        pathRewrite: {
          '^/api': ''
        }, //在转发请求前去除路径中/api  //htpp://localhost:4000/xxx
        changeOrigin: true //支持跨域，如果协议/主机也不相同，必须加上
      },

      //可匹配多个服务器
      '/3000': { //匹配处理以/3000开头的请求
        target: 'http://localhost:3000', //转发的目标地址
        pathRewrite: {
          '^/api': ''
        }, //在转发请求前去除路径中/3000  
        changeOrigin: true //支持协议名的跨域
      }
    },
  }
}