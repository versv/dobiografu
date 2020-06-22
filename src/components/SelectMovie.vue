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

            <section class="select" id="select-movie">
              <select name="choose_movie" id="choose_movie" v-model="chosenMovie">
                <option
                  v-for="movie in uniqueMovies"
                  v-bind:key="movie"
                  v-bind:value="movie"
                >{{ movie }}</option>
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
        <div class="select-movie">
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
    <div class="camera">
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
    ProgrammeByMovie: ProgrammeByMovie
  },

  data() {
    return {
      chosenMovie: "",

      uniqueMovies: [],

      schedules: []
    };
  },
  watch: {
    chosenMovie: function(newChosenMovie) {
      getScheduleByMovie(newChosenMovie).then(schedule => {
        console.log("sifhsifhsuifh", schedule);
        this.schedules = schedule;
      });
    }
  },

  created() {
    getUniqueMovies().then(apiMovies => {
      this.uniqueMovies = apiMovies;
    });
  }
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
  font-size: 1em;
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
  background: #e0d9d3;
  overflow: hidden;

  margin-bottom: 10px;
}

.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  color: black;
  background: #fdd673;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}

.select:hover::after {
  color: #2b2e2e;
}

#select-movie {
  width: 30vh;
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
  padding-top: 10px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
}

.animated {
  text-align: center;
}

#cam {
  width: 50px;
  margin-top: 30px;
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

  #select-movie {
    width: 45vh;
  }
}

/*desktop*/
@media screen and (min-width: 961px) {
  select {
    font-size: 18px;
  }

  .select {
    display: inline-flex;
    height: 2em;
    line-height: 2;
  }

  #select-movie {
    width: 75vh;
  }
  .ticket-img img {
    width: 120px;
    margin-left: 30px;
  }

  .ticket-img_b img {
    display: block;
    width: 120px;
    margin-right: 30px;
  }

  .select-movie {
    padding: 10px;
  }

  .schedule {
    display: flex;
  }

  .camera {
    text-align: center;
  }

  #cam {
    width: 80px;
    margin-top: 50px;
  }
}
</style>
