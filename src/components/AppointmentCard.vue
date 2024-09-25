<template>
    <div class="appointment-card">
      <h3>Consulta Veterinaria</h3>
      <p><strong>Date:</strong> {{ date }}</p>
      <p><strong>Time:</strong> {{ time }}</p>
      <p><strong>Doctor:</strong> {{ doctor }}</p>
      <p><strong>Pet:</strong> {{ pet }}</p>
      <p><strong>Description:</strong> {{ description }}</p>
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
  