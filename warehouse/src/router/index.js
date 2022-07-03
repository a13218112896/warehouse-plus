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
        }
    ]
})
export default router