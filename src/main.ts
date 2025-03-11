import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import './assets/main.css';

import App from './App.vue';
import MainMenu from "./MainMenu.vue";
import PlaylistView from './PlaylistView.vue';

const routes = [
  { path: '/', component: MainMenu },
  { path: '/playlist/:id', component: PlaylistView }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
