<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Instagram from '@/components/Icons/Instagram.vue'
import GitHub from '@/components/Icons/GitHub.vue'
import Twitter from '@/components/Icons/Twitter.vue'
import Spotify from '@/components/Icons/Spotify.vue'
import Twitch from '@/components/Icons/Twitch.vue'

export default {
    components: {
        Navbar,
        Footer,
        Instagram,
        GitHub,
        Twitter,
        Spotify,
        Twitch
    }
}

console.log('%c ACHTUNG! STOP!', ['color: red','display: block','font-size: 50px'].join(';'))
console.log('%c Wenn dir jemand gesagt hat, dass du etwas heraus kopieren sollst/hier einfügen sollst, hast du eine 11/10 Chance, dass du gescammt wirst!', ['font-size: 15px'].join(';'))
console.log('%c Wenn du nicht 100% weißt, was du tust, schließe dieses Fenster!', ['font-size: 15px'].join(';'))
</script>

<template>
    <title>Team - mauki.net</title>
    <Navbar></Navbar>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Das Team</h2>
                <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
            </div> 
            <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="text-center text-gray-500 dark:text-gray-400">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn.discordapp.com/avatars/234765355178917901/6706d060efe5caf93ebb770371a713ab.webp?size=128" alt="Bonnie Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">KikiYT</a>
                    </h3>
                    <p>Creator / Inhaber</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="https://twitch.tv/kikiyt90" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Twitch></Twitch>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/KikiYT90" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <GitHub></GitHub>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/KikiYT90" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Twitter></Twitter>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/kikiyt90/" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <Instagram></Instagram>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/user/kerstingirl90" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Spotify></Spotify>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="text-center text-gray-500 dark:text-gray-400">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn.discordapp.com/avatars/622784776234991626/1f8b78f17426329ad417ff3e5f2b0bc0.webp?size=128" alt="Bonnie Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">MiauRizius</a>
                    </h3>
                    <p>Full-Stack Development / Management</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="https://twitch.tv/miaurizius" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Twitch></Twitch>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/MiauRizius" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <GitHub></GitHub>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/MiauRizius" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Twitter></Twitter>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/miaurizius/" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <Instagram></Instagram>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/user/ep9eydfcne13pk3jsnmq52r8e" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Spotify></Spotify>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="text-center text-gray-500 dark:text-gray-400">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn.discordapp.com/avatars/797925384934260796/d0f62df7d914abf3b7f8c23ec3fda55b.webp?size=128" alt="Jese Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Hina</a>
                    </h3>
                    <p>Team Leitung</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="https://open.spotify.com/user/xolgx30uoo85f68d6p6ecidjq" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Spotify></Spotify>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="text-center text-gray-500 dark:text-gray-400">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn.discordapp.com/avatars/818556798461149248/49bd0ccfc2a154b9d5f64112e1d64bc2.webp?size=128" alt="Joseph Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Kazuha</a>
                    </h3>
                    <p>Moderation</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="https://twitter.com/einfach_kazuha" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Twitter></Twitter>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/user/le8e9a7zv701fr6pns7pg7oy6" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Spotify></Spotify>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="text-center text-gray-500 dark:text-gray-400">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn.discordapp.com/avatars/806677244431826974/76cdc95c6748102922e1ff8c00d3a5f1.webp?size=128" alt="Sofia Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Woody</a>
                    </h3>
                    <p>Moderation</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="https://twitch.tv/woodyfs1980" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Twitch></Twitch>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/NoahS1304" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Twitter></Twitter>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/noah.s.offiziell/" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <Instagram></Instagram>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/user/oltxfzahi9w9kj65wgutvepdh" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Spotify></Spotify>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="text-center text-gray-500 dark:text-gray-400">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn.discordapp.com/avatars/589161083554758682/aeb7c561cba3d1dd9568b4c255b979a8.webp?size=128" alt="Sofia Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">NicyAmSleepen</a>
                    </h3>
                    <p>Moderation</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="https://twitch.tv/nicyamsleepen" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Twitch></Twitch>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/NicyAmSleepen" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <GitHub></GitHub>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/nicyamsleepn/" target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <Instagram></Instagram>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/user/nhi5gpof2w1axrpaqbaqqpyhb" target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <Spotify></Spotify>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
    </section>
    <Footer></Footer>
</template>