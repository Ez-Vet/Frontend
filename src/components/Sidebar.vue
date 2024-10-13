<template>
    <div class="sidebar">
      <div class="logo">
        <h2>ez.<span>vet</span></h2>
      </div>
      <ul>
        <li><i class="fas fa-home"></i> Inicio</li>
        <li><i class="fas fa-book"></i> Citas</li>
        <li><i class="fas fa-dog"></i> Mascotas</li>
        <li><i class="fas fa-users"></i> Comunidad</li>
        <li class="active"><i class="fas fa-globe"></i> Contacto</li>
      </ul>
      <div class="user">
        <i class="fas fa-user-circle"></i>
        <i class="fas fa-sign-out-alt"></i>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
  };
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #735DAB;
    width: 200px;
    height: 100vh;
    padding: 20px;
    color: white;
  }
  
  .logo h2 {
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .logo span {
    color: #65C6BF;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin: 20px 0;
    font-size: 18px;
  }
  
  ul li.active {
    background-color: #9B83CE;
    padding: 10px;
    border-radius: 5px;
  }
  
  .user {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
  
  .user i {
    font-size: 24px;
  }
  </style>
  