<template>
  <div>
    <div class="programme-day">
      <div class="programme-cinema-name">{{ cinema.name }}</div>
      <div class="movies-list">
        <div class="movie" v-for="(movie, index) in cinema.movies" v-bind:key="index">
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


<style lang="stylus" scoped></style>