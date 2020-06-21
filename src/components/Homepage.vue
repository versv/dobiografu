<template>
  <div>
    <div class="background-pic">
      <img src="assets/images/cameraBackground1.jpg" alt="obrázek kamery" />
      <div class="perex">
        <p>
          Přehled malých artových kin v Praze a jejich aktuálních programů. Vše na
          jednom místě.
        </p>
      </div>
    </div>

     <div class="cinema-programme">
        <MovieByDate
          v-for="(cinema, index) in cinemaToday"
          v-bind:key="index"
          v-bind:cinema="cinema"
        />

        <!--část kódu, která se zobrazí v závislti na vybraném daut .programme-day-->
      </div>

  </div>
</template>

<script>
import MovieByDate from "./MovieByDate.vue";
import { getMoviesForDate,  formatDate } from "../databazeFilmy";

export default {
  name: "Homepage",
  components: {
    MovieByDate: MovieByDate,
  },
  data() {
    return {
      cinemaToday: [],
    };
  },

  created() {
    this.get();
  },

  methods: {
      get: function() {
      getMoviesForDate(formatDate(new Date())).then((cinema) => {
        this.cinemaToday = cinema;
      });
    },
  },
};
</script>

<style>
.background-pic img {
  width: 100%;
  height: auto;
}

.background-pic {
  position: relative;
}

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

@media screen and (min-width: 541px) and (max-width: 960px) {
  .perex p {
    font-size: 16px;
    line-height: 1.5;
  }

  .perex {
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

/*
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
}*/
</style>
