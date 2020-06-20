import { cinemaExists } from './databaze';

const fetchData = () => {
  return fetch(
    "https://api.apify.com/v2/datasets/mF3iLaWJ6zq5fUCSy/items?format=json&clean=1"
  )
    .then(response => response.json())
    .then(json => {
      console.log("Stáhnul jsem data z apify", json);
      return json;
    })

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
            name: cinema.title,
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
  return uniqueMovies;
}
