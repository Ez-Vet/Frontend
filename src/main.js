import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import i18n from './i18n'

const app = createApp(App)
app.use(i18n)
=======
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'


const app = createApp(App);

app.use(PrimeVue, { unstyled: true });
app.component('pv-card', Card)

>>>>>>> 32a82ab15c07d19521fd56d77293c719876429ae
app.mount('#app')
