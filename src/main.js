import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

// Configuración de vue-i18n
const messages = {
  en: en,
  es: es
};

const i18n = createI18n({
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en', // Idioma secundario si no hay traducción
  messages
});

const app = createApp(App);
app.use(i18n);  // Usar vue-i18n en la aplicación
app.mount('#app');