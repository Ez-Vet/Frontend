<template>
    <div id="app">
      <Sidebar />
      <MainContent />
      <NotificationBell />
    </div>
  </template>
  
  <script>
  import Sidebar from './components/Sidebar.componet.vue'
  import MainContent from './components/MainContent.component.vue'
  import NotificationBell from './components/NotificationBell.component.vue'
  
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
  