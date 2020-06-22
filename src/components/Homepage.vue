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
/*
.perex {
  color: black;
  position: absolute;
  width: 40%;
  bottom: 0%;
  text-align: left;
  padding-left: 10px;
  font-style: italic;
  text-transform: uppercase;
  font-size: 12px;
}
*/
footer {
  text-align: center;
}
@media screen and (min-width: 541px) and (max-width: 960px) {
  .perex p {
    font-size: 16px;
    line-height: 1.5;
  }

  /*.perex {
    bottom: 5%;
  }
}

@media screen and (min-width: 961px) {
  .perex p {
    font-size: 24px;
    line-height: 2;
  }
  .perex {
    bottom: 0%;
    padding-left: 30px;
  }
}


.perex {
  color: white;
}

.boxy {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
}

.box {
  background-color: #3c444c;
  box-shadow: 4px 4px 8px 0px rgba(12, 12, 12, 0.523);
  border-radius: 5px;
  margin: 3px;
  padding: 5px;
  flex: 1 1;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box img {
  max-width: 120px;
}

@media screen and (min-width: 541px) and (max-width: 960px) {
  .cameraImg,
  .ticketImg,
  .calendarImg {
    height: 50%;
  }

  .box {
    width: 80%;
    margin: 5px;
    padding: 10px;
  }

  .box img {
    max-width: 160px;
  }
}

@media screen and (min-width: 961px) {
  .boxy {
    height: 100%;
    flex-direction: row;
    justify-content: center;
  }

  .box img {
    max-width: 50%;
  }

  .box {
    margin: 15px;
    max-width: 350px;
    flex-grow: 1 1;
  }

  .box img {
    max-width: 200px;
  }
}}*/
}
</style>
