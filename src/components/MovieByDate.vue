<template>
  <div>
    <div class="programme-day">
      <div class="programme-cinema-name">{{ cinema.name }}</div>
      <div class="movies-list">
        <div class="program-of-cinema" v-for="(movie, index) in cinema.movies" v-bind:key="index">
          <p>{{ movie.movieName }}</p>
          <p>{{ movie.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieByDate",
  props: ["cinema"]
};
</script>

<style>
.programme-cinema-name {
  padding: 10px;
  text-transform: uppercase;
  font-size: 18px;
}

.program-of-cinema {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px dashed #e0d9d3;
}

@media screen and (min-width: 541px) {
}

@media screen and (min-width: 961px) {
  p {
    margin: 0;
    padding: 10px;
  }

  .programme-day {
    display: flex;
    margin: 0px 150px 0px 100px;
  }

  .programme-cinema-name {
    flex-basis: 20vh;
    text-align: right;
    margin-right: 10px;
  }
  .movies-list {
    flex-grow: 1;
  }
}
</style>
