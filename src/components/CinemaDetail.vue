<template>
  <div>
    <!--Sekce Seznam kin-->

    <div class="cinema-list">
      <div class="cinema-item">
        <div class="cinema-name">
          <h2>{{ name }}</h2>
          <p>{{ tagline }}</p>
        </div>
        <div class="cinema-button">
          <button v-on:click="visible = !visible">Detail kina</button>
        </div>
      </div>

      <div v-show="visible" class="cinema-detail">
        <div class="cinema-wrap">
          <div class="cinema-photo">
            <img v-bind:src="`assets/images/${image}`" v-bind:alt="`${alt}`" />
            <div class="copyright">{{ copyright }}</div>
          </div>

          <div class="address-details">
            <p>{{ address }}</p>
            <ul>
              <li v-for="means in transport" v-bind:key="means">{{ means }}</li>
            </ul>
          </div>
        </div>

        <div class="cinema-info">
          <p>
            <b>Občerstvení:</b>
            {{ bar }}
          </p>
          <p>
            <b>Bezbariérové:</b>
            {{ barrierFree }}
          </p>
          <p>
            <b>Speciální program:</b>
          </p>
          <ul>
            <li v-for="type in specialProgrammeTypes" v-bind:key="type">
              {{ type }}
            </li>
          </ul>
        </div>

        <div class="button program-button">
          <router-link :to="`/CinemaProgramme/${url}`"
            >Program kina</router-link
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
    "url",
  ],
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped>
.cinema-list {
  box-shadow: 4px 4px 8px 0px rgba(50, 50, 50, 0.27);
  padding-bottom: 1px;
}

.cinema-name h2,
.cinema-name p {
  color: #30363d;
}

.cinema-item {
  display: flex;
  color: white;
  max-height: 200px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  border-top: 1px solid #3c444c;
  margin-bottom: 10px;
  padding: 10px 10px 10px 10px;
}

.cinema-name {
  width: 100%;
}

.cinema-item p {
  font-style: italic;
  font-size: 12px;
  width: 100%;
}

.cinema-button button {
  color: white;
  border-radius: 15px;
  display: inline-block;
  padding: 1em 3em;
  border: none;
  text-decoration: none;
  background: #3c444c;
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
/*------------------------------------------------------------------------------------------------------Detail kina */

.cinema-detail {
  background-color: #3c444c;
  margin: 0px;
  padding: 20px;
  box-shadow: 4px 4px 8px 0px rgba(50, 50, 50, 0.27);
  color: white;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

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
}

.copyright {
  font-size: 8px;
  font-style: italic;
}

.cinema-info {
  text-align: left;
  font-size: 12px;
  width: 100%;
}

.address-details {
  text-align: center;
  width: 100%;
  font-size: 12px;
}

.program-button {
}

.program-button a {
  color: black;
}

.cinema-info li {
  list-style-type: none;
  display: inline-block;
  margin: 5px 20px;
}

.cinema-info ul {
  padding: 0;
}

@media screen and (min-width: 541px) {
  .cinema-detail {
    padding: 40px;
  }

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

  .cinema-button button,
  .program-button {
  }

  .cinema-info {
    font-size: 16px;
  }

  .address-details {
    font-size: 16px;
  }

  .address-details ul {
    padding-left: 0px;
  }

  .program-button a {
    padding: 10px;
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
  .cinema-info {
    font-size: 16px;
    width: 100%;
    align-content: left;
  }

  .address-details {
    font-size: 16px;
    width: 50%;
    margin-left: 20px;
    margin-top: 50px;
  }

  .cinema-button button {
    padding: 1em 4em;
    font-size: 16px;
  }

  .program-button {
    width: 50%;
    margin-right: 30px;
  }

  .program-button a {
    padding: 1em 4em;
  }

  .copyright {
    font-size: 12px;
  }
}
</style>
