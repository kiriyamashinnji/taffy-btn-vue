import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/TaffyBtn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/compose',
    name: 'Compose',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Compose.vue')
  },
  {
    path: '/audit',
    name: 'Audit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Audit.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
