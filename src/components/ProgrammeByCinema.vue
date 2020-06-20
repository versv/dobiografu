<template>
  <div>
    <div class="programme-day">
      <div class="programme-cinema-name">{{ date }}</div>
      <div class="movies-list">
        <div class="movie">
          <ul>
            <li v-for="(movie, index) in movies" v-bind:key="index">
              <p>{{ movie.name }}</p>
              <p><span class="comma"  v-for="(time, index) in movie.times" v-bind:key="index">{{ time }}</span></p>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgrammeByCinema",
  props: ["date", "movies"],
};
</script>

<style>

.programme-day {
  text-align: left;
}

.programme-day-date {
  font-weight: bold;
  padding: 10px;
}

.programme-day-date:after {
  content: "";
  background: linear-gradient(to right, #f27a54 25%, #a154f2 100%);
  display: block;
  height: 2.5px;
  width: 100%;
  margin-top: 5px;
}

.movie li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.movie ul {
  padding: 0;
  width: 100%;
}

.movie p {
  margin: 3px;
}

.comma:not(:first-child):before {
  content: ", ";
}


.movies-list {
  margin-bottom: 15px;
}

@media screen and (min-width: 541px) {
  .programme-day {
    font-size: 16px;
  }

  .programme-day-date:after {
    margin-top: 10px;
  }
}

@media screen and (min-width: 961px) {
  .programme-day {
    font-size: 16px;
  }

  .cinema-programme {
    padding: 40px;
  }
}
</style>
