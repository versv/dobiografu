<template>
  <div>
     <!--Sekce Seznam kin-->

      <div class="cinema-list">
        <div class="cinema-item">
          <div class="cinema-name">
            <h2>{{name}}</h2>
            <p>{{tagline}}</p>
          </div>
          <div class="button cinema-button">
            <a href="#" v-on:click="visible= !visible">Detail kina</a>
          </div>
        </div>

        <div v-show="visible" class="cinema-detail">
          <div class="cinema-photo"
            v-bind:src="`${image}`" v-bind:alt="`${alt}`">
            <div class="copyright">{{copyright}}</div>
          </div>

          <div class="address-details">
            <p>{{address}}</p>
            <p>{{transport}}</p>
          </div>

          <div class="cinema-info">
            <p><b>Občerstvení:</b> {{bar}} </p>
            <p><b>Bezbariérové:</b> {{barrierFree}}</p>
            <p><b>Speciální program:</b> {{specialProgrammeTypes}}</p>
          </div>

          <div class="button program-button">
            <router-link to="/CinemaProgramme">Program kina</router-link>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: "CinemaDetail",
  props: ["name", "address", "tagline", "specialProgramme", "specialProgrammeTypes", "barrierFree", "bar", "transport", "link", "image", "alt", "copyright"],
  data() {
    return {
      visible: false
    }
  }

}
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
  height: 150px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  border-top: 1px solid #3c444c;
  margin-bottom: 10px;
  padding: 0 20px 20px 20px;
}

.cinema-name {
  width: 100%;
}

.cinema-item p {
  font-style: italic;
  font-size: 12px;
  width: 100%;
}

.cinema-button {
  width: 60%;
  background-color: #3c444c;
}

.cinema-button a {
  color: white;
}

.cinema-info-heading {
  font-weight: bold;
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

.cinema-photo {
  width: 100%;
  height: auto;
  
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
  font-size: 14px;
}

.program-button {
  width: 60%;
}

.program-button a {
  color: black;
}

@media screen and (min-width: 541px) {
  .cinema-name p {
    font-size: 14px;
  }
  .cinema-item {
    padding-bottom: 50px;
  }

  .cinema-photo {
    width: 100%;
    height: auto;
  }

  .cinema-button,
  .program-button {
    width: 50%;
  }

  .cinema-info {
    font-size: 16px;
  }

  .address-details {
    font-size: 18px;
  }

  .program-button a {
    padding: 10px;
  }

  .copyright {
    font-size: 10px;
  }
}


@media screen and (min-width: 961px) {
  .cinema-name p {
    font-size: 16px;
  }
  .cinema-photo {
    width: 50%;
    height: auto;
  }
  .cinema-info {
    font-size: 20x;
    width: 50%;
    align-content: left;
  }

  .address-details {
    font-size: 20px;
    width: 50%;
  }

  .cinema-button {
    width: 50%;
  }

  .program-button {
    width: 50%;
    margin-right: 30px;
  }

  .program-button a {
    padding: 5px;
  }

  .copyright {
    font-size: 12px;
  }

  .cinema-detail {
    justify-content: space-between;
    align-items: center;
  }
}

</style>