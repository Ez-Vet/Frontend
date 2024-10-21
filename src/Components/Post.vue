<template>
  <div class="post">
    <PostCard
        user="Dr. López"
        content="Recuerden aplicarles a sus mascotas la vacuna anual contra la rabia. Con mi esposa ya tengo suficiente de eso JAJAJAJAJ. Me voy a divorciar"
    />
    <PostCard
        user="Dra. Martínez"
        content="Chicas si quieren adoptar un perro, me avisan. Mi sobrino anda buscando novia desde hace tiempo."
    />
  </div>
</template>

<script>
import PostCard from './PostCard.vue';

export default {
  name: 'posts',
  components: {
    PostCard,
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