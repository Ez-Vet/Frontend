import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import i18n from './i18n'

const app = createApp(App)

app.use(PrimeVue, { unstyled: true });
app.use(i18n);

app.component('pv-card', Card)

app.mount('#app')

