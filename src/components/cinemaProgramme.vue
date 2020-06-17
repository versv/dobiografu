<template>
  <div>
    <!--Program kina-->
    <div>{{ cinema.name }}</div>
    <div>{{ movies }}</div>

    <section class="cinema-overview">
      <div class="programme-header">
        <h3>{{ cinema.name }}</h3>
        <h2>PROGRAM</h2>
      </div>
      <!--Konec sekce Výběr kina-->

      <!--Sekce Seznam kin-->

      <div class="cinema-programme">
        <div class="programme-day">
          <div class="programme-cinema-name">Pátek 26. 6. 2020</div>
          <div class="movies-list">
            <div class="movie">
              <p>NT Live: Cyrano z Bergeracu</p>
              <p>17:30</p>
            </div>
            <div class="movie">
              <p>1917</p>
              <p>19:30</p>
            </div>
            <div class="movie">
              <p>Přežijí jen milenci</p>
              <p>21:00</p>
            </div>
          </div>
        </div>

        <div class="programme-day">
          <div class="programme-cinema-name">Sobota 27. 6. 2020</div>
          <div class="movies-list">
            <div class="movie">
              <p>Bourák</p>
              <p>15:30</p>
            </div>
            <div class="movie">
              <p>Králíček Jojo</p>
              <p>18:00</p>
            </div>
            <div class="movie">
              <p>Emma</p>
              <p>20:30</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { loadMoviesForCinema } from "../databazeFilmy";
import { getCinemaById, getCinemaByUrl } from "../databaze";
export default {
  name: "CinemaProgramme",
  data() {
    return {
      movies: [],
      cinema: getCinemaByUrl(this.$route.params.cinemaUrl),
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies: function() {
      loadMoviesForCinema("Světozor").then(movies => {
        this.movies = movies;
      });
    },
  }
  };
</script>

<style>
.cinema-programme {
  padding: 20px;
}

.programme-header {
  color: white;
  padding: 5px;
  background-color: #3c444c;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

h3 {
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
}

.programme-day {
  text-align: left;
}

.programme-day-date {
  font-weight: bold;
}

.programme-day-date:after {
  content: "";
  background: linear-gradient(to right, #f27a54 25%, #a154f2 100%);
  display: block;
  height: 2.5px;
  width: 100%;
  margin-top: 10px;
}

.movie {
  display: flex;
  justify-content: space-between;
}

.movies-list {
  margin-bottom: 15px;
}

.tickets-button {
  max-width: 140px;
  margin: 0 auto;
  padding: 5px;
  background: #3c444c;
  color: white;
}

.tickets-button:active {
  background: linear-gradient(to right, #f27a54 25%, #a154f2 100%);
}

/* tablet */

@media screen and (min-width: 541px) {
  h3 {
    font-size: 18px;
  }

  .programme-day {
    font-size: 16px;
  }

  .programme-day-date:after {
    margin-top: 15px;
  }
}

/* desktop */

@media screen and (min-width: 961px) {
  h3 {
    font-size: 20px;
  }

  .programme-day {
    font-size: 16px;
  }

  .cinema-programme {
    padding: 40px;
  }
}
</style>
