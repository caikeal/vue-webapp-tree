/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */
let baseUrl;
let routerMode;
const imgBaseUrl = 'env.js';
const debug = false;
const localStorageName = require('../../package.json').name;

if (process.env.NODE_ENV === 'development') {
	baseUrl = 'http://localhost:8080/api/v1';
	routerMode = 'hash';
} else {
	baseUrl = '';
	routerMode = 'hash';
};

export default {
	baseUrl,
	routerMode,
	imgBaseUrl,
	debug,
	localStorageName
};
