<template>
  <div class="post-card">
    <h3>Publicación:</h3>
    <p><strong>User:</strong> {{ user }}</p>
    <p><strong>Content:</strong> {{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'postCard',
  props: {
    user: String,
    content: String,
  }
};
</script>

<style scoped>
.post-card {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>