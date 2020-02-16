import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // 组件的异步加载（按需加载）：不推荐，除非app.js打包后超过1M，进行拆分即可
      // 否则多个HTTP请求会影响性能
      // component: () => import('@/pages/home/Home')
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      // component: () => import('@/pages/city/City')
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      // component: () => import('@/pages/detail/Detail')
      component: Detail
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
