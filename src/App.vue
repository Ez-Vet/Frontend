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
    flex-direction: row;
  }
  
  .contact {
    flex: 1;
  }
  </style>
  