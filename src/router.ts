import { createWebHistory, createRouter } from "vue-router"
import { type RouteRecordRaw } from "vue-router"

import App from "./App.vue"

import HomeVue from '@/views/Home.vue'
import AboutVue from '@/views/About.vue'
import NotFoundVue from '@/views/404.vue';
import AuthorizeVue from '@/views/Authorize.vue'
import RedirectVue from '@/views/Redirect.vue'
import TeamVue from '@/views/Team.vue'
import ContactVue from '@/views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
    //Normal Pages
    {
        path: '/', 
        component: HomeVue
    },
    {
        path: '/about',
        component: AboutVue
    },
    {
        path: '/team',
        component: TeamVue
    },
    {
        path: '/contact',
        component: ContactVue
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

    //Redirects
    {
        path: '/discord',
        redirect(to) {
            window.location.href = 'https://discord.gg/7fVXR2g7DG';
            return '/redirect'
        },
    },
    {
        path: '/twitch',
        redirect(to) {
            window.location.href = 'https://twitch.tv/kikiyt90';
            return '/redirect'
        },
    },
    {
        path: '/github',
        redirect(to) {
            window.location.href = 'https://github.com/MaukiNet';
            return '/redirect'
        },
    },
    {
        path: '/youtube',
        redirect(to) {
            window.location.href = 'https://www.youtube.com/@kikiyt';
            return '/redirect'
        },
    },
    {
        path: '/status',
        redirect(to) {
            window.location.href = 'https://maukinet.statuspage.io/';
            return '/redirect'
        },
    },

    //Configuration
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