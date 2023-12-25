// import request from '@/utils/request';

export const getRoleMenu = () => {
	const menus = [
		{ name: '首页', path: '/index', icon: 'House' },
		{ name: '菜单1', path: '/menu01', icon: 'Star' },
		{ name: '菜单2', path: '/menu02', icon: 'Aim' },
		{ name: '菜单3', path: '/menu03', icon: 'Operation' },
	];
	return Promise.resolve(menus);
};
