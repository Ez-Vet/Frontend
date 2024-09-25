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
  <sidebar/>
  <pets-component class="content"/>


</template>




<style>
#app {
  display: flex;
  align-items: flex-start;
}

.sidebar {
  flex: 0 0 200px;
  background-color: #6b47dc;
  padding: 20px;
  color: white;
  position: sticky;
  top:0;
}

.vet {
  color: #00e6ac;
}

.content {
  padding: 20px;
  flex: 1;
}


button {
  margin-right: 10px;
}
</style>