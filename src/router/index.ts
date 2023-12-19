import { createRouter, createWebHistory } from 'vue-router';
import { constantRoutes, errorPageRoutes } from '@/router/route';

const router = createRouter({
  history: createWebHistory(),
  routes: [...constantRoutes, ...errorPageRoutes]
});

export default router;