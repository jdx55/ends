import { defineStore } from 'pinia'
import { $users,$arrange,$chacter } from '../api/api.js'

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
// 料理信息-------------------------------------------------------
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
// 角色信息-------------------------------------------------------
export const useStorerole = defineStore('chacter', {
	state: () => {
		return {
			list: []
		}
	},
	actions: {
		async asyncGetChacter() {
			//获取数据
			await $chacter().then((res) => {
				var _list = res.data.list;
				this.list = _list;
			}).catch(err => console.log('Error: ' + err));
		}
	}
});


