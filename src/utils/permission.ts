import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router/index';
import { getToken } from '@/utils/auth';

router.beforeEach(async (to, from, next) => {
  NProgress.configure({ showSpinner: false });
  const token = getToken();
  if (to.path === '/login' && !token) {
    next();
		NProgress.done();
  } else {
    if (!token) {
      next(`/login`);
      NProgress.done();
    } else if (token && to.path === '/login') {
      next('/index');
      NProgress.done();
    } else {
      next();
    }
  }
});