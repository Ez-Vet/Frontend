<template>
    <div class="appointments">
      <AppointmentCard
        date="24 Septiembre 2023"
        time="10:00 AM"
        doctor="Dr. López"
        pet="Firulais"
        description="Consulta de control."
      />
      <AppointmentCard
        date="25 Septiembre 2023"
        time="11:30 AM"
        doctor="Dra. Martínez"
        pet="Pelusa"
        description="Vacuna anual."
      />
    </div>
  </template>
  
  <script>
  import AppointmentCard from './AppointmentCard.vue';
  
  export default {
    name: 'appointments',
    components: {
      AppointmentCard,
    },
  };
  </script>
  
  <style scoped>
  .appointments {
    padding: 20px;
    background-color: #a4e4e4;
    min-height: 100vh;
  }
  </style>
