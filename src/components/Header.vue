<template>
  <header class="header">
    <button class="btn">Agendar Una Cita</button>
    <div class="bell-icon">
      <i class="fas fa-bell"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #8ed8d8;
}

.btn {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
}

.bell-icon {
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 50%;
}
</style>
