<template>
  <div>
    <section class="cinema-overview">
      <div class="cinema-overview-header">
        <div class="ahoj">
          <div class="ticket-img">
            <img src="assets/images/ticket.png" alt="ikonka lístku" />
          </div>

          <div class="filtr">
            <h2>Vyber film</h2>

            <section class="select">
              <select
                name="choose_movie"
                id="choose_movie"
                v-model="chosenMovie"
              >
                <option
                  v-for="movie in uniqueMovies"
                  v-bind:key="movie"
                  v-bind:value="movie"
                  >{{ movie }}</option
                >
              </select>
            </section>
          </div>

          <div class="ticket-img_b">
            <img src="assets/images/ticket.png" alt="ikonka lístku" />
          </div>
        </div>
      </div>
      <!--Konec sekce Vyber datum --->

      <!--Seznam kin, co hrají vybraný film-->

      <div class="cinema-programme">
        <div class="programme-day">
          <div class="programme-movie-name">{{ chosenMovie }}</div>
          <div class="cinemas">
            <!-- níže je část kód která se zobrazí v závisloti na vybraném filmu-->
            <ProgrammeByMovie
              v-for="(schedule, index) in schedules"
              v-bind:key="index"
              v-bind:cinemaName="schedule.cinemaName"
              v-bind:schedules="schedule.schedule"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="animated">
      <img id="cam" src="assets/images/stativ.png" alt="kamera" />
    </div>
  </div>
</template>

<script>
import ProgrammeByMovie from "../components/ProgrammeByMovie.vue";
import { getUniqueMovies, getScheduleByMovie } from "../databazeFilmy";

export default {
  name: "SelectMovie",
  components: {
    ProgrammeByMovie: ProgrammeByMovie,
  },

  data() {
    return {
      chosenMovie: "",

      uniqueMovies: [],

      schedules: [],
    };
  },
  watch: {
    chosenMovie: function(newChosenMovie) {
      getScheduleByMovie(newChosenMovie).then((schedule) => {
        console.log("sifhsifhsuifh", schedule);
        this.schedules = schedule;
      });
    },
  },

  created() {
    getUniqueMovies().then((apiMovies) => {
      this.uniqueMovies = apiMovies;
    });
  },
};
</script>

<style>
.cinema-overview-header {
  background-color: black;
  color: white;
  width: 100%;
}

.cinema-programme {
  padding: 5px;
}

.ahoj {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background-image: none;
  background-color: #e0d9d3;

  flex: 1;
  padding: 0 0.5em;
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
}

select::-ms-expand {
  display: none;
}

.select {
  position: relative;
  display: flex;
  height: 2em;
  line-height: 2;
  background: #5c6664;
  overflow: hidden;
  border-radius: 0.25em;
  margin-bottom: 10px;
  width: 25vh;
}

.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  background: #2b2e2e;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}

.select:hover::after {
  color: #f27a54;
}
.ticket-img img {
  width: 90px;
  margin-left: 10px;
  margin-right: 10px;
}
.ticket-img_b img {
  display: none;
}

.cinemas {
  margin-bottom: 15px;
}

.programme-movie-name {
  padding: 10px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
}

/*tablet*/
@media screen and (min-width: 541px) {
  h2 {
    font-size: 28px;
    text-align: center;
  }

  .ticket-img img {
    width: 100px;
  }

  .ticket-img_b img {
    display: block;
    width: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }
}

/*desktop*/
@media screen and (min-width: 961px) {
  select {
    font-size: 18px;
  }

  .select {
    display: inline-flex;
    height: 3em;
    line-height: 3;
    width: 20vh;
  }

  .ticket-img img {
    width: 150px;
    margin-left: 30px;
  }

  .ticket-img_b img {
    display: block;
    width: 150px;
    margin-right: 30px;
  }
  .schedule {
    display: flex;
  }
  .programme-movie-name {
    display: none;
  }

  .animated {
    text-align: center;
  }

  #cam {
    width: 100px;
    margin-top: 30px;
  }
}
</style>
