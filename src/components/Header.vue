<template>
    <header class="header">
      <button class="btn">Agendar Una Cita</button>
      <div class="bell-icon">
        <i class="fas fa-bell"></i>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #8ed8d8;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  .bell-icon {
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 50%;
  }
  </style>
  
-Siderbar.vue

<template>
    <div class="sidebar">
      <div class="logo">
        <img src="../img/image 2.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#"><i class="fas fa-home"></i> Inicio</a></li>
          <li><a href="#"><i class="fas fa-calendar"></i> Citas</a></li>
          <li><a href="#"><i class="fas fa-paw"></i> Mascotas</a></li>
          <li><a href="#"><i class="fas fa-users"></i> Comunidad</a></li>
          <li><a href="#"><i class="fas fa-envelope"></i> Contacto</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #836cc2;
    padding: 20px;
    color: white;
    height: 100vh;
  }
  
  .logo {
    text-align: center;
    margin-bottom: 30px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav ul li {
    margin-bottom: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
  }
  
  nav ul li a i {
    margin-right: 10px;
  }
  </style>
