import { defineStore } from 'pinia';

export const useMenu = defineStore('menu', {
	state: (): Menu => ({
		menuList: [],
	}),
	actions: {
		setMenuList(data: Array<RouteItem>) {
			this.menuList = data;
		},
	},
});
 