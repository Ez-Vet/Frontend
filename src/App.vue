<template>
    <div id="app">
      <Sidebar />
      <MainContent />
      <NotificationBell />
    </div>
  </template>
  
  <script>
  import Sidebar from './components/Sidebar.vue'
  import MainContent from './components/MainContent.vue'
  import NotificationBell from './components/NotificationBell.vue'
  
  export default {
    name: 'App',
    components: {
      Sidebar,
      MainContent,
      NotificationBell
    }
  }
  </script>
  
  <style>
  #app {
    display: flex;
    position: relative;
  }
  
  .notification-bell {
    position: absolute;
  }
  </style>
  