import { createApp } from 'vue';
import App from './App.vue';

// Import PrimeVue and components
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';

// Import PrimeVue styles
import 'primevue/resources/themes/saga-blue/theme.css';     // Theme
import 'primevue/resources/primevue.min.css';               // Core
import 'primeicons/primeicons.css';                         // Icons

const app = createApp(App);

// Register PrimeVue components globally
app.use(PrimeVue);
app.component('Button', Button);
app.component('Card', Card);

app.mount('#app');
