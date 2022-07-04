import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(),
	routes:[
		{
			path: '/',
			redirect: '/login',
		},
		{
			name: '/login',
			path: '/login',
			component: () => import('../views/login/Login.vue')
		},
		{
			name: '/home',
			path: '/home',
			component: () => import('../views/home/Home.vue')
		}
	]
})
export default router