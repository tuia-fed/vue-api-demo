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
    path: '/directive/1',
    name: 'directive_1',
    component: () => import(/* webpackChunkName: "directive_1" */ '../views/directive/1.vue')
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
  },
  {
    path: '/observable/1',
    name: 'observable_1',
    component: () => import(/* webpackChunkName: "observable_1" */ '../views/observable/1.vue')
  },
  {
    path: '/observable/2',
    name: 'observable_2',
    component: () => import(/* webpackChunkName: "observable_2" */ '../views/observable/2.vue')
  },
  {
    path: '/vuedelete/1',
    name: 'vueDelete_1',
    component: () => import(/* webpackChunkName: "vueDelete_1" */ '../views/vueDelete/1.vue')
  },
  {
    path: '/vueset/1',
    name: 'vueSet_1',
    component: () => import(/* webpackChunkName: "vueSet_1" */ '../views/vueSet/1.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
