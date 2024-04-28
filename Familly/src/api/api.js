import http from './http.js'
// 管理员的登录注册-------------------------------------------

// -------个人中心-----------------------------------------------------------
// 用户数据---------------------
export const $users = (params) => {
	return http.get('/users', params);
}
// 删除用户------------------------
export const $delusers = (params) => {
	return http.post('/delarrange', params);
}
// 添加用户-------------------------
export const $addusers = (params) => {
	return http.post('/addusers', params);
}
// 修改用户-------------------------
export const $editusers = (params) => {
	return http.post('/editusers', params);
}
// --------------------------------------
// 用户数据---------------------
export const $arrange = (params) => {
	return http.get('/arrange', params);
}
// 删除用户------------------------
export const $delarrange = (params) => {
	return http.post('/delarrange', params);
}
// 添加用户-------------------------
export const $addarrange = (params) => {
	return http.post('/addarrange', params);
}
// 修改用户-------------------------
export const $editarrange = (params) => {
	return http.post('/editarrange', params);
}
// 角色数据--------------------------------------
// 用户数据---------------------
export const $chacter = (params) => {
	return http.get('/chacter', params);
}
// 删除用户------------------------
export const $delchacter = (params) => {
	return http.post('/delchacter', params);
}
// 添加用户-------------------------
export const $addchacter = (params) => {
	return http.post('/addchacter', params);
}
// 修改用户-------------------------
export const $editchacter = (params) => {
	return http.post('/editchacter', params);
}