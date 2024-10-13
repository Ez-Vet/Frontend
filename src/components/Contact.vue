<template>
    <div class="contact-page">
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
    padding: 30px;
    background-color: #A8DFE2;
    height: 100vh;
    color: black;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .info-item {
    background-color: #D7C9FF;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
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
  