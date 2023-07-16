<script lang="ts">

import Instagram from '@/components/icons/Instagram.vue'
import GitHub from '@/components/icons/GitHub.vue'
import Twitter from '@/components/icons/Twitter.vue'
import Spotify from '@/components/icons/Spotify.vue'
import Twitch from '@/components/icons/Twitch.vue'

export default {
    props: {
        name: String,
        rank: String,
        img: String,
        ttv: String,
        github: String,
        twitter: String,
        insta: String,
        spotify: String
    },
    components: {
        Instagram,
        GitHub,
        Twitter,
        Spotify,
        Twitch
    },
}

</script>

<template>
    <div class="text-center text-gray-500 dark:text-gray-400">
        <img class="mx-auto mb-4 w-36 h-36 rounded-full" alt="Avatar" :src="img">
        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">{{ name }}</a>
        </h3>
        <p>{{ rank }}</p>
        <ul class="flex justify-center mt-4 space-x-4">
            <li v-if="ttv != '' && ttv != null">
                <a :href="ttv" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <Twitch></Twitch>
                </a>
            </li>
            <li v-if="github != '' && github != null">
                <a :href="github" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <GitHub></GitHub>
                </a>
            </li>
            <li v-if="twitter != '' && twitter != null">
                <a :href="twitter" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <Twitter></Twitter>
                </a>
            </li>
            <li v-if="insta != '' && insta != null">
                <a :href="insta" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <Instagram></Instagram>
                </a>
            </li>
            <li v-if="spotify != '' && spotify != null">
                <a :href="spotify" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <Spotify></Spotify>
                </a>
            </li>
        </ul>
    </div>
</template>