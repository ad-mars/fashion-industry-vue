import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Catalog from '@/views/Catalog.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
