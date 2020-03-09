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
    path: '/extend/1',
    name: 'extend_1',
    component: () => import(/* webpackChunkName: "extend_1" */ '../views/extend/1.vue')
  },
  {
    path: '/extend/2',
    name: 'extend_2',
    component: () => import(/* webpackChunkName: "extend_2" */ '../views/extend/2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
