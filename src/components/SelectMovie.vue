<template>
  <div>
    <section class="cinema-overview">
      <div class="cinema-overview-header">
        <div class="ahoj">
          <div class="ticket-img">
            <img src="assets/images/ticket.png" alt="ikonka lístku" />
          </div>

          <div class="filtr">
            <h2>Vyber film</h2>

            <section class="select">
              <select name="choose_movie" id="choose_movie">
                <option selected disabled>Filmotéka</option>
                <option class="film" value="movie1">Film1</option>
                <option class="film" value="movie2">Film2</option>
                <option class="film" value="movie3">Film3</option>
                <option class="film" value="movie4">Film4</option>
                <option class="film" value="movie5">Film5</option>
                <option class="film" value="movie6">Film6</option>
                <option class="film" value="movie7">Film7</option>
                <option class="film" value="movie8">Film8</option>
              </select>
            </section>
          </div>

          <div class="ticket-img_b">
            <img src="assets/images/ticket.png" alt="ikonka lístku" />
          </div>
        </div>
      </div>
      <!--Konec sekce Vyber datum --->

      <!--Seznam kin, co hrají vybraný film-->

      <div class="cinema-programme">
        <div class="programme-day">
          <div class="programme-movie-name">Název filmu</div>
          <div class="cinemas">
            <div class="schedule">
              <div class="schedule_cinema">
                <p>Kino 1</p>
              </div>

              <div class="schedule_day_time">
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
              </div>
            </div>
            <div class="schedule">
              <div class="schedule_cinema">
                <p>Kino 2</p>
              </div>

              <div class="schedule_day_time">
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
              </div>
            </div>
            <div class="schedule">
              <div class="schedule_cinema">
                <p>Kino 3</p>
              </div>

              <div class="schedule_day_time">
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
              </div>
            </div>
            <div class="schedule">
              <div class="schedule_cinema">
                <p>Kino 4</p>
              </div>

              <div class="schedule_day_time">
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
              </div>
            </div>
            <div class="schedule">
              <div class="schedule_cinema">
                <p>Kino 5</p>
              </div>

              <div class="schedule_day_time">
                <div class="date_time">
                  <p>
                    <strong>1/1/2021</strong>
                  </p>
                  <p>17:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="button tickets-button">
          <a href="http://www.kinolucerna.cz/klient-263/kino-68/stranka-3705">Koupit lístky</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SelectMovie"
};
</script>



<style>
.ahoj {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background-image: none;
  background-color: #e0d9d3;

  flex: 1;
  padding: 0 0.5em;
  color: black;
  cursor: pointer;
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
}

select::-ms-expand {
  display: none;
}

.select {
  position: relative;
  display: flex;
  height: 2em;
  line-height: 2;
  background: #5c6664;
  overflow: hidden;
  border-radius: 0.25em;
  margin-bottom: 10px;
}

.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  background: #2b2e2e;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}

.select:hover::after {
  color: #f27a54;
}

.ticket-img img {
  width: 70px;
  margin-left: 10px;
  margin-right: 10px;
}
.ticket-img_b img {
  display: none;
}

.programme-movie-name {
  font-weight: bold;
}

.programme-movie-name:after {
  content: "";
  background: linear-gradient(to right, #f27a54 25%, #a154f2 100%);
  display: block;
  height: 2.5px;
  width: 100%;
  margin-top: 10px;
}

.schedule {
  display: flex;
  justify-content: space-between;
  text-align: right;
  border-bottom: wheat dotted 1px;
}

.cinemas {
  margin-bottom: 15px;
}

/*tablet*/
@media screen and (min-width: 541px) {
  .programme-movie-name:after {
    margin-top: 15px;
  }

  .ticket-img img {
    width: 80px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .ticket-img_b img {
    display: block;
    width: 80px;
    margin-left: 10px;
    margin-right: 10px;
  }
}

/*desktop*/
@media screen and (min-width: 961px) {
  select {
    font-size: 18px;
  }

  .select {
    display: inline-flex;
    height: 3em;
    line-height: 3;
    width: 30vh;
  }

  .ticket-img img {
    width: 150px;
    margin-left: 10px;
  }

  .ticket-img_b img {
    display: block;
    width: 150px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .schedule {
    justify-content: flex-start;
  }

  .schedule_cinema {
    width: 100px;
    text-align: left;
  }

  .date_time {
    margin: 0 10px;
  }

  .schedule_day_time {
    width: 100vh;

    display: flex;
    justify-content: flex-start;
  }
}
</style>
