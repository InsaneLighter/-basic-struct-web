import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // 路由页面不会刷新 url中包含#
  // mode: 'hash',
  // 路由页面会刷新 url中包含# 后端异常会直接报错
  mode: 'history',
  // 页面跳转之后返回页面滚动重新置顶
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
