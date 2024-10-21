import { createRouter, createWebHistory } from 'vue-router'
import { useGuard } from './useGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'oi.main',
      meta: {
        requireAuth: true,
      },
      component: () => import('@/layouts/default.vue'),
      children: [],
    },
    {
      path: '/login',
      name: 'oi.login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

useGuard(router)

export default router
