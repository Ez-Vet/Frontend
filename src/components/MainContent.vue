<template>
    <div class="main-content">
      <div class="header">
        <h2>Último contenido agregado</h2>
      </div>
      <div class="content-list">
        <div class="content-item" v-for="item in 5" :key="item">
          <h3>Menu Label</h3>
          <p>Menu description.</p>
        </div>
      </div>
      <button class="add-content-btn">Añadir contenido</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainContent'
  }
  </script>
  
  <style scoped>
  .main-content {
    background-color: #b5e3e5;
    padding: 20px;
    flex: 1;
  }
  
  .header {
    margin-bottom: 20px;
  }
  
  .content-list {
    background-color: white;
    padding: 20px;
  }
  
  .content-item {
    margin-bottom: 10px;
  }
  
  .add-content-btn {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }
  </style>
  