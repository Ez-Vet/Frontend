<template>
    <div class="app-container">
      <sidebar />
      <div class="main-content">
        <Header />
        
        <!-- Botón para cambiar de idioma -->
        <div class="language-switcher">
          <button 
            v-if="$i18n.locale === 'es'" 
            @click="changeLocale('en')" 
            class="language-button">
            English
          </button>
          <button 
            v-if="$i18n.locale === 'en'" 
            @click="changeLocale('es')" 
            class="language-button">
            Español
          </button>
        </div>
  
        <!-- Lista de contenido -->
        <h2>Último contenido agregado</h2>
        <ul class="content-list">
          <li v-for="(item, index) in contentList" :key="index" class="content-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </li>
        </ul>
  
        <!-- Botón para mostrar el formulario -->
        <button @click="toggleForm" class="add-content-button">
          {{ showForm ? 'Cancelar' : 'Añadir contenido' }}
        </button>
  
        <!-- Formulario para añadir contenido -->
        <div v-if="showForm" class="content-form">
          <input v-model="newTitle" placeholder="Título del contenido" />
          <textarea v-model="newDescription" placeholder="Descripción del contenido"></textarea>
          <button @click="addContent">Agregar</button>
        </div>
  
        <Appointments />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './components/Sidebar.vue';
  import Header from './components/Header.vue';
  import Appointments from './components/Appointments.vue';
  
  export default {
    name: 'App',
    components: {
      Sidebar,
      Header,
      Appointments,
    },
    data() {
      return {
        showForm: false, // Controla si el formulario está visible o no
        newTitle: '', // Título del nuevo contenido
        newDescription: '', // Descripción del nuevo contenido
        contentList: [ // Lista que contiene los contenidos iniciales
  
        ],
      };
    },
    methods: {
      changeLocale(locale) {
        this.$i18n.locale = locale; // Cambiar el idioma de la app
      },
      toggleForm() {
        this.showForm = !this.showForm; // Alterna la visibilidad del formulario
      },
      addContent() {
        if (this.newTitle && this.newDescription) {
          // Agrega el nuevo contenido a la lista
          this.contentList.push({
            title: this.newTitle,
            description: this.newDescription,
          });
  
          // Limpiar los campos del formulario
          this.newTitle = '';
          this.newDescription = '';
  
          // Ocultar el formulario después de agregar el contenido
          this.showForm = false;
        }
      }
    }
  };
  </script>
  
  <style>
  .app-container {
    display: flex;
    min-height: 100vh;
  }
  
  .main-content {
    flex-grow: 1;
    background-color: #8BDCD6; /* Fondo verde claro */
    padding: 20px;
  }
  
  .language-switcher {
    margin-top: 1px; /* Baja el botón al área verde claro */
    text-align: right; /* Alinea el botón a la derecha */
  }
  
  .language-button {
    background-color: #fff;
    color: #735dab;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .language-button:hover {
    background-color: #65C6BF;
    color: white;
  }
  
  .content-list {
    list-style-type: none;
    padding: 0;
  }
  
  .content-item {
    margin-bottom: 20px;
    background: white;
    padding: 10px;
    border-radius: 5px;
  }
  
  .add-content-button {
    background-color: #000;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .content-form {
    margin-top: 20px;
  }
  
  .content-form input, 
  .content-form textarea {
    display: block;
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .content-form button {
    background-color: #65c6bf;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>