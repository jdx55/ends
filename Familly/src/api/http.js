import request from './request.js'

const http = {
	post(url, params) {
		const config = {
			method: 'post',
			url: url,
			params: params
		}
		if(params) config.data = params
		return request(config)
	},
	
	get(url, params) {
		const config = {
			method: 'get',
			url: url
		}
		// console.log(config.url)
		if(params) config.data = params
		return request(config)
	},
	
	put(url, params) {
		const config = {
			method: 'put',
			url: url
		}
		if(params) config.data = params
		return request(config)
	},
	
	delete(url, params) {
		const config = {
			method: 'delete',
			url: url
		}
		if(params) config.data = params
		return request(config)
	}
}
// console.log(http.get());
export default http;