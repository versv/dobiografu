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
              <select name="choose_day" id="choose_day">
                <option v-for="Date in dates" :value="Date.id" :key="Date.id">{{ Date.name }}</option>
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
          v-for="(film, index) in moviesList"
          v-bind:name="film.name"
          v-bind:movieName="film.dates[0].movies [0].movieName"
          v-bind:time="film.dates[0].movies[0].time"
          v-bind:idx="index"
          v-bind:key="index"
        />

        <!--data z API-->
        <div class="apify">{{ apiData }}</div>
        <!--část kódu, která se zobrazí v závislti na vybraném daut .programme-day-->
      </div>
    </section>
  </div>
</template>

<script>
import MovieByDate from "./MovieByDate.vue";
import moviesList from "../databazeFilmy";
export default {
  name: "SelectDate",
  components: {
    MovieByDate: MovieByDate
  },
  data() {
    return {
      moviesList: moviesList,
      /*movieList: [
        {
          name: "Kino Světozor",
          dates: [
            {
              date: "22.6.2020",
              movies: [
                {
                  movieName: "Emma",
                  time: "15:00"
                }
              ]
            },
            {
              date: "23.6.2020",
              movies: [
                {
                  movieName: "Cyrano z Bergeracu (NT Live)",
                  time: "20:00"
                }
              ]
            },
            {
              date: "24.6.2020",
              movies: [
                {
                  movieName: "Vysoká dívka",
                  time: "15:00"
                }
              ]
            },
            {
              date: "25.6.2020",
              movies: [
                {
                  movieName: "Hamlet (NT Live)",
                  time: "20:00"
                }
              ]
            },
            {
              date: "26.6.2020",
              movies: [
                {
                  movieName: "Můj otec Antonín Kratochvíl",
                  time: "15:00"
                }
              ]
            },
            {
              date: "29.6.2020",
              movies: [
                {
                  movieName: "Emma",
                  time: "15:00"
                },
                {
                  movieName: "Imunita z pohledu psychosomatiky",
                  time: "18:00"
                }
              ]
            },
            {
              date: "30.6.2020",
              movies: [
                {
                  movieName: "Cyrano z Bergeracu (NT Live)",
                  time: "20:00"
                }
              ]
            },
            {
              date: "3.7.2020",
              movies: [
                {
                  movieName: "Než skončí léto",
                  time: "20:00"
                }
              ]
            },
            {
              date: "4.7.2020",
              movies: [
                {
                  movieName: "Jalda, noc odpuštění",
                  time: "17:00"
                },
                {
                  movieName: "Luxor",
                  time: "20:00"
                }
              ]
            },
            {
              date: "5.7.2020",
              movies: [
                {
                  movieName: "Mogul Mauglí",
                  time: "17:00"
                },
                {
                  movieName: "Jsme jedné krve",
                  time: "20:00"
                }
              ]
            }
          ]
        },
        {
          name: "Lucerna",
          dates: [
            {
              date: "22.6.2020",
              movies: [
                {
                  movieName: "V síti (+15)",
                  time: "13:30"
                },
                {
                  movieName: "Raoul Taburin",
                  time: "15:30"
                },
                {
                  movieName: "Bourák",
                  time: "17:00"
                },
                {
                  movieName: "Dokud se tančí",
                  time: "17:45"
                },
                {
                  movieName: "Bourák",
                  time: "19:30"
                },
                {
                  movieName: "Kalifornský sen",
                  time: "20:15"
                }
              ]
            },
            {
              date: "23.6.2020",
              movies: [
                {
                  movieName: "Bourák",
                  time: "15:30"
                },
                {
                  movieName: "V síti (+15)",
                  time: "15:45"
                },
                {
                  movieName: "Bourák",
                  time: "18:00"
                },
                {
                  movieName: "Raoul Taburin",
                  time: "18:15"
                },
                {
                  movieName: "Kalifornský sen",
                  time: "20:30"
                },
                {
                  movieName: "Bourák",
                  time: "20:45"
                }
              ]
            },
            {
              date: "24.6.2020",
              movies: [
                {
                  movieName: "Vysoká dívka",
                  time: "15:00"
                }
              ]
            },
            {
              date: "26.6.2020",
              movies: [
                {
                  movieName: "Trafikant",
                  time: "13:30"
                }
              ]
            },
            {
              date: "27.6.2020",
              movies: [
                {
                  movieName: "Lassie se vrací",
                  time: "13:00"
                }
              ]
            },
            {
              date: "28.6.2020",
              movies: [
                {
                  movieName: "Lassie se vrací",
                  time: "13:00"
                }
              ]
            },
            {
              date: "29.6.2020",
              movies: [
                {
                  movieName: "Bourák",
                  time: "13:30"
                }
              ]
            }
          ]
        }
      ],*/

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
    fetch(
      "https://api.apify.com/v2/datasets/mF3iLaWJ6zq5fUCSy/items?format=json&clean=1"
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .then(json => this.displayApi(json));

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
  },

  methods: {
    displayApi(json) {
      this.apiData = json;
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
