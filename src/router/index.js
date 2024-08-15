import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Home from '@/views/home/Home.vue';
import Login from '@/views/login/Login.vue';

// 路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
