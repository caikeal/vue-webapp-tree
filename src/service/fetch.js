import axios from 'axios';
import env from '../config/env.js';
import { readLocal } from '../utils/localstorage.js';
import { MessageBox } from 'mint-ui';
import store from '../store';
import router from '../router';

/**
 * 接口调用类参数统一配置.
 */
axios.defaults.baseURL = env.baseUrl;
axios.defaults.timeout = 8000;

// request拦截器
axios.interceptors.request.use(
	config => {
		// Do something before request is sent
		let user = readLocal('user');
		if (user && user.token) {
			config.headers['Authorization'] = `Bearer ${user.token}`; // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
		}
		return config;
	},
	error => {
		// Do something with request error
		if (env.debug) {
			console.info('发起请求失败！');
			console.log(error); // for debug
		}
		return Promise.reject(error);
	}
);

// respone拦截器
axios.interceptors.response.use(
	response => response,
	error => {
		if (env.debug) {
			console.info(`返回值错误信息！(${error.response.data.code})`);
			console.log(error);// for debug
		}
		/**
		 * 应对不同的错误code码处理，一些公共的业务逻辑
		 */
		if (error.response.status === 500) {
			MessageBox.alert('系统出错了！', '提示');
		} else if (error.response.status === 401 && error.response.data.code !== '401001') {
			MessageBox.alert('请登录！', '提示').then(() => {
				// 返回登录页面
				// 登出
				store.dispatch('fedLogout')
				.then(() => {
					router.push({ name: 'Login' });
				})
				.catch(error => {
					if (env.debug) {
						console.info('退出时错误！');
						console.log(error); // for debug
					}
				});
			});
		} else if (error.response.status === 0) {
			MessageBox.alert('网络错误！', '提示');
		} else {
			MessageBox.alert(error.response.data.message, '提示');
		}
		return Promise.reject(error);
	}
);

export default axios;
