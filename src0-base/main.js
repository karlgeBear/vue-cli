import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* new Vue({
  // components: {  //注册组件(后面才能磁写组件标签)
  //   App:App
  // },
  // template:'<App/>'

  // vue的包是不需要带编译器的，整体的打包文件更小
  // 创建的App的组件对象返回，最终会被渲染发页面
  render: createElement => createElement(App),
}).$mount('#app') */

// 此方法需要到vue编译器的版本(在vue配置runtimeCompiler为true即可)
new Vue({
  el: '#app',
  components:{
    App:App
  },
  template: '<App/>'
})
