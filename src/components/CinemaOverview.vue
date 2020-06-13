<template>
  <div>
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

      <!--Konec sekce Výběr kina-->

      <!--Sekce Seznam kin-->

      <div class="cinema-list">
        <div class="cinema-item">
          <div class="cinema-name">
            <h2>Kino Lucerna</h2>
            <p>
              "Elegance sama. V secesním kinosále si připadáte jako v divadle. V
              malém sále vám zase bude dělat společnost James Dean.
            </p>
          </div>
          <div class="button cinema-button">
            <a href="#">Detail kina</a>
          </div>
        </div>

        <div class="cinema-detail">
          <div class="cinema-photo">
            <img src="assets/images/lucerna.png" alt="kino Lucerna" />
            <div class="copyright">©Kino Lucerna</div>
          </div>

          <div class="address-details">
            <p>Adresa: Lazarská 25, Praha 1</p>
            <p>MHD: 17, 18, 25, Metro C</p>
          </div>

          <div class="cinema-info">
            <p>Občerstvení:</p>
            <p>Bezbariérovost:</p>
            <p>Speciální program:</p>
          </div>

          <div class="button program-button">
            <router-link to="/CinemaProgramme">Program kina</router-link>
          </div>
        </div>

        <div class="cinema-item">
          <div class="cinema-name">
            <h2>Kino Světozor</h2>
            <p>
              „Domov slavného Kinoautomatu a bývalý kabaret. Kankán se tu už
              netancuje, ale atmosféra je pořád špičková.“
            </p>
          </div>
          <div class="button cinema-button">
            <a href="#">Detail kina</a>
          </div>
        </div>

        <div class="cinema-item">
          <div class="cinema-name">
            <h2>Bio Oko</h2>
            <p>
              „Oblíbené nejen letenskými hipstery. Je libo shlédnout film z
              pohodlí staré karosérie nebo plážového lehátka?“
            </p>
          </div>
          <div class="button cinema-button">
            <a href="#">Detail kina</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CinemaOverview"
};
</script>



<style>
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
  width: 50px;
  margin-right: 10px;
  transform: rotateY(180deg);
}

.cinema-overview {
  margin: 0 auto;
  padding: 0px;
  width: 70%;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(50, 50, 50, 0.27);
  background-color: #b0adbe;
  font-size: 12px;
}

.cinema-overview-header {
  background-color: #3c444c;
  align-items: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#cinema-menu {
  width: 120px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin-right: 20px;
}

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

.cinema-detail img {
  width: 100%;
  height: auto;
  border-radius: 5px;
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

/*tablet*/
@media screen and (min-width: 541px) {
  h2 {
    font-size: 28px;
  }

  .cinema-name p {
    font-size: 14px;
  }

  .camera-img img,
  .camera-img-flipped img {
    display: block;
    width: 80px;
  }

  .cinema-item {
    padding-bottom: 50px;
  }

  .cinema-detail img {
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

/*desktop*/
@media screen and (min-width: 961px) {
  h2 {
    font-size: 32px;
  }
  .cinema-filter {
    width: 70%;
  }

  .cinema-name p,
  .instructions {
    font-size: 16px;
  }
  .cinema-photo {
    width: 50%;
    height: auto;
  }

  .camera-img img,
  .camera-img-flipped img {
    display: block;
    width: 150px;
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
