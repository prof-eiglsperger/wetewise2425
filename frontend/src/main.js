import './assets/main.css'
import './assets/bootstrap-green.min.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = "http://localhost:1337";
axios.defaults.withCredentials = true;

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
