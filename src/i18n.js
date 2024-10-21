import { createI18n } from 'vue-i18n';
import es from './local/en.json';
import en from './local/es.json';


const messages = {
  en,
  es
};

const i18n = createI18n({
  locale: 'en', 
  fallbackLocale: 'es',
  messages
});

export default i18n;