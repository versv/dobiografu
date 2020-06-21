<template>
  <div>
    <!--Program kina <div>{{ movies }}</div> -->

    <section class="cinema-overview">
      <div class="programme-header">
        <h3>{{ cinema.name }}</h3>
        <h2>INFO & PROGRAM</h2>
      </div>
      <!--Konec sekce Výběr kina-->

      <div class="cinema-detail">
        <div class="cinema-wrap">
          <div class="address-details">
            <p>{{ cinema.address }}</p>
            <ul>
              <li v-for="means in cinema.transport" v-bind:key="means">{{ means }}</li>
            </ul>
          </div>
        </div>

        <div class="cinema-info">
          <p>
            <b>Občerstvení:</b>
            {{ cinema.bar }}
          </p>
          <p>
            <b>Bezbariérové:</b>
            {{ cinema.barrierFree }}
          </p>
          <p>
            <b>Speciální program:</b>
          </p>
          <ul>
            <li v-for="type in cinema.specialProgrammeTypes" v-bind:key="type">
              {{ type }}
            </li>
          </ul>
        </div>
        
      </div>

      <!--Sekce Seznam kin-->
      <div class="programme-wrapper">
        <ProgrammeByCinema
          v-for="(date, index) in dates"
          v-bind:date="date.datum"
          v-bind:movies="date.movies"
          v-bind:key="index"
        />

        <div class="button tickets-button">
          <a :href="`${cinema.link}`">Koupit lístky</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { loadMoviesForCinema } from "../databazeFilmy";
import { getCinemaById, getCinemaByUrl } from "../databaze";
import ProgrammeByCinema from "./ProgrammeByCinema.vue";
export default {
  name: "CinemaProgram",
  data() {
    return {
      dates: [],
      cinema: getCinemaByUrl(this.$route.params.cinemaUrl)
    };
  },
  components: {
    ProgrammeByCinema: ProgrammeByCinema
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies: function() {
      loadMoviesForCinema(this.cinema).then(cinema => {
        //to cinema je moje pojmenování těch dat, které mi ta funkce vrátila, čili celé to pole
        this.dates = cinema.info; //tady pak k těm datům přistupuju
      });
    }
  }
};
</script>

<style>
.programme-header {
  color: white;
  padding: 5px;
  background-color:black;
}

.programme-wrapper {
  padding: 20px;
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

/* info */
.cinema-detail {
  background-color: #ffd671;
  margin: 0px;
  padding: 20px;
  color:black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 5px;
}

.cinema-info {
  text-align: left;
  font-size: 12px;
  width: 100%;
}

.address-details {
  text-align: center;
  width: 100%;
  font-size: 12px;
}

.cinema-info li,
.cinema-detail li {
  list-style-type: none;
  display: inline-block;
  margin: 5px 20px;
}

.cinema-info ul,
.cinema-detail ul {
  padding: 0;
}

/* tablet */

@media screen and (min-width: 541px) {
  h3 {
    font-size: 18px;
  }

  .programme-day {
    font-size: 16px;
  }

  .programme-wrapper {
    padding: 40px;
  }

  .programme-day-date:after {
    margin-top: 15px;
  }

  .cinema-info {
    font-size: 16px;
  }

  .address-details {
    font-size: 16px;
  }

  .address-details ul {
    padding-left: 0px;
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

  .cinema-info {
    font-size: 16px;
    width: 100%;
    align-content: left;
  }

  .address-details {
    font-size: 16px;
    width: 50%;
    margin-left: 20px;
    margin-top: 50px;
  }
}
</style>
