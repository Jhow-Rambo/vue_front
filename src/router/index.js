import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login.vue'
import loged from '../views/loged.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/loged',
    name: 'loged',
    component: loged
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
