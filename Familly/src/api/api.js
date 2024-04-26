import http from './http.js'
// 管理员的登录注册-------------------------------------------

// -------个人中心-----------------------------------------------------------
// 用户数据---------------------
export const $users = (params) => {
	return http.get('/users', params);
}
// 删除用户------------------------
export const $delusers = (params) => {
	return http.post('/delusers', params);
}
// 添加用户-------------------------
export const $addusers = (params) => {
	return http.post('/addusers', params);
}
// 修改用户-------------------------
export const $editusers = (params) => {
	return http.post('/editusers', params);
}