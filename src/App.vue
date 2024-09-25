<template>
    <div id="app">
      <div class="sidebar">
        <div class="logo">ez.<span class="vet">Vet</span></div>
        <nav>
          <ul>
            <li>{{ $t('home') }}</li>
            <li>{{ $t('quotes') }}</li>
            <li>{{ $t('community') }}</li>
            <li>{{ $t('contact') }}</li>
          </ul>
          <select v-model="$i18n.locale">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </nav>
      </div>
      <div class="content">

        <div class="pet-card">
          <h2>{{ $t('name') }}</h2>
          <ul>
            <li><strong>{{ $t('species') }}:</strong> {{ $t('menu_description') }}</li>
            <li><strong>{{ $t('age') }}:</strong> {{ $t('menu_description') }}</li>
            <li><strong>{{ $t('vaccinated') }}:</strong> {{ $t('menu_description') }}</li>
          </ul>
          <button>{{ $t('edit') }}</button>
          <button>{{ $t('view_more') }}</button>
        </div>
        <button class="add-pet">{{ $t('add_pet') }}</button>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './components/Sidebar.vue';
  export default {
    name: 'App',
    components: {
    Sidebar,
  },
  }
  </script>
  
  <style>
/* Agrega tus estilos personalizados aquí */
#app {
  display: flex;
  height: 100vh;
}

.sidebar {
  background-color: #6b47dc;
  width: 200px;
  padding: 20px;
  color: white;
}

.vet {
  color: #00e6ac;
}

.content {
  padding: 20px;
  background-color: #e0f7fa;
  flex: 1;
}

.pet-card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

button {
  margin-right: 10px;
}
</style>