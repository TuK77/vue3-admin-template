import { createRouter, createWebHashHistory } from 'vue-router';
import { staticRoutes, notFoundAndNoPower } from '@/router/route';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes, ...notFoundAndNoPower]
});

export default router;