<template>
  <div>
    <div class="schedule">
      <div class="schedule_cinema">
        <p>{{ cinemaName }}</p>
      </div>

      <div class="schedule_day_time">
        <div class="date_time" v-for="(schedule, index) in schedules" v-bind:key="index">
          <p class="p-date">
            <strong>{{ schedule.date.split(" ")[1] }}</strong>
          </p>
          <p class="p-times">{{ schedule.times.join(", ") }}</p>
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
  flex-direction: column;
  border-bottom: 1px dashed black;
  padding: 0px;
}

.schedule_cinema {
  text-align: left;
}

.schedule_cinema p {
  margin-bottom: 0;

  text-transform: uppercase;
  font-size: 18px;
}

.schedule_day_time {
  text-align: left;
}

.schedule_day_time p {
  text-align: left;
}

.p-date {
  margin-bottom: 2px;
}

.p-times {
  margin-top: 3px;
}

@media screen and (min-width: 541px) {
  .programme-movie-name {
    font-weight: bold;
  }
}

@media screen and (min-width: 961px) {
  .schedule {
    border: none;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .schedule_cinema {
    text-align: right;
    text-transform: uppercase;
    width: 15%;
  }

  .date_time {
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #e0d9d3;
  }

  .date_time:last-child {
    border-bottom: none;
  }

  .p-date p {
    width: 10%;
    margin-right: 10px;
    text-align: right;
  }

  .p-times {
    font-size: 18px;
  }

  .schedule_day_time {
    border-bottom: 1px dashed black;
    flex-grow: 1;
  }
}
</style>
