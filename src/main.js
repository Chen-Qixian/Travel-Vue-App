import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'// 解决不同浏览器样式统一适配问题
import 'styles/border.css'// 解决1px边框在2dpr和3dpr上像素重叠问题
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 解决移动端300ms延迟问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app', // 接管index.html中id为app的dom
  router, // 获取路由，ES6写法等价于{router: router}
  components: { App }, // 应用组件 {App: App}
  template: '<App/>'
})
