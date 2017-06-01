import fetch from './fetch.js';

/**
 * 登录接口.
 * @param  { String } phone     手机号
 * @param  { String } password  密码
 * @return { Promise }
 */
let login = (phone, password) => {
	return fetch.post('/login', {phone: phone, password: password});
};

export default { login };
