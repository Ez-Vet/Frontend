<template>
    <div class="app-container">
      <sidebar />
      <div class="main-content">
        <header />
        <Appointments />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './components/Sidebar.vue';
  import Header from './components/Header.vue';
  import Appointments from './components/Appointments.vue';
  
  export default {
    name: 'App',
    components: {
      Sidebar,
      Header,
      Appointments,
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
  