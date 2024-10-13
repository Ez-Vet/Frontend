<template>
  <div class="app-container">
    <sidebar />
    <div class="main-content">
      <Header /> <!-- Asegúrate de usar "Header" con mayúscula -->
      <Appointments />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue'; 
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,  
    Contact,
  },
};
</script>

<style>
.app-container {
  display: flex;
}

.main-content {
  flex-grow: 1;
  background-color: #f5f5f5;
}
</style>
