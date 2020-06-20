import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Homepage from './components/Homepage.vue';
import CinemaOverview from './components/CinemaOverview.vue';
import CinemaProgram from './components/CinemaProgram.vue';
import ProgrammeByCinema from './components/ProgrammeByCinema.vue';
import SelectDate from './components/SelectDate.vue';
import SelectMovie from './components/SelectMovie.vue';
import MovieByDate from './components/MovieByDate.vue';
import ProgrammeByMovie from './components/ProgrammeByMovie.vue';

import './index.html';


Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Homepage },
    { path: '/CinemaOverview', component: CinemaOverview },
    { path: '/CinemaProgramme/:cinemaUrl', component: CinemaProgram },
    { path: '/SelectDate', component: SelectDate },
    { path: '/SelectMovie', component: SelectMovie },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});