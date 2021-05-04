import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [

  {
    path: '/importadores',
    name: 'Home',
    component: () =>  import('../views/importadores/MainHome.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '',
    redirect:'/importadores'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
