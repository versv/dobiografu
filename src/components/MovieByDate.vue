<template>
  <div>
    <div class="programme-day">
      <div class="programme-cinema-name">{{cinema}}</div>
      <div class="movies-list">
        <div class="movie">
          <p>{{title}}</p>
          <p>{{time}}</p>
        </div>
     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieByDate",
  props: ["cinema", "title", "time", "idx"]
};
</script>


<style lang="stylus" scoped></style>