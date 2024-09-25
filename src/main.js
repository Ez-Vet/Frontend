import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Card from "primevue/card";
import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import Password from "primevue/password";
import Image from "primevue/image";
import Router from "./router/index.js";
import Toolbar from "primevue/toolbar";
import i18n from "./i18n.js";
import ToggleButton from "primevue/togglebutton";
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue, { unstyled: true });
app.use(Router);
app.use(i18n);


app.component('pv-card', Card)
app.component('pv-inputtext', InputText)
app.component('pv-password', Password)
app.component('pv-button', Button)
app.component('pv-Image', Image)
app.component('pv-toolbar', Toolbar)
app.component('pv-togglebutton', ToggleButton);

app.mount('#app');
