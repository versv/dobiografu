<template>
  <div>
    <!--Sekce Seznam kin-->

    <div class="cinema-list">
      <div class="cinema-item">
        <div class="cinema-photo">
          <img v-bind:src="`assets/images/${image}`" v-bind:alt="`${alt}`" />
        </div>
        <div class="cinema-name">
          <h2>{{ name }}</h2>
          <p>{{ tagline }}</p>
        </div>

        <div class="program-button">
          <router-link :to="`/CinemaProgramme/${url}`">Info & program »</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CinemaDetail",
  props: ["name", "tagline", "link", "image", "alt", "copyright", "url"]
};
</script>

<style scoped>
.cinema-list {
  padding: 0;
  margin: 0;
}

.cinema-name h2 {
  text-transform: uppercase;
}

.cinema-name h2,
.cinema-name p {
  color: white;
}
.cinema-list {
  background-color: black;
}
.cinema-item {
  display: flex;
  color: white;
  max-height: 200px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px 10px 20px 10px;
  position: relative;
  overflow: hidden;
}

.cinema-name {
  width: 100%;
  z-index: 10;
  padding: 10px;
}

.cinema-item p {
  font-style: italic;
  font-size: 12px;
  width: 100%;
}

.program-button {
  z-index: 5;
}

.program-button a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.program-button a:hover {
  color: #ffd671;
}

.cinema-info-heading {
  font-weight: bold;
}

.address-details li {
  list-style-type: none;
}

.address-details ul {
  padding: 0;
  padding-left: 0;
}

.address-details {
  text-align: center;
  padding-left: 0;
}

/*------------------------------------------------------------------------------------------------------Detail kina */

.cinema-wrap {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.cinema-photo {
  width: 100%;
  height: auto;
}

.cinema-photo img {
  width: 100%;
  position: absolute;
  left: 0;
  filter: brightness(35%);
  top: -40px;
}

@media screen and (min-width: 541px) {
  .cinema-name p {
    font-size: 14px;
  }

  .cinema-photo {
    width: 100%;
    height: auto;
  }

  .copyright {
    font-size: 10px;
  }
}

@media screen and (min-width: 961px) {
  .cinema-wrap {
    flex-direction: row;
  }

  .cinema-name p {
    font-size: 16px;
  }
  .cinema-photo {
    width: 50%;
    height: auto;
  }

  .cinema-photo img {
    top: 0;
  }

  .copyright {
    font-size: 12px;
  }

  .cinema-detail {
    position: absolute;
    z-index: 100;
    width: 40%;
  }

  .cinema-item {
    height: 250px;
  }
}
</style>
