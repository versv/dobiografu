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
              <select name="choose_day" id="choose_day" v-model="chosenDay">
                <option class="day" value="today">Dnes</option>
                <option class="day" value="tomorrow">Zítra</option>
                <option class="day" value="day3">středa 26. 7. 2020</option>
                <option class="day" value="day4">čtvrtek 26. 7. 2020</option>
                <option class="day" value="day5">pátek 26. 7. 2020</option>
                <option class="day" value="day6">sobota 26. 7. 2020</option>
                <option class="day" value="day7">neděle 26. 7. 2020</option>
              </select>
            </section>
          </div>

          <!--- <select name="choose_day" id="choose_day" v-model="chosenDay">
                <option class="day" 
                v-for="(option, index)in options" 
                v-bind:value="option.value"
                v-bind:key="index"
                > {{option.text}}
          </option>-->

          <div class="calendar-img_b">
            <img src="assets/images/calendar.png" alt="ikonka kalendáře" />
          </div>
        </div>
      </div>
      <!--Konec sekce Vyber datum --->

      <!--Seznam kin s programem-->

      <div class="cinema-programme">
        <div class="apify">ahoj {{ apiData }}</div>
        <!--část kódu, která se zobrazí v závislti na vybraném daut .programme-day-->
        <div class="programme-day">
          <div class="programme-cinema-name">Kino Pilotů</div>
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
        <!--část kódu, která se zobrazí v závislti na vybraném daut .programme-day-->
        <div class="programme-day">
          <div class="programme-cinema-name">Kino Lucerna</div>
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
export default {
  name: "SelectDate",
  data() {
    return {
      chosenDay: "today",

      apiData: [],

      /*options: [
        { text: "dnes", value: "všechna kina dnes" },
        { text: "zítra", value: "všechna kina zítra" },
        { text: "dalších 7 dní", value: "všechna kina dalších 7 dní" },
        { text: "vše", value: "celý program všech kin" }
      ]*/
    };
  },

  created() {
    fetch(
      "https://api.apify.com/v2/datasets/mF3iLaWJ6zq5fUCSy/items?format=json&clean=1"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json;
      })
      .then((json) => this.displayApi(json));
  },

  methods: {
    displayApi(json) {
      this.apiData = json;
    },
  },
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
