<template>
    <div class="sidebar">
      <div class="logo">
       
      </div>
      <nav class="menu">
        <ul>
          <li>
            <a href="#"><i class="fas fa-home"></i> Inicio</a>
          </li>
          <li>
            <a href="#"><i class="fas fa-calendar-alt"></i> Citas</a>
          </li>
          <li>
            <a href="#"><i class="fas fa-paw"></i> Mascotas</a>
          </li>
          <li>
            <a href="#"><i class="fas fa-users"></i> Comunidad</a>
          </li>
          <li>
            <a href="#"><i class="fas fa-globe"></i> Contacto</a>
          </li>
        </ul>
      </nav>
      <div class="profile">
        <a href="#"><i class="fas fa-user-circle"></i> Perfil</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #6a5fad;
    color: white;
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .logo {
    text-align: center;
    margin-top: 20px;
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
  }
  
  .menu ul li {
    margin: 20px 0;
  }
  
  .menu ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  .profile {
    text-align: center;
    padding: 20px 0;
  }
  
  .profile a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  </style>
  