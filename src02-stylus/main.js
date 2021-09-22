import Vue from 'vue'  
import App from './App.vue'


Vue.config.productionTip = false
new Vue({
  render: h => h(App),  //渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode(创建DOM节点，插入html)
}).$mount('#app')

console.log('@')