<script lang="ts">
    import { add_user, get_user } from '@/main';
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'

    export default {        
        components: {
            Navbar,
            Footer
        },
        async mounted() {

            function getCookie(name:string) {
                var cookieArr = document.cookie.split(";");
                for(var i = 0; i < cookieArr.length; i++) {
                    var cookiePair = cookieArr[i].split("=");
                    if(name == cookiePair[0].trim()) {
                        return decodeURIComponent(cookiePair[1]);
                    }
                }
                return "null";
            }

            if(get_user(getCookie("id")) != null) {
                window.location.href = "/";
                return;
            }

            function _encode(obj:object) {
                let string = "";
                for (const [key, value] of Object.entries(obj)) {
                    if (!value) continue;
                    string += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
                }
                return string.substring(1);
            }

            let queries = new URLSearchParams(window.location.search);
            if(!queries.has("code")) return;
            const code = queries.get("code");

            let data = {
                'client_id': '1108073196667801601',
                'client_secret': import.meta.env.VITE_CLIENT_SECRET,
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': 'http://localhost:5173/callback',
                'scope': 'identify'
            };

            var response = await fetch('https://discord.com/api/oauth2/token', {
                method: 'POST',
                body: _encode(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            var creds = await response.json().catch(err => console.log(err));
            const { access_token, token_type } = creds;
            response = await fetch('https://discord.com/api/users/@me', {
                method: 'GET',
                headers: {
                    'Authorization': `${token_type} ${access_token}`
                }
            });

            await response.text().catch(err => console.log(err)).then(text => {
                if(typeof text != 'string') return;
                if(text.startsWith("<")) return;

                var user = JSON.parse(text);
                if(user["message"] == "401: Unauthorized") {
                    user = null;
                    return;
                }
                user["avatar_url"] = "https://cdn.discordapp.com/avatars/" + user["id"] + "/" + user["avatar"] + ".png";
                document.cookie = `discord_id=${user["id"]}`; 
                add_user(user["id"], user);
                window.location.href = "/";
            })

        },
    }
</script>

<template>
    <Navbar />
    <main class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="text-blue-500 mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">Fehler!</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Die Anmeldung ist fehlgeschlagen. Versuche es bitte erneut.</p>
                <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sollte der Fehler weiterhin erscheinen, verwende einen anderen Browser</p>
            </div>   
        </div>
    </main>
    <Footer />
</template>