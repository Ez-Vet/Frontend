<script>
import Card from "primevue/card"
export default {
  name: "CommunityCard",
  components: {
    Card
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
    </template>
    <template #title>{{ item.name }}</template>
    <template #subtitle>{{ item.description }}</template>
    <template #content>
      <p class="m-0">
        <strong>Total Members:</strong> {{ item.members }} <br>
        <strong>Active Users</strong> {{ item.active_users }} <br>
      </p>
    </template>
  </pv-card>
</template>

<style scoped>
Card {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 200px;
}
</style>