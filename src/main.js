import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import './style.css';

const app = createApp(App);

app.use(i18n); // Usar i18n en la aplicación

app.mount('#app');
createApp(App).mount('#app');