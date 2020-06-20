<template>
  <div>
    <section class="cinema-overview">
      <div class="cinema-overview-header">
        <div class="ahoj">
          <div class="calendar-img">
            <img src="assets/images/calendar.png" alt="ikonka kalendáře" />
          </div>

          <div class="filtr">
            <h2>Vyber datum</h2>

            <section class="select">
              <select v-model="chosenDate" name="choose_day" id="choose_day">
                <option v-for="date in dates" :value="date.id" :key="date.id">{{ date.name }}</option>
              </select>
            </section>
          </div>

          <div class="calendar-img_b">
            <img src="assets/images/calendar.png" alt="ikonka kalendáře" />
          </div>
        </div>
      </div>
      <!--Konec sekce Vyber datum --->

      <!--Seznam kin s programem-->

      <div class="cinema-programme">
        <MovieByDate
          v-for="(cinema, index) in cinemaToday"
          v-bind:key="index"
          v-bind:cinema="cinema"
        />

        <!--data z API-->
        <!-- <div class="apify">{{ apiData }}</div> -->
        <!--část kódu, která se zobrazí v závislti na vybraném daut .programme-day-->
      </div>
    </section>
  </div>
</template>

<script>
import MovieByDate from "./MovieByDate.vue";
import { getMoviesForDate } from "../databazeFilmy";

export default {
  name: "SelectDate",
  components: {
    MovieByDate: MovieByDate
  },
  data() {
    return {
      cinemasWithMovies: [],

      cinemaToday: [],

      chosenDate: "",

      apiData: [],

      dates: [
        { name: "Dnes", id: 0 },
        { name: "Zítra", id: 1 }
      ],

      weekdays: [
        "Neděle",
        "Pondělí",
        "Úterý",
        "Středa",
        "Čtvrtek",
        "Pátek",
        "Sobota"
      ]
    };
  },

  created() {
   
    const today = new Date();
    for (let i = 2; i <= 7; i++) {
      let next = new Date();
      next.setDate(today.getDate() + i);
      this.dates.push({
        name:
          this.weekdays[next.getDay()] +
          ", " +
          next.getDate() +
          "." +
          next.getMonth() +
          "." +
          next.getFullYear(),
        id: i
      });
    }

    this.get();
  },

  methods: {
    displayApi(json) {
      this.apiData = json;
    },

    get: function() {
      getMoviesForDate("pondělí 15.6.2020").then(cinema => {
        this.cinemaToday = cinema;
      });
    }
  }
};
</script>

<style>
.ahoj {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calendar-img img {
  width: 70px;
  margin-left: 10px;
  margin-right: 10px;
}

.calendar-img_b img {
  display: none;
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
  background: #5c6664;
  overflow: hidden;
  border-radius: 0.25em;
  margin-bottom: 10px;
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

.programme-cinema-name {
  font-weight: bold;
}

.programme-cinema-name:after {
  content: "";
  background: linear-gradient(to right, #f27a54 25%, #a154f2 100%);
  display: block;
  height: 2.5px;
  width: 100%;
  margin-top: 10px;
}

/*tablet*/
@media screen and (min-width: 541px) {
  h2 {
    font-size: 28px;
  }

  .calendar-img img {
    width: 80px;
  }

  .calendar-img_b img {
    display: block;
    width: 80px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .programme-cinema-name:after {
    margin-top: 15px;
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
    width: 30vh;
  }

  .calendar-img img {
    width: 150px;
    margin-left: 10px;
  }

  .calendar-img_b img {
    display: block;
    width: 150px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
