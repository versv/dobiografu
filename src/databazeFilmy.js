import { cinemaExists } from './databaze';
import { renameCinema } from './databaze';

const fetchData = () => {
  return fetch(
    "https://api.apify.com/v2/datasets/DxRocmUewqLGkrHP4/items?format=json&clean=1&desc=true&limit=1"
  )
    .then(response => response.json())
    .then(json => {
      console.log("Stáhnul jsem data z apify", json);
      return json;
    })
    .then(json => json[0].cinemas)

};

export const loadMoviesForCinema = async (cinema) => {
  const data = await fetchData();
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].title === cinema.apiName) {
      console.log(data[i])
      return data[i]

    }
  };
};

export const getMoviesForDate = async (date) => {
  const data = await fetchData();
  const cinemaListByDate = [];
  for (let i = 0; i < data.length; i += 1) {
    const cinema = data[i];
    if (cinemaExists(cinema.title) === true) {
      for (let j = 0; j < cinema.info.length; j += 1) {
        if (cinema.info[j].datum === date) {
          console.log(cinema.title, cinema.info[j]);

          cinemaListByDate.push({
            name: renameCinema(cinema.title),
            movies: transformMovies(cinema.info[j].movies)
          })
        }
      }
    }
  }
  return cinemaListByDate;
};

const transformMovies = (apiMovies) => {
  const movies = [];
  for (let i = 0; i < apiMovies.length; i += 1) {
    for (let j = 0; j < apiMovies[i].times.length; j += 1) {
      movies.push({
        movieName: apiMovies[i].name, time: apiMovies[i].times[j]
      })
    }
  }
  return movies.sort((a, b) => {
    return a.time.localeCompare(b.time)
  })

}

export const getUniqueMovies = async () => {
  const apiMovies = await fetchData();
  const uniqueMovies = [];
  for (let cinemaidx = 0; cinemaidx < apiMovies.length; cinemaidx += 1) {
    const cinemaInfo = apiMovies[cinemaidx].info
    for (let infoidx = 0; infoidx < cinemaInfo.length; infoidx += 1) {
      const moviesInOneDay = cinemaInfo[infoidx].movies;
      for (let moviesidx = 0; moviesidx < moviesInOneDay.length; moviesidx += 1) {
        const movieName = moviesInOneDay[moviesidx].name
        uniqueMovies.push(movieName)
      }
    }
  }
  return [...new Set(uniqueMovies)].sort((a, b) => {
    return a.localeCompare(b)
  });
}

const getSchedules = (movieName, apiInfo) => {
  const schedule = [];
  console.log(apiInfo);
  for (let i = 0; i < apiInfo.length; i += 1) {
    const apiMovie = apiInfo[i].movies.find(apiMovie => apiMovie.name === movieName);
    if (apiMovie != undefined) {
      schedule.push({ date: apiInfo[i].datum, times: apiMovie.times })
    }

  }
  return schedule;

}


export const getScheduleByMovie = async (movieName) => {
  const apiSchedules = await fetchData();
  const schedules = [];
  for (let i = 0; i < apiSchedules.length; i += 1) {
    const cinema = apiSchedules[i];
    if (cinemaExists(cinema.title) === true) {
      const schedules2 = getSchedules(movieName, apiSchedules[i].info)
      if (schedules2.length > 0) {
        console.log("jsem tady")
        schedules.push({
          cinemaName: renameCinema(cinema.title),
          schedule: schedules2
        })
      }
    }
  }

  return schedules
}