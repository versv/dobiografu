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
                <option
                  v-for="date in dates"
                  :value="date.name"
                  :key="date.id"
                >{{ date.displayName }}</option>
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

        <!--část kódu, která se zobrazí v závislti na vybraném daut .programme-day-->
      </div>
    </section>
  </div>
</template>

<script>
import MovieByDate from "./MovieByDate.vue";
import { getMoviesForDate, formatDate } from "../databazeFilmy";

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

      dates: [],

      weekdays: [
        "neděle",
        "pondělí",
        "úterý",
        "středa",
        "čtvrtek",
        "pátek",
        "sobota"
      ]
    };
  },

  watch: {
    chosenDate: function(newChosenDate, chosenDate) {
      this.get(newChosenDate);
    }
  },

  created() {
    const today = new Date();
    for (let i = 0; i <= 7; i++) {
      let next = new Date();
      next.setDate(today.getDate() + i);
      const name = formatDate(next);
      let displayName = "";
      if (i === 0) {
        displayName = "Dnes";
      } else if (i === 1) {
        displayName = "Zítra";
      } else {
        displayName = name;
      }
      this.dates.push({
        name: name,
        displayName: displayName,
        id: i
      });
    }

    const todayName = this.dates[0].name;
    this.get(todayName);
    this.chosenDate = todayName;
  },

  methods: {
    displayApi(json) {
      this.apiData = json;
    },

    get: function(date) {
      getMoviesForDate(date).then(cinema => {
        this.cinemaToday = cinema;
      });
    }
  }
};
</script>

<style>
.cinema-overview-header {
  background-color: black;
  color: white;
}

.cinema-programme {
  padding: 5px;
}

.ahoj {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
}

.calendar-img img {
  width: 90px;
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
  background: #e0d9d3;
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

/*tablet*/
@media screen and (min-width: 541px) {
  h2 {
    font-size: 28px;
  }

  .calendar-img img {
    width: 150px;
  }

  .calendar-img_b img {
    display: block;
    width: 150px;
    margin-left: 10px;
    margin-right: 10px;
  }
}

/*desktop*/
@media screen and (min-width: 961px) {
  .cinema-overview {
    margin: 0 50px;
  }

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
    margin-left: 20px;
  }

  .calendar-img_b img {
    display: block;
    width: 150px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .programme-cinema-name {
    height: 30px;
  }
  .cinema-programme {
    padding: 0;
  }
}
</style>
