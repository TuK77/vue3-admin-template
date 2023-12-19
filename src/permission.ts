import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router/index';

router.beforeEach(async (to, from, next) => {
  NProgress.configure({ showSpinner: false });
  const token = '';
  if (to.path === '/login' && !token) {
    next();
		NProgress.done();
  } else {
    if (!token) {
      next(`/login`);
      NProgress.done();
    } else if (token && to.path === '/login') {
      next('/index');
    } else {
      next();
    }
  }
});