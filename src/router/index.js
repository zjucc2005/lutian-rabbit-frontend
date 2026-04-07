import { createRouter, createWebHistory } from 'vue-router'
import settings from '@/settings'
import Layout from '@/layout/index.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/login/index.vue'

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
                    meta: { title: 'Dashboard' }
                },
                { 
                    path: 'commodity_price',
                    name: 'commodity_price',
                    component: () => import('../views/user/index.vue'),
                    meta: { title: '大宗价格表', breadcrumb: ['核价管理', '大宗价格表'] }
                },
                { 
                    path: 'unit_price',
                    name: 'unit_price',
                    component: () => import('../views/user/index.vue'),
                    meta: { title: '实时单价表', breadcrumb: ['核价管理', '实时单价表'] }
                },
                { 
                    path: 'user',
                    name: 'user',
                    component: () => import('../views/user/index.vue'),
                    meta: { title: '用户', breadcrumb: ['系统设置', '用户'] }
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

// navigation guard
router.beforeEach((to, from) => {
    // set title
    document.title = to.meta.title ? `${settings.defaultTitle} | ${to.meta.title}` : settings.defaultTitle
    let isAuth = false
    let userInfo = JSON.parse(localStorage.getItem('userInfo')) 
    if (userInfo?.username == 'admin') isAuth = true
    // auth logged in
    if (to.name != 'login' && !isAuth) {
        return { name: 'login' }
    } else {
        return
    }
})

export default router
