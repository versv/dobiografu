<template>
  <div>
    <div class="schedule">
      <div class="schedule_cinema">
        <p>{{ cinemaName }}</p>
      </div>

      <div class="schedule_day_time">
        <div class="date_time" v-for="(schedule, index) in schedules" v-bind:key="index">
          <p>
            <strong>{{schedule.date.split(" ")[1]}}</strong>
          </p>
          <p>{{schedule.times.join(", ")}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgrammeByMovie",
  props: ["cinemaName", "schedules"]
};
</script>


<style>
.schedule {
  display: flex;
  justify-content: space-between;
  text-align: right;
  border-bottom: wheat dotted 1px;
}

.cinemas {
  margin-bottom: 15px;
}

@media screen and (min-width: 541px) {
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
}

@media screen and (min-width: 961px) {
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