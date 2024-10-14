<template>
    <aside class="sidebar">
      <div class="logo">
        <h1>{{ $t('app.title') }}</h1>
      </div>
      <nav class="menu">
        <ul>
          <li>
            <Button icon="pi pi-home" :label="$t('app.menu.home')" class="p-button-text"></Button>
          </li>
          <li>
            <Button icon="pi pi-book" :label="$t('app.menu.appointments')" class="p-button-text"></Button>
          </li>
          <li>
            <Button icon="pi pi-paw" :label="$t('app.menu.pets')" class="p-button-text"></Button>
          </li>
          <li>
            <Button icon="pi pi-users" :label="$t('app.menu.community')" class="p-button-text"></Button>
          </li>
          <li>
            <Button icon="pi pi-globe" :label="$t('app.menu.contact')" class="p-button-text"></Button>
          </li>
        </ul>
      </nav>
      <div class="user-actions">
        <Button icon="pi pi-user" class="p-button-rounded p-button-text"></Button>
        <Button icon="pi pi-sign-out" class="p-button-rounded p-button-text"></Button>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #8465a8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    color: white;
  }
  .logo {
    text-align: center;
    margin-bottom: 2rem;
  }
  .menu ul {
    list-style: none;
    padding: 0;
  }
  .menu li {
    margin-bottom: 1rem;
  }
  </style>
  