import { defineStore } from 'pinia'
import { $users } from '../api/api.js'

export const useStore = defineStore('users', {
	state: () => {
		return {
			list: []
		}
	},
	actions: {
		async asyncGetUsers() {
			//获取数据
			await $users().then((res) => {
				var _list = res.data.list;
				this.list = _list;
			}).catch(err => console.log('Error: ' + err));
		}
	}
});


