<template>
    <div class="layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="logo">
          <h1>ez.vet</h1>
        </div>
        <nav class="menu">
          <ul>
            <li>
              <Button icon="pi pi-home" label="Inicio" class="p-button-text"></Button>
            </li>
            <li>
              <Button icon="pi pi-book" label="Citas" class="p-button-text"></Button>
            </li>
            <li>
              <Button icon="pi pi-paw" label="Mascotas" class="p-button-text"></Button>
            </li>
            <li>
              <Button icon="pi pi-users" label="Comunidad" class="p-button-text"></Button>
            </li>
            <li>
              <Button icon="pi pi-globe" label="Contacto" class="p-button-text"></Button>
            </li>
          </ul>
        </nav>
        <div class="user-actions">
          <Button icon="pi pi-user" class="p-button-rounded p-button-text"></Button>
          <Button icon="pi pi-sign-out" class="p-button-rounded p-button-text"></Button>
        </div>
      </aside>
  
      <!-- Main content area -->
      <main class="main-content">
        <!-- Notification icon -->
        <div class="notification">
          <Button icon="pi pi-bell" class="p-button-rounded p-button-text"></Button>
        </div>
  
        <!-- Pending appointments and vaccines -->
        <section class="cards">
          <Card class="p-mb-3">
            <template #header>
              <div class="header-title">Cita Pendiente</div>
            </template>
            <p>Fecha: Lorem Ipsum.</p>
            <p>Hora: Menu description.</p>
          </Card>
  
          <Card>
            <template #header>
              <div class="header-title">Vacuna Pendiente</div>
            </template>
            <p>Mascota: Lorem Ipsum.</p>
            <p>Hora: Menu description.</p>
          </Card>
        </section>
  
        <!-- Add content button -->
        <Button label="Añadir contenido" class="add-content-button"></Button>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard'
  }
  </script>
  
  <style scoped>
  /* Layout */
  .layout {
    display: flex;
    height: 100vh;
  }
  
  /* Sidebar */
  .sidebar {
    width: 250px;
    background-color: #8465a8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    color: white;
  }
  
  .logo {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
  }
  
  .menu li {
    margin-bottom: 1rem;
  }
  
  /* Main content */
  .main-content {
    flex: 1;
    background-color: #9fe2d1;
    padding: 2rem;
    position: relative;
  }
  
  .notification {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  
  /* Cards */
  .cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .header-title {
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  /* Add content button */
  .add-content-button {
    margin-top: 2rem;
  }
  </style>
  