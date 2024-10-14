<template>
    <div class="notification">
      <Button icon="pi pi-bell" class="p-button-rounded p-button-text"></Button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotificationBell',
  };
  </script>
  
  <style scoped>
  .notification {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  </style>
  