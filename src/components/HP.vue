<template>
  <div>
    <section class="boxy">
      <!--dle kina-->
      <div class="box">
        <div class="cameraImg">
          <img src="assets/images/camera.png" alt="logo kamery" />
        </div>

        <div class="button">
          <a href="#">Vyber kino</a>
        </div>
      </div>

      <!--dle data-->
      <div class="box">
        <div class="calendarImg">
          <img src="assets/images/calendar.png" alt="logo kalendáře" />
        </div>

        <div class="button">
          <a href="#">Vyber datum</a>
        </div>
      </div>

      <!--dle filmu-->
      <div class="box">
        <div class="ticketImg">
          <img src="assets/images/ticket.png" alt="logo lístku" />
        </div>
        <div class="button">
          <a href="#">Vyber film</a>
        </div>
      </div>
    </section>
  </div>
</template>




<script>
export default {
  name: "HP"
};
</script>

<style>
.boxy {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.box {
  background-color: #3c444c;
  box-shadow: 4px 4px 8px 0px rgba(12, 12, 12, 0.523);
  border-radius: 5px;
  margin: 10px 50px;
  padding: 5px;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cameraImg,
.ticketImg,
.calendarImg {
  height: 60%;
  margin: 0 30px;
}

.box img {
  max-width: 100px;
}

@media screen and (min-width: 541px) and (max-width: 960px) {
  .box {
    width: 400px;
    height: 300px;
    margin: 15px;
    padding: 5px;
  }

  .box img {
    max-width: 160px;
  }
}

  @media screen and (min-width: 961px) {
    .boxy {
      flex-direction: row;
      margin: 0px 30px;
    }

    .box img {
      max-width: 50%;
    }

    .box {
      margin: 15px;
      width: 33%;
      flex-grow: 1 1;
    }

    .box img {
      max-width: 200px;
    }
  }

</style>
