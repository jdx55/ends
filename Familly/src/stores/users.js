import { defineStore } from 'pinia'
import { $users,$arrange } from '../api/api.js'

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

export const useStorearr = defineStore('arrange', {
	state: () => {
		return {
			list: []
		}
	},
	actions: {
		async asyncGetArrange() {
			//获取数据
			await $arrange().then((res) => {
				var _list = res.data.list;
				this.list = _list;
			}).catch(err => console.log('Error: ' + err));
		}
	}
});


