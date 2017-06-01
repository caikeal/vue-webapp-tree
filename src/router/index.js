import Vue from 'vue';
import Router from 'vue-router';

const login = r => require.ensure([], () => r(require('../view/login/login.vue')), 'login');

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Login',
			component: login,
			meta: {
				title: '登录',
				workType: 'S'
			}
		}
	]
});
