<template>
    <div class="main-layout">
      <div class="main-container">
        <SidebarComponent />
        <div class="content-area">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SidebarComponent from '@/components/sidebar.component.vue';
  
  export default {
    name: 'MainLayoutComponent',
    components: {
      SidebarComponent,
    },
  };
  </script>
  
  <style scoped>
  .main-layout {
    display: flex;
    height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la pantalla */
  }
  
  .main-container {
    display: flex;
    width: 100%;  /* Asegura que ocupe todo el ancho */
  }
  
  .sidebar {
    flex: 0 0 250px;  /* La barra lateral ocupa un ancho fijo */
  }
  
  .content-area {
    flex: 1;  /* El área de contenido ocupa todo el espacio restante */
    background-color: #b5e3e5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  </style>
  