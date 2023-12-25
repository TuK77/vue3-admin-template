import { RouteRecordRaw } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [
	{
		name: 'layout',
		path: '/',
		component: () => import('@/layout/index.vue'),
		redirect: '/index',
		children: [
			{
				name: 'index',
				path: 'index',
				component: () => import('@/views/index/index.vue'),
			},
		],
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('@/views/login/index.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('@/views/error/404.vue'),
	},
];
export const errorPageRoutes: Array<RouteRecordRaw> = [];
