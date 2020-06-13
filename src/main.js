import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Homepage from './components/Homepage.vue';
import CinemaOverview from './components/CinemaOverview.vue';
import CinemaProgramme from './components/CinemaProgramme.vue';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Homepage },
    { path: '/CinemaOverview', component: CinemaOverview },
    { path: '/CinemaProgramme', component: CinemaProgramme },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});