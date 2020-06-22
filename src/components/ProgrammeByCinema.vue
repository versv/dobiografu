<template>
  <div>
    <div class="programme-day">
      <div class="programme-cinema-name">{{ date.split(" ")[1] }}</div>
      <div class="movies-list">
        <div class="movie">
          <ul>
            <li v-for="(movie, index) in sortedMovies" v-bind:key="index">
              <p>{{ movie.name }}</p>
              <p>
                <span
                  class="comma"
                  v-for="(time, index) in movie.times"
                  v-bind:key="index"
                >{{ time }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cinemaList } from "../databaze";
export default {
  name: "ProgrammeByCinema",
  props: [
    "date",
    "movies",
    "address",
    "tagline",
    "specialProgramme",
    "specialProgrammeTypes",
    "barrierFree",
    "bar",
    "transport",
    "link",
    "image",
    "alt",
    "copyright",
    "url"
  ],
  data() {
    return {
      sortedMovies: [...this.movies].sort((a, b) => {
        return a.times[0].localeCompare(b.times[0]);
      }),
      cinemaList: cinemaList
    };
  }
};
</script>

<style>
.movie li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #e0d9d3;
}

.movie ul {
  padding: 0;
  width: 100%;
  border-top: 1px dashed black;
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

</style>
