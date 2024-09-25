<template>
    <div class="sidebar">
      <div class="logo">
        <img src="../img/image 2.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><router-link to="/login"><i class="fas fa-home"></i> Login</router-link></li>
          <li><router-link to="/home"><i class="fas fa-home"></i> Inicio</router-link></li>
          <li><router-link to="/appointments"><i class="fas fa-calendar"></i> Citas</router-link></li>
          <li><router-link to="/pets"><i class="fas fa-paw"></i> Mascotas</router-link></li>
          <li><router-link to="/community"><i class="fas fa-users"></i> Comunidad</router-link></li>
          <li><router-link to="/contact"><i class="fas fa-envelope"></i> Contacto</router-link></li>

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
 