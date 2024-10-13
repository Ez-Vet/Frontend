<template>
    <div id="app">
      <Sidebar />
      <Contact />
    </div>
  </template>
  
  <script>
  import Sidebar from './components/Sidebar.vue';
  import Contact from './components/Contact.vue';
  
  export default {
    name: 'App',
    components: {
      Sidebar,
      Contact
    }
  }
  </script>
  
  <style>
  #app {
    display: flex;
    height: 98vh;  /* Ocupa toda la altura de la pantalla */
    width: 99vw;   /* Ocupa todo el ancho de la pantalla */
    overflow: hidden; /* Evita scroll innecesario */
  }
  </style>
  
  