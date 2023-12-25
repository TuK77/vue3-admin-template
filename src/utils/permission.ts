import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { storeToRefs } from 'pinia';
import router from '@/router/index';
import { getToken } from '@/utils/auth';
import { useMenu } from '@/store/menu';
import { getRoleMenu } from '@/api/system/menu';

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
			const menuStore = useMenu();
			const { menuList } = storeToRefs(menuStore);
			if (menuList.value.length === 0) {
				const menuList = await getRoleMenu();
				menuStore.setMenuList(menuList);
			}
			next();
		}
	}
});
