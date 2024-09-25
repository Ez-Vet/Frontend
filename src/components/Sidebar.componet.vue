<template>
  <div class="sidebar">
    <div class="logo">
    </div>
    <nav class="menu">
      <ul>
        <li><a href="#"><i class="fas fa-home"></i> Inicio</a></li>
        <li><a href="#"><i class="fas fa-calendar-alt"></i> Citas</a></li>
        <li><a href="#"><i class="fas fa-paw"></i> Mascotas</a></li>
        <li><a href="#"><i class="fas fa-users"></i> Comunidad</a></li>
        <li><a href="#"><i class="fas fa-globe"></i> Contacto</a></li>
      </ul>
    </nav>
    <div class="profile">
      <a href="#"><i class="fas fa-user-circle"></i> Perfil</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh; /* Ocupa toda la altura */
  background-color: #6a5fad;
  color: white;
  padding: 20px;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
}

.logo-img {
  max-width: 100px;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu ul li {
  margin-bottom: 20px;
}

.menu ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.menu ul li a i {
  margin-right: 10px;
}

.profile {
  text-align: center;
}

.profile a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
