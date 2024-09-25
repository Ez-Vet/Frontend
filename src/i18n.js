import { createI18n } from 'vue-i18n';

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
