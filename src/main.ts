import { createApp } from 'vue'
import router from "@/router";
import App from "./App.vue"
import axios from 'axios'

const app = createApp(App);

const user_cache = new Map();

axios.defaults.baseURL = 'https://api.discord.com';
axios.defaults.headers.common["Access-Control-Allow-Origin"] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

app.use(router);
app.mount('#app');

function add_user(id: string, user: string):void {
    user_cache.set(id, user);
}

function get_user(id: string):any {
    if(!user_cache.has(id)) return null;
    return user_cache.get(id);
}

export { add_user, get_user };