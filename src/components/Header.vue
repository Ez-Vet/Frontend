<template>
    <header class="app-header">
      <h1>{{ $t('latest_content') }}</h1> <!-- Asume que tienes una key de traducción llamada 'latest_content' -->
      
      <!-- Botón para cambiar de idioma -->
      <div class="language-switcher">
        <button 
          v-if="$i18n.locale === 'es'" 
          @click="changeLocale('en')" 
          class="language-button">
          English
        </button>
        <button 
          v-if="$i18n.locale === 'en'" 
          @click="changeLocale('es')" 
          class="language-button">
          Español
        </button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    methods: {
      changeLocale(locale) {
        this.$i18n.locale = locale; // Cambia el idioma de la app
      }
    }
  };
  </script>
  
  <style scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #735dab;
    color: white;
  }
  
  .language-switcher {
    display: flex;
    align-items: center;
  }
  
  .language-button {
    background-color: #fff;
    color: #735dab;
    border: none;
    padding: 8px 12px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .language-button:hover {
    background-color: #65c6bf;
    color: white;
  }
  </style>
  