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
console.log('%c Wenn du nicht 100% weißt, was du tust, schließe dieses Fenster!', ['font-size: 15px'].join(';'));

async function get_avatar(user_id: string) {
    var response = await fetch('http://localhost:80/get_avatar', {
        method: 'GET',
        headers: {
            Authorization: import.meta.env.VITE_MAUKI_API_AUTHTOKEN,
            user_id: user_id
        },
    });

    var creds = await response.json().catch(err => console.log(err));
    const { code, message, url } = creds;
    if(code != 200) return null;
    return url;
}

const ids = ["234765355178917901", "622784776234991626", "509761783293149188", "797925384934260796", "818556798461149248", "806677244431826974"];

ids.forEach(id => {
    get_avatar(id).then(val => {
    document.getElementById(id)?.setAttribute("src", val);
    console.log(val);
});
})

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
                        id="234765355178917901"
                        name="KikiYT" 
                        rank="Creator / Inhaber" 
                        img="https://ia903204.us.archive.org/4/items/discordprofilepictures/discordred.png"
                        ttv="https://twitch.tv/kikiyt90"
                        github="https://github.com/KikiYT90"
                        twitter="https://twitter.com/KikiYT90"
                        insta="https://www.instagram.com/kikiyt90/"
                        spotify="https://open.spotify.com/user/kerstingirl90"></TeamContainer>
                    
                        <TeamContainer 
                        id="622784776234991626"
                        name="MiauRizius" 
                        rank="Development / Management" 
                        img="https://ia903204.us.archive.org/4/items/discordprofilepictures/discordred.png"
                        ttv="https://twitch.tv/miaurizius"
                        github="https://github.com/MiauRizius"
                        twitter="https://twitter.com/MiauRizius"
                        insta="https://www.instagram.com/miaurizius"
                        spotify="https://open.spotify.com/user/ep9eydfcne13pk3jsnmq52r8e"></TeamContainer>

                        <TeamContainer 
                        id="509761783293149188"
                        name="Yoshino" 
                        rank="Administration" 
                        img="https://ia903204.us.archive.org/4/items/discordprofilepictures/discordred.png"
                        ttv="https://twitch.tv/_yoshinott_"
                        twitter="https://twitter.com/_YoshinoTT_"
                        spotify="https://open.spotify.com/user/846hx1aqq538727oopy8on09d"></TeamContainer>
                    
                        <TeamContainer 
                        id="797925384934260796"
                        name="Hina" 
                        rank="Team Leitung" 
                        img="https://ia903204.us.archive.org/4/items/discordprofilepictures/discordred.png"
                        spotify="https://open.spotify.com/user/xolgx30uoo85f68d6p6ecidjq"></TeamContainer>
                    
                        <TeamContainer 
                        id="818556798461149248"
                        name="Kazuha" 
                        rank="Team Leitung" 
                        img="https://ia903204.us.archive.org/4/items/discordprofilepictures/discordred.png"
                        twitter="https://twitter.com/einfach_kazuha"
                        spotify="https://open.spotify.com/user/le8e9a7zv701fr6pns7pg7oy6"
                        ttv="https://www.twitch.tv/kazuha8124"></TeamContainer>
                    
                        <TeamContainer 
                        id="806677244431826974"
                        name="Woody" 
                        rank="Artist / Moderation" 
                        img="https://ia903204.us.archive.org/4/items/discordprofilepictures/discordred.png"
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