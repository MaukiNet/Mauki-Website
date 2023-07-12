import { createApp } from 'vue'
import router from "@/router";
import App from "./App.vue"
import axios from 'axios'

const app = createApp(App);

axios.defaults.baseURL = 'https://api.discord.com';
axios.defaults.headers.common["Access-Control-Allow-Origin"] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

app.use(router);
app.mount('#app');