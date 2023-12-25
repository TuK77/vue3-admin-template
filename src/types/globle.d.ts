declare module 'js-cookie';
declare module 'qs';

declare interface Login {
	userName: string;
	password: string;
}

declare interface RouteItem {
	name: string;
	path: string;
	icon?: string;
	children?: Array<RouteItem>;
}
