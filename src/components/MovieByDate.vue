<template>
  <div>
    <div class="programme-day">
      <div class="programme-cinema-name">{{ cinema.name }}</div>
      <div class="movies-list">
<<<<<<< HEAD
        <div class="movie">
          <p>{{title}}</p>
          <p>{{time}}</p>
=======
        <div class="movie" v-for="(movie, index) in cinema.movies" v-bind:key="index">
          <p>{{ movie.movieName }}</p>
          <p>{{ movie.time }}</p>
>>>>>>> 02b544096bfe4fb9c6e3982ef1f249ca87d6c6a8
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