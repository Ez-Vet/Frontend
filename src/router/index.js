import { createRouter, createWebHistory } from 'vue-router';
//import Home from '../components/Home.vue';
//import Citas from '../components/Citas.vue';
//import Mascotas from '../components/Mascotas.vue';
//import Comunidad from '../components/Comunidad.vue';
import Contacto from '../components/Contact.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/citas', component: Citas, name: 'citas' },
  { path: '/mascotas', component: Mascotas, name: 'mascotas' },
  { path: '/comunidad', component: Comunidad, name: 'comunidad' },
  { path: '/contacto', component: Contacto, name: 'contacto' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
