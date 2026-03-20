import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/login/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/layout',
            name: 'layout',
            component: Layout
        },
        {
            path: '/',
            name: 'home',
            redirect: '/dashboard',
            component: Layout,
            children: [
                { 
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('../views/dashboard/index.vue'),
                    meta: { title: 'dashboard' }
                },
                { 
                    path: 'commodity_price',
                    name: 'commodity_price',
                    component: () => import('../views/HomeView.vue'),
                    meta: { title: 'commodity_price' }
                },
                { 
                    path: 'unit_price',
                    name: 'unit_price',
                    component: () => import('../views/user/index.vue'),
                    meta: { title: 'unit_price' }
                },
                { 
                    path: 'user',
                    name: 'user',
                    component: () => import('../views/user/index.vue'),
                    meta: { title: 'user' }
                },
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
    ],
})

export default router
