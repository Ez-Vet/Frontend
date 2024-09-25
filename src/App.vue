
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




