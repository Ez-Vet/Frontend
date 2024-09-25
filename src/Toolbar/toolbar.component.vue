<template>
    <div class="toolbar">
      <h1>{{ $t('welcome') }}</h1>
      <div class="actions">
        <button @click="goHome"><i class="fas fa-home"></i> {{ $t('home') }}</button>
        <button @click="logout"><i class="fas fa-sign-out-alt"></i> {{ $t('logout') }}</button>
        <button @click="toggleLanguage">{{ languageSwitchText }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToolbarComponent',
    computed: {
      languageSwitchText() {
        return this.$i18n.locale === 'es' ? this.$t('languageSwitch') : this.$t('languageSwitch');
      }
    },
    methods: {
      goHome() {
        this.$router.push('/');
      },
      logout() {
        console.log('Cerrando sesión...');
      },
      toggleLanguage() {
        // Cambiar entre español e inglés
        this.$i18n.locale = this.$i18n.locale === 'es' ? 'en' : 'es';
      }
    }
  }
  </script>
  
  <style scoped>
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px 20px;
  }
  
  .actions button {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    margin-left: 10px;
    cursor: pointer;
  }
  
  .actions button:hover {
    text-decoration: underline;
  }
  </style>
  