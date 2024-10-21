<template>
    <div class="appointment-card">
      <h3>Consulta Veterinaria</h3>
      <p><strong>Fecha:</strong> {{ date }}</p>
      <p><strong>Hora:</strong> {{ time }}</p>
      <p><strong>Doctor:</strong> {{ doctor }}</p>
      <p><strong>Mascota:</strong> {{ pet }}</p>
      <p><strong>Descripción:</strong> {{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'appointmentCard',
    props: {
      date: String,
      time: String,
      doctor: String,
      pet: String,
      description: String
    }
  };
  </script>
  
  <style scoped>
  .appointment-card {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  </style>