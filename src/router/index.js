import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Estante from './views/Estante.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/estante',
    name: 'Estante',
    component: Estante
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router