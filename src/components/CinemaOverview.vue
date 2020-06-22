<template>
  <section class="cinema-overview">
    <div class="cinema-overview-header">
      <div class="ahoj">
        <div class="camera-img">
          <img src="assets/images/camera.png" alt="logo kamery" />
        </div>
        <h2>Přehled kin</h2>
        <div class="camera-img-flipped">
          <img src="assets/images/camera.png" alt="logo kamery" />
        </div>
      </div>
    </div>

    <div class="cinema-list-items">
      <CinemaDetail 
        v-for="(cinema, index) in cinemaList"
        v-bind:name="cinema.name"
        v-bind:address="cinema.address"
        v-bind:tagline="cinema.tagline"
        v-bind:specialProgramme="cinema.SpecialProgramme"
        v-bind:specialProgrammeTypes="cinema.specialProgrammeTypes"
        v-bind:barrierFree="cinema.barrierFree"
        v-bind:bar="cinema.bar"
        v-bind:transport="cinema.transport"
        v-bind:image="cinema.image"
        v-bind:alt="cinema.alt"
        v-bind:copyright="cinema.copyright"
        v-bind:url="cinema.url"
        v-bind:key="index"
        
        
      />
    </div>
  </section>
</template>

<script>
import CinemaDetail from "./CinemaDetail.vue";
import { cinemaList } from "../databaze";

export default {
  name: "CinemaOverview",
  data() {
    return {
      cinemaList: cinemaList,
    };
  },
  components: {
    CinemaDetail: CinemaDetail,
  },
};
</script>

<style scoped>

 .cinema-list-items > div {
   border-top: 2px solid white;
 }
.ahoj {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.camera-img img {
  width: 50px;
  margin-left: 10px;
}

.camera-img-flipped img {
  display: none;
  width: 90px;
  margin-right: 10px;
  transform: rotateY(180deg);
}

/*tablet*/
@media screen and (min-width: 541px) {
  h2 {
    font-size: 28px;
  }

  .camera-img img,
  .camera-img-flipped img {
    display: block;
    width: 100px;
  }

  
}

/*desktop*/
@media screen and (min-width: 961px) {
  h2 {
    font-size: 32px;
  }
  .cinema-filter {
    width: 70%;
  }

  .camera-img img,
  .camera-img-flipped img {
    display: block;
    width: 120px;
  }

  .cinema-list-items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .cinema-list-items > div {
    flex: 0 0 50%;
    box-sizing: border-box;
  }
  .cinema-list-items > div:nth-child(2n + 1) {
    border-right: 2px solid white;
  }

  
}
</style>
