<template>
    <Card class="p-mb-3">
      <template #header>
        <div class="header-title">{{ title }}</div>
      </template>
      <p>{{ $t('app.cards.date') }}: {{ date }}</p>
      <p v-if="pet">{{ $t('app.cards.pet') }}: {{ pet }}</p>
      <p>{{ $t('app.cards.hour') }}: {{ hour }}</p>
    </Card>
  </template>
  
  <script>
  export default {
    name: 'PendingCard',
    props: {
      title: String,
      date: String,
      hour: String,
      pet: String,
    },
  };
  </script>
  
  <style scoped>
  .header-title {
    font-weight: bold;
    font-size: 1.2rem;
  }
  </style>
  