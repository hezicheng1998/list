import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: "/About"
}, {
  path: '/About',
  component: () => import('@/views/About')
}, {
  path: '/Home',
  component: () => import('@/views/Home')
}, {
  path: '/Login',
  component: () => import('@/views/Login')
}, {
  path: '/Search',
  component: () => import('@/views/Search')
}, {
  path: '/Recommended',
  component: () => import('@/views/Recommended')
}, {
  path: '/Singer',
  component: () => import('@/views/Singer')
}, {
  path: '/Alter',
  component: () => import('@/views/Alter')
}, {
  path: '/Register',
  component: () => import('@/views/Register')
}, {
  path: '/Seeall',
  component: () => import('@/views/Seeall')
}, {
  path: '/Music',
  component: () => import('@/views/Music')
}, {
  path: '/Skip',
  component: () => import('@/views/Skip')
}]

const router = new VueRouter({
  routes
})

export default router