import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "font-awesome/css/font-awesome.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './assets/stylesheet.css'
import {createMetaManager} from "vue-meta";
import axios, {Axios} from "axios";


library.add(faPhone)

createApp(App).use(router)
    .use(createMetaManager())
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

