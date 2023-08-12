<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import TeamContainer from '@/components/TeamContainer.vue'

export default {
    components: {
        Navbar,
        Footer,
        TeamContainer
    }
}

console.log('%c ACHTUNG! STOP!', ['color: red','display: block','font-size: 50px'].join(';'))
console.log('%c Wenn dir jemand gesagt hat, dass du etwas heraus kopieren sollst/hier einfügen sollst, hast du eine 11/10 Chance, dass du gescammt wirst!', ['font-size: 15px'].join(';'))
console.log('%c Wenn du nicht 100% weißt, was du tust, schließe dieses Fenster!', ['font-size: 15px'].join(';'))
</script>

<template>
    <title>Team - mauki.net</title>
    <Navbar />
        <main>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Das Team</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
                    </div> 
                    <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                        <TeamContainer 
                        name="KikiYT" 
                        rank="Creator / Inhaber" 
                        img="https://cdn.discordapp.com/avatars/234765355178917901/4285e7c0e3f2663ccfd2e230af70b107.webp?size=128"
                        ttv="https://twitch.tv/kikiyt90"
                        github="https://github.com/KikiYT90"
                        twitter="https://twitter.com/KikiYT90"
                        insta="https://www.instagram.com/kikiyt90/"
                        spotify="https://open.spotify.com/user/kerstingirl90"></TeamContainer>
                    
                        <TeamContainer 
                        name="MiauRizius" 
                        rank="Development / Management" 
                        img="https://cdn.discordapp.com/avatars/622784776234991626/a0e5543b80b74258d996e7c106a05dd3.webp?size=128"
                        ttv="https://twitch.tv/miaurizius"
                        github="https://github.com/MiauRizius"
                        twitter="https://twitter.com/MiauRizius"
                        insta="https://www.instagram.com/miaurizius"
                        spotify="https://open.spotify.com/user/ep9eydfcne13pk3jsnmq52r8e"></TeamContainer>

                        <TeamContainer 
                        name="Yoshino" 
                        rank="Administration" 
                        img="https://cdn.discordapp.com/avatars/509761783293149188/a_68256dbd8cc041415a96efc3a74ff306.gif?size=128"
                        ttv="https://twitch.tv/_yoshinott_"
                        twitter="https://twitter.com/_YoshinoTT_"
                        spotify="https://open.spotify.com/user/846hx1aqq538727oopy8on09d"></TeamContainer>
                    
                        <TeamContainer 
                        name="Hina" 
                        rank="Team Leitung" 
                        img="https://cdn.discordapp.com/avatars/797925384934260796/d0f62df7d914abf3b7f8c23ec3fda55b.webp?size=128"
                        spotify="https://open.spotify.com/user/xolgx30uoo85f68d6p6ecidjq"></TeamContainer>
                    
                        <TeamContainer 
                        name="Kazuha" 
                        rank="Team Leitung" 
                        img="https://cdn.discordapp.com/avatars/818556798461149248/ea8156d5032bc6ccf678d9a834a9e21f.webp?size=128"
                        twitter="https://twitter.com/einfach_kazuha"
                        spotify="https://open.spotify.com/user/le8e9a7zv701fr6pns7pg7oy6"
                        ttv="https://www.twitch.tv/kazuha8124"></TeamContainer>
                    
                        <TeamContainer 
                        name="Woody" 
                        rank="Artist / Moderation" 
                        img="https://cdn.discordapp.com/avatars/806677244431826974/a_ddc949f62e222570aaff30ae0a6c8a7c.gif?size=128"
                        ttv="https://twitch.tv/woodyfs1980"
                        twitter="https://twitter.com/NoahS1304"
                        insta="https://www.instagram.com/noah.s.offiziell/"
                        spotify="https://open.spotify.com/user/oltxfzahi9w9kj65wgutvepdh"></TeamContainer>   
                    
                    </div>  
                </div>
            </section>
        </main>
    <Footer />
</template>