import { createWebHistory, createRouter } from "vue-router"
import { type RouteRecordRaw } from "vue-router"

import App from "./App.vue"

import HomeVue from '@/views/Home.vue'
import AboutVue from '@/views/About.vue'
import NotFoundVue from '@/views/404.vue';
import AuthorizeVue from '@/views/Authorize.vue'
import RedirectVue from '@/views/Redirect.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/', 
        component: HomeVue
    },
    {
        path: '/about',
        component: AboutVue
    },
    {
        path: '/authorize',
        redirect(to) {
            window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1108073196667801601&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fcallback&response_type=code&scope=identify';
            return '/redirect'
        },
    },
    {
        path: '/redirect',
        component: RedirectVue
    },
    {
        path: '/callback',
        component: AuthorizeVue
    },


    {
        path: '/:pathMatch(.*)*',
        component: NotFoundVue
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;