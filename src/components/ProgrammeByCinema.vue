<template>
  <div>
    <div class="programme-day">
      <div class="programme-cinema-name">{{ date }}</div>
      <div class="movies-list">
        <div class="movie">
          <ul>
            <li v-for="(movie, index) in movies" v-bind:key="index">
              <p>{{ movie.movieName }}</p>
              <p>{{ movie.time }}</p>
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
}

.programme-day-date:after {
  content: "";
  background: linear-gradient(to right, #f27a54 25%, #a154f2 100%);
  display: block;
  height: 2.5px;
  width: 100%;
  margin-top: 10px;
}

.movie li {
  list-style-type: none;
}
.movie {
  display: flex;
  justify-content: space-between;
}

.movies-list {
  margin-bottom: 15px;
}

@media screen and (min-width: 541px) {
  .programme-day {
    font-size: 16px;
  }

  .programme-day-date:after {
    margin-top: 15px;
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
