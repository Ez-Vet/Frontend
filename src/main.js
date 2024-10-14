import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import { createI18n } from 'vue-i18n';

// PrimeVue components
import Button from 'primevue/button';
import Card from 'primevue/card';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Import locales
import en from './locales/en.json';
import es from './locales/es.json';

// i18n setup
const messages = {
  en,
  es,
};
const i18n = createI18n({
  locale: 'es', // Default language
  fallbackLocale: 'en',
  messages,
});

const app = createApp(App);

app.use(PrimeVue);
app.use(i18n);

// Register PrimeVue components
app.component('Button', Button);
app.component('Card', Card);

app.mount('#app');
