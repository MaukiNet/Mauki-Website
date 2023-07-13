<script lang="ts">

    import { add_user, get_user } from '@/main';

    export default {
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
    <p>Anmeldung fehlgeschlagen!</p>
</template>