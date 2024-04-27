import {createRouter,createWebHashHistory} from 'vue-router'
// 1.新的页面导入进来
import Home from '../views/Home.vue'
// 2.写路由的地方

const routes = [
	{
		path: '/',
		name: 'home',
		redirect: '/index',
		component: Home,
		meta: {
			requireAuth: true
		},
		children : [
			{
				path: '/index',
				name: 'index',
				component: () => import('../components/index.vue')
			},
			{
				path: '/user',
				name: 'user',
				component: () => import('../components/user.vue')
			},
			{
				path: '/arrange',
				name: 'arrange',
				component: () => import('../components/arrange.vue')
			},
			{
				path: '/test',
				name: 'test',
				component: () => import('../components/test.vue')
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/Register.vue')
	}
]
const router = createRouter({
    //  3.内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes // `routes: routes` 的缩写
  });
  
export default router;
