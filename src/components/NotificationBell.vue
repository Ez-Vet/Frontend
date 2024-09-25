<template>
    <div class="notification-bell">
      <i class="fas fa-bell"></i>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotificationBell'
  }
  </script>
  
  <style scoped>
  .notification-bell {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .notification-bell i {
    font-size: 24px;
    background-color: #d6d6f7;
    padding: 10px;
    border-radius: 50%;
  }
  </style>
  