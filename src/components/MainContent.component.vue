<template>
  <div class="main-content">
    <div class="header">
      <h2>Último contenido agregado</h2>
    </div>
    <div class="content-list">
      <div class="content-item" v-for="item in 5" :key="item">
        <h3>Menu Label</h3>
        <p>Menu description.</p>
      </div>
    </div>
    <button class="add-content-btn">Añadir contenido</button>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
};
</script>

<style scoped>
.main-content {
  background-color: #b5e3e5;
  padding: 20px;
  width: 1285px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra alrededor del contenido */
  border-radius: 10px;
}

.header {
  margin-bottom: 20px;
}

.content-list {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.content-item {
  margin-bottom: 10px;
}

.add-content-btn {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  display: block;
  margin: 0 auto; /* Centra el botón */
}

.add-content-btn:hover {
  background-color: #555;
}
</style>
