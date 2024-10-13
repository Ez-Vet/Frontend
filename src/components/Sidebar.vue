<template>
  <div class="sidebar">
    <div class="logo">
      <h2>ez.<span>vet</span></h2>
    </div>
    <ul>
      <li>
        <router-link to="/" class="menu-item ">
          <i class="fas fa-home"></i> Inicio
        </router-link>
      </li>
      <li>
        <router-link to="/citas" class="menu-item active">
          <i class="fas fa-book"></i> Citas
        </router-link>
      </li>
      <li>
        <router-link to="/mascotas" class="menu-item">
          <i class="fas fa-dog"></i> Mascotas
        </router-link>
      </li>
      <li>
        <router-link to="/comunidad" class="menu-item">
          <i class="fas fa-users"></i> Comunidad
        </router-link>
      </li>
      <li>
        <router-link to="/contacto" class="menu-item ">
          <i class="fas fa-globe"></i> Contacto
        </router-link>
      </li>
    </ul>

    <!-- Íconos de perfil y cerrar sesión -->
    <div class="user-icons">
      <i class="fas fa-user-circle user-icon"></i>
      <i class="fas fa-sign-out-alt logout-icon"></i>
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
  width: 250px;
  height: 95vh;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Alinea los elementos de la parte superior e inferior */
}

.logo h2 {
  color: white;
  font-size: 40px;
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

ul li .menu-item {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
}

ul li .menu-item.active {
  background-color: #9B83CE;
  padding: 10px;
  border-radius: 5px;
}

ul li .menu-item:hover {
  background-color: #846CCF;
}

/* Sección de íconos de usuario */
.user-icons {
  display: flex;
  justify-content: space-between;  /* Separa los íconos a los lados */
  align-items: center;
  padding: 10px;
  background-color: #9B83CE;
  border-radius: 5px;
}

.user-icons .user-icon,
.user-icons .logout-icon {
  font-size: 30px;
  cursor: pointer;
}

.user-icons .user-icon:hover,
.user-icons .logout-icon:hover {
  color: #65C6BF;
}
</style>

  