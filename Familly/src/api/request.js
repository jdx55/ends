// 请求拦截
import axios from 'axios'
// 创建axios实例
const service = axios.create({
	baseURL: 'http://localhost:8888'
});
// console.log(service);

export default service;