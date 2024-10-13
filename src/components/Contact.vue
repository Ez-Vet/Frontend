<template>
    <div class="contact-page">
      <!-- Campana de notificaciones -->
      <div class="notification-bell">
        <i class="fas fa-bell"></i>
      </div>
      <!-- Título y resto del contenido de contacto -->
      <h2>Contact</h2>
      <div class="contact-info">
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <p>+51 999 555 222</p>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p>correo@correo.com</p>
        </div>
        <div class="info-item">
          <p>Encuéntranos en</p>
          <div class="map-placeholder"></div>
        </div>
        <div class="info-item">
          <p>Horarios de Atención</p>
          <div class="schedule-placeholder"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contact",
  };
  </script>
  
  <style scoped>
  .contact-page {
    flex: 1;
    padding: 30px;
    background-color: #A8DFE2;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; /* Para la campana */
  }
  
  .notification-bell {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .notification-bell i {
    font-size: 40px;
    color: #000;
  }
  
  .contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Mantener 2 columnas */
    grid-gap: 190px;
    width: 50%; /* Reducimos el ancho al 50% */
    max-width: 900px; /* Ancho máximo para pantallas más grandes */
  }
  
  .info-item {
    background-color: #D7C9FF;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .info-item i {
    font-size: 30px;
    margin-right: 10px;
  }
  
  .map-placeholder,
  .schedule-placeholder {
    background-color: #C1B8EB;
    width: 100%;
    height: 100px;
    border-radius: 10px;
  }
  </style>
  