<template>
    <div class="appointments-container">
      <div class="header-content">
        <h2>Último contenido agregado</h2>
      </div>
      <div class="appointment-list">
        <!-- Lista de elementos de ejemplo -->
        <div class="content-item" v-for="i in 5" :key="i">
          <p class="menu-label">Menu Label</p>
          <p class="menu-description">Menu description.</p>
        </div>
      </div>
      <div class="add-content-btn">
        <button>➕ Añadir contenido</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Appointments',
  };
  </script>
  
  <style scoped>
  .appointments-container {
    padding: 20px;
    background-color: #8BDCD6;
    min-height: 80vh;
  }
  
  .header-content {
    margin-bottom: 20px;
  }
  
  .header-content h2 {
    font-size: 18px;
    font-weight: bold;
  }
  
  .appointment-list {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .content-item {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .menu-label {
    font-weight: bold;
  }
  
  .menu-description {
    color: #777;
  }
  
  .add-content-btn {
    margin-top: 20px;
    text-align: center;
  }
  
  .add-content-btn button {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .add-content-btn button:hover {
    background-color: #333;
  }
  </style>
  