<template>
    <header class="app-header">
      <!-- Botón para cambiar de idioma -->
      <div class="language-switcher">
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    methods: {
      changeLocale(locale) {
        this.$i18n.locale = locale; // Cambiar el idioma
      }
    }
  };
  </script>
  
  <style scoped>
  
  .language-switcher {
    display: flex;
    align-items: center;
  }
  
  .language-button:hover {
    background-color: #8BDCD6;
    color: white;
  }
  </style>
  