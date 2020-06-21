<template>
  <div>
    <!--Sekce Seznam kin-->

    <div class="cinema-list">
      <div class="cinema-item">
        <div class="cinema-photo">
          <img v-bind:src="`assets/images/${image}`" v-bind:alt="`${alt}`" />
          <div class="copyright">{{ copyright }}</div>
        </div>
        <div class="cinema-name">
          <h2>{{ name }}</h2>
          <p>{{ tagline }}</p>
        </div>

        <div class="button program-button">
          <router-link :to="`/CinemaProgramme/${url}`"
            >Info & program</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CinemaDetail",
  props: [
    "name",
    "tagline",
    "link",
    "image",
    "alt",
    "copyright",
    "url",
  ],
};
</script>

<style scoped>
.button.program-button {
  z-index: 200;
}
.cinema-list {
  box-shadow: 4px 4px 8px 0px rgba(50, 50, 50, 0.27);
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
  padding: 10px 10px 10px 10px;
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

.cinema-button {
  z-index: 5;
}

.cinema-button button {
  color: black;
  border-radius: 15px;
  display: inline-block;
  padding: 1em 3em;
  border: none;
  text-decoration: none;
  background: white;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  outline: none;
}

.cinema-button button:focus {
  outline: 0;
  border-style: outset;
  border: none;
}

.cinema-button button:active {
  transform: scale(0.99);
  border-style: outset;
  border: none;
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
.button.program-button {
  padding: 0;
}
.button.program-button a {
  padding: 1em 3em;
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
  filter: brightness(50%);
  top: -40px;
}

.copyright {
  font-size: 8px;
  font-style: italic;
}



@media screen and (min-width: 541px) {
  

  .cinema-name p {
    font-size: 14px;
  }
  /*.cinema-item {
    padding-bottom: 50px;
  }*/

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

  .cinema-button button {
    padding: 1em 4em;
    font-size: 16px;
  }

  .button.program-button {
    font-size: 16px;
  }

  .copyright {
    font-size: 12px;
  }

  .cinema-detail {
    position: absolute;
    z-index: 100;
    width: 40%;
  }
}
</style>
