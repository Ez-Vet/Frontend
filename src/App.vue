
<script>
import petsComponent from "./ezvet/components/pets/pets.component.vue";
import Card from "primevue/card";
import Sidebar from './components/Sidebar.vue';
export default {
  name: 'App',
  components: {
    Sidebar,
    petsComponent,
  },
}
</script>


<template>
  <div class="container">
  <sidebar class="sidebar"/>
  <router-view class="content"/>
  </div>

</template>


<style scoped>

.container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 250;
  position: sticky;
  top: 0;
}

.content{
  flex: 1;
}

</style>



