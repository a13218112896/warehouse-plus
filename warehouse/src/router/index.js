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
		},
		{
			name: '/warehousing',
			path: '/warehousing',
			component: () => import('../views/warehousing/Warehousing.vue')
		},
		{
			name: '/screen',
			path: '/screen',
			component: () => import('../views/screen/Screen.vue')
		}
	]
})
export default router