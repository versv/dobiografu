<template>
  <div>
    <div class="programme-day">
      <div class="programme-cinema-name">{{name}}</div>
      <div class="movies-list">
        <div class="movie">
          <p>{{movieName}}</p>
          <p>{{time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieByDate",
  props: ["name", "movieName", "time", "idx"]
};
</script>


<style lang="stylus" scoped></style>