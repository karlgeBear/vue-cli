import Vue from 'vue'  
import 'lib-flexible/flexible'  //自动根据设备情况动态设置rem的值的大小

import App from './App.vue'


Vue.config.productionTip = false
new Vue({
  render: h => h(App),  //渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode(创建DOM节点，插入html)
}).$mount('#app')

console.log('@')