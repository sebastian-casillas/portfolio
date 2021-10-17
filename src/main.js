import { createApp } from 'vue'

import App from './App.vue'
import router from "./router";


import { Quasar } from 'quasar'
import quasarUserOptions from './plugins/quasar-user-options'
import axios from "./plugins/axios";

import './styles/main.scss'


const app = createApp(App);

app.use(router);
app.use(Quasar, quasarUserOptions);

app.config.globalProperties.$axios = axios;

app.mount("#app");