<template>
  <div class="app-container">
    <sidebar />
    <div class="main-content">
      <Header />
      <!-- Posicionamos el botón más abajo en el área verde claro -->
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
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale; // Cambiar el idioma de la app
    }
  }
};
</script>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  background-color: #8BDCD6; /* Fondo verde claro */
  padding: 20px;
  min-height: 50vh;
}

.language-switcher {
  margin-top: 1px; /* Baja el botón al área verde claro */
  text-align: right; /* Alinea el botón a la derecha */
}

.language-button {
  background-color: #fff;
  color: #735dab;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.language-button:hover {
  background-color: #65C6BF;
  color: white;
}
</style>