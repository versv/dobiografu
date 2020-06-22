<template>
  <div>
    <div class="background-pic">
      <img src="assets/images/cameraBackground3.jpg" width="600" height="300" alt="obrázek kamery" />
    </div>

    <div>
      <h2>dnes v kinech</h2>
    </div>

    <div class="cinema-programme">
      <MovieByDate
        v-for="(cinema, index) in cinemaToday"
        v-bind:key="index"
        v-bind:cinema="cinema"
      />

      <!--část kódu, která se zobrazí v závislti na vybraném daut .programme-day-->
    </div>
    <footer>
      <a
        href="https://www.freepik.com/free-photos-vectors/space"
      >Space photo created by freepik - www.freepik.com</a>
    </footer>
  </div>
</template>

<script>
import MovieByDate from "./MovieByDate.vue";
import { getMoviesForDate, formatDate } from "../databazeFilmy";

export default {
  name: "Homepage",
  components: {
    MovieByDate: MovieByDate
  },
  data() {
    return {
      cinemaToday: []
    };
  },

  created() {
    this.get();
  },

  methods: {
    get: function() {
      getMoviesForDate(formatDate(new Date())).then(cinema => {
        this.cinemaToday = cinema;
      });
    }
  }
};
</script>

<style>
h2 {
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  border-bottom: 1px solid black;
}
.background-pic img {
  width: 100%;
  height: auto;
}

.background-pic {
  position: relative;
}

footer {
  text-align: center;
}
@media screen and (min-width: 541px) and (max-width: 960px) {
  .perex p {
    font-size: 16px;
    line-height: 1.5;
  }
}
</style>
