import { createWebHistory, createRouter } from "vue-router"
import { type RouteRecordRaw } from "vue-router"

import App from "./App.vue"

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/404.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/', 
        component: Home 
    },

    {
        path: '/about',
        component: About
    },

    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;