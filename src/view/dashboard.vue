<template>
    <div class="layout">
      <Sidebar />
      <main class="main-content">
        <LanguageSwitcher />
        <NotificationBell />
        <section class="cards">
          <PendingCard
            :title="$t('app.cards.pending_appointment')"
            date="Lorem Ipsum"
            hour="Menu description"
          />
          <PendingCard
            :title="$t('app.cards.pending_vaccine')"
            date="Lorem Ipsum"
            hour="Menu description"
            pet="Lorem Ipsum"
          />
        </section>
        <Button :label="$t('app.buttons.add_content')" class="add-content-button"></Button>
      </main>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue';
  import NotificationBell from '../components/NotificationBell.vue';
  import PendingCard from '../components/PendingCard.vue';
  import LanguageSwitcher from '../components/LanguageSwitcher.vue';
  
  export default {
    name: 'Dashboard',
    components: {
      Sidebar,
      NotificationBell,
      PendingCard,
      LanguageSwitcher,
    },
  };
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    height: 100vh;
  }
  .main-content {
    flex: 1;
    background-color: #9fe2d1;
    padding: 2rem;
    position: relative;
  }
  .cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .add-content-button {
    margin-top: 2rem;
  }
  </style>
  