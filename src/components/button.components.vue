<template>
    <Button
      :label="currentLanguage"
      @click="switchLanguage"
      class="p-button-rounded language-switcher"
    />
  </template>
  
  <script>
  export default {
    name: 'LanguageSwitcher',
    data() {
      return {
        currentLanguage: 'ES', // Idioma inicial
      };
    },
    methods: {
      switchLanguage() {
        // Cambia el idioma a EN si está en ES, y viceversa
        const newLocale = this.$i18n.locale === 'es' ? 'en' : 'es';
        this.$i18n.locale = newLocale;
        this.currentLanguage = newLocale.toUpperCase();
      },
    },
  };
  </script>
  
  <style scoped>
  .language-switcher {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: #f8f9fa;
  }
  </style>
  