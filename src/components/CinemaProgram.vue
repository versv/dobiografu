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
          <div class="cinema-photo">
            <img
              v-bind:src="`../assets/images/${cinema.image}`"
              v-bind:alt="`${alt}`"
            />
            <div class="copyright">{{ cinema.copyright }}</div>
          </div>
          <div class="address-details">
            <p>{{ cinema.address }}</p>
            <ul>
              <li v-for="means in cinema.transport" v-bind:key="means">
                {{ means }}
              </li>
            </ul>
          </div>
        </div>

        <div class="cinema-info">
          <div class="cinema-info-line">
            <p>
              Občerstvení:
              {{ cinema.bar }}
            </p>
            <p>
              Bezbariérové:
              {{ cinema.barrierFree }}
            </p>
          </div>
          <p>
            Speciální program:
          </p>
          <ul>
            <li v-for="type in cinema.specialProgrammeTypes" v-bind:key="type">
              {{ type }}
            </li>
          </ul>
        </div>
      </div>

      <!--Sekce Seznam kin-->
      <h2>Program kina</h2>
      <div class="programme-wrapper">
        <ProgrammeByCinema
          v-for="(date, index) in dates"
          v-bind:date="date.datum"
          v-bind:movies="date.movies"
          v-bind:key="index"
        />

        <div class="message" v-if="dates.length === 0">
          Program brzy doplníme.
        </div>
      </div>
      <div class="tickets-button">
        <a :href="`${cinema.link}`">Koupit lístky</a>
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
      cinema: getCinemaByUrl(this.$route.params.cinemaUrl),
    };
  },
  components: {
    ProgrammeByCinema: ProgrammeByCinema,
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies: function() {
      loadMoviesForCinema(this.cinema).then((cinema) => {
        //to cinema je moje pojmenování těch dat, které mi ta funkce vrátila, čili celé to pole
        this.dates = cinema.info; //tady pak k těm datům přistupuju
      });
    },
  },
};
</script>

<style>
.programme-header {
  color: white;
  padding: 5px;
  background-color: black;
}

.programme-wrapper {
  padding: 20px;
}

.cinema-photo img {
  width: 100%;
  height: auto;
}

.copyright {
  font-size: 8px;
  font-style: italic;
}

.programme-header h3 {
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
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
  max-width: 40%;
  margin: 0 auto;
  background: black;
  text-align: center;
  padding: 0px;
  text-transform: uppercase;
}

.tickets-button a {
  color: white;
  padding: 10px;
  text-decoration: none;
  display: block;
}

.tickets-button a:hover {
  font-weight: bold;
}

/* info */

.cinema-wrap {
  border-bottom: 1px dashed black;
}

.cinema-detail {
  background-color: #ffd671;
  margin: 0px;
  padding: 20px;
  color: black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 5px;
}

.cinema-info {
  text-align: left;
  font-size: 14px;
  width: 100%;
}

.cinema-info p {
  text-transform: uppercase;
  font-weight: 500;
}

.address-details {
  text-align: left;
  width: 100%;
  font-size: 14px;
}

.address-details p {
  font-weight: 500;
  border-bottom: 1px dashed black;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.address-details ul {
  margin-left: -20px;
  padding: 0;
}

.cinema-info li,
.cinema-detail li {
  list-style-type: none;
  display: inline-block;
  margin: 5px 20px;
}

.cinema-info ul {
  padding: 0;
  margin-left: -20px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  flex-wrap: wrap;
}

.message {
  padding: 10px;
  font-size: 14px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  font-style: italic;
}

/* tablet */

@media screen and (min-width: 541px) {
  .programme-header h3 {
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

  .address-details,
  .message {
    font-size: 16px;
  }

  .copyright {
    font-size: 10px;
  }

  .cinema-info-line {
    display: flex;
    justify-content: space-between;
  }

  .tickets-button {
    width: 30%;
  }
}

/* desktop */

@media screen and (min-width: 961px) {
  .programme-header h3 {
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
    flex: 0 0 50%;
  }

  .cinema-info p {
    padding-left: 30px;
  }

  .address-details {
    font-size: 16px;
    width: 100%;
    margin-left: 20px;
    margin-top: 15px;
  }

  .address-details p {
    padding: 0;
    border: none;
    margin-left: -10px;
  }
  .cinema-info ul {
    margin-left: 10px;
  }
  .address-details ul {
    margin-left: -30px;
  }

  .cinema-wrap {
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;
    border-bottom: none;
  }

  .cinema-name p {
    font-size: 16px;
  }
  .cinema-photo {
    width: 100%;
    height: auto;
  }

  .copyright {
    font-size: 12px;
    padding-bottom: 10px;
  }

  .cinema-detail {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .cinema-info li {
    width: 100%;
  }

  .cinema-info-line {
    display: block;
  }

  .tickets-button {
    width: 20%;
  }

  .tickets-button a {
    font-size: 18px;
  }

  .programme-wrapper {
    width: 80%;
    margin-left: 5%;
    padding: 0;
  }
}
</style>
