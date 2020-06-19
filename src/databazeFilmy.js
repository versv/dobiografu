export const loadMoviesForCinema = async (cinemaName) => {
  await new Promise(r => setTimeout(r, 2000));
  for (let i = 0; i < moviesList.length; i += 1) {
    if (moviesList[i].name === cinemaName.name) {
      return moviesList[i]
    }
  };
};
export const moviesList = [{
  name: "Kino Světozor",
  dates: [
    {
      date: "22.6.2020",
      movies: [
        {
          movieName: "Emma",
          time: "15:00",
        },
      ]
    },
    {
      date: "23.6.2020",
      movies: [
        {
          movieName: "Cyrano z Bergeracu (NT Live)",
          time: "20:00",
        },
      ]
    },
    {
      date: "24.6.2020",
      movies: [
        {
          movieName: "Vysoká dívka",
          time: "15:00",
        },
      ]
    },
    {
      date: "25.6.2020",
      movies: [
        {
          movieName: "Hamlet (NT Live)",
          time: "20:00",
        },
      ]
    },
    {
      date: "26.6.2020",
      movies: [
        {
          movieName: "Můj otec Antonín Kratochvíl",
          time: "15:00",
        },
      ]
    },
    {
      date: "29.6.2020",
      movies: [
        {
          movieName: "Emma",
          time: "15:00",
        },
        {
          movieName: "Imunita z pohledu psychosomatiky",
          time: "18:00",
        },
      ]
    },
    {
      date: "30.6.2020",
      movies: [
        {
          movieName: "Cyrano z Bergeracu (NT Live)",
          time: "20:00",
        },
      ]
    },
    {
      date: "3.7.2020",
      movies: [
        {
          movieName: "Než skončí léto",
          time: "20:00",
        },
      ]
    },
    {
      date: "4.7.2020",
      movies: [
        {
          movieName: "Jalda, noc odpuštění",
          time: "17:00"
        },
        {
          movieName: "Luxor",
          time: "20:00"
        },
      ]
    },
    {
      date: "5.7.2020",
      movies: [
        {
          movieName: "Mogul Mauglí",
          time: "17:00"
        },
        {
          movieName: "Jsme jedné krve",
          time: "20:00"
        },
      ]
    }
  ]
},
{
  name: "Kino Lucerna",
  dates: [
    {
      date: "22.6.2020",
      movies: [
        {
          movieName: "V síti (+15)",
          time: "13:30",
        },
        {
          movieName: "Raoul Taburin",
          time: "15:30",
        },
        {
          movieName: "Bourák",
          time: "17:00",
        },
        {
          movieName: "Dokud se tančí",
          time: "17:45",
        },
        {
          movieName: "Bourák",
          time: "19:30",
        },
        {
          movieName: "Kalifornský sen",
          time: "20:15",
        },
      ]
    },
    {
      date: "23.6.2020",
      movies: [
        {
          movieName: "Bourák",
          time: "15:30",
        },
        {
          movieName: "V síti (+15)",
          time: "15:45",
        },
        {
          movieName: "Bourák",
          time: "18:00",
        },
        {
          movieName: "Raoul Taburin",
          time: "18:15",
        },
        {
          movieName: "Kalifornský sen",
          time: "20:30",
        },
        {
          movieName: "Bourák",
          time: "20:45",
        },
      ]
    },
    {
      date: "24.6.2020",
      movies: [
        {
          movieName: "Vysoká dívka",
          time: "15:00",
        },
      ]
    },
    {
      date: "26.6.2020",
      movies: [
        {
          movieName: "Trafikant",
          time: "13:30",
        },
      ]
    },
    {
      date: "27.6.2020",
      movies: [
        {
          movieName: "Lassie se vrací",
          time: "13:00",
        },
      ]
    },
    {
      date: "28.6.2020",
      movies: [
        {
          movieName: "Lassie se vrací",
          time: "13:00",
        },
      ]
    },
    {
      date: "29.6.2020",
      movies: [
        {
          movieName: "Bourák",
          time: "13:30",
        },
      ]
    }
  ],
},
{
  name: "Bio Oko",
  dates: [
    {
      date: "22.6.2020",
      movies: [
        {
          movieName: "Potvora (NT Live)",
          time: "21:00",
        },
      ]
    },
    {
      date: "29.6.2020",
      movies: [
        {
          movieName: "Hamlet (NT Live)",
          time: "19:00",
        },
      ]
    },
    {
      date: "30.6.2020",
      movies: [
        {
          movieName: "Můj otec Antonín Kratochvíl",
          time: "13:00",
        },
      ]
    },
    {
      date: "3.7.2020",
      movies: [
        {
          movieName: "Než skončí léto",
          time: "20:00",
        },
      ]
    },
    {
      date: "4.7.2020",
      movies: [
        {
          movieName: "Jalda, noc odpuštění",
          time: "17:00",
        },
        {
          movieName: "Luxor",
          time: "20:00",
        },
      ]
    },
    {
      date: "5.7.2020",
      movies: [
        {
          movieName: "Mogul Mauglí",
          time: "17:00",
        },
        {
          movieName: "Jsme jedné krve",
          time: "20:00",
        },
      ],
    },
  ],
},
{
  name: "Kino Aero",
  dates: [
    {
      date: "22.6.2020",
      movies: [
        {
          movieName: "Barbarella",
          time: "20:30",
        },
      ]
    },
    {
      date: "23.6.2020",
      movies: [
        {
          movieName: "1917",
          time: "10:00",
        },
        {
          movieName: "Sám kolem světa: Stopem, s kalašnikovem a japonským pornem",
          time: "20:30",
        },
      ]
    },
    {
      date: "25.6.2020",
      movies: [
        {
          movieName: "Emma",
          time: "13:30",
        },
        {
          movieName: "Cyrano z Bergeracu (NT Live)",
          time: "20:00",
        },
      ]
    },
    {
      date: "29.6.2020",
      movies: [
        {
          movieName: "Thelma a Louise",
          time: "20:30",
        },
      ]
    },
    {
      date: "30.6.2020",
      movies: [
        {
          movieName: "Malá lež",
          time: "10:00",
        },
      ]
    },
    {
      date: "2.7.2020",
      movies: [
        {
          movieName: "Vysoká dívka",
          time: "13:30",
        },
      ]
    },
    {
      date: "3.7.2020",
      movies: [
        {
          movieName: "Než skončí léto",
          time: "20:00",
        },
      ]
    },
    {
      date: "4.7.2020",
      movies: [
        {
          movieName: "Jalda, noc odpuštění",
          time: "17:00",
        },
        {
          movieName: "Luxor",
          time: "20:00",
        },
      ]
    },
    {
      date: "5.7.2020",
      movies: [
        {
          movieName: "Mogul Mauglí",
          time: "17:00",
        },
        {
          movieName: "Jsme jedné krve",
          time: "20:00",
        },
      ]
    },
  ]
},
{
  name: "Kino Pilotů",
  dates: [
    {
      date: "25.6.2020",
      movies: [
        {
          movieName: "Pocta klasikám road movie - blok krátkáých filmů",
          time: "17:30",
        },
        {
          movieName: "Na vrchol Velkošvédska",
          time: "18:00",
        },
        {
          movieName: "Les",
          time: "19:00",
        },
        {
          movieName: "Rusko, sníh a rock'n'roll",
          time: "19:30",
        },
      ]
    },
  ],
},
{
  name: "Přítomnost",
  dates: [
    {
      date: "24.6.2020",
      movies: [
        {
          movieName: "Půlnoční projekce: Čarodějnice",
          time: "23:59",
        },
      ]
    },
    {
      date: "28.6.2020",
      movies: [
        {
          movieName: "Film & Breakfast: Prázdniny v Římě",
          time: "11:00",
        },
      ]
    },
  ],
},
{
  name: "Kino Mat",
  dates: [
    {
      date: "26.6.2020",
      movies: [
        {
          movieName: "Vinnetou - Poslední výstřel",
          time: "18:30",
        },
      ]
    },
    {
      date: "30.6.2020",
      movies: [
        {
          movieName: "Poklad na stříbrném jezeře",
          time: "18:30",
        },
      ]
    },
  ],
},
{
  name: "Edison Filmhub",
  dates: [
    {
      date: "18.6.2020",
      movies: [
        {
          movieName: "Gauguin z Národní galerie v Londýně ",
          time: "19:00",
        },
        {
          movieName: "Gauguin",
          time: "21:00",
        },
      ]
    },
    {
      date: "30.6.2020",
      movies: [
        {
          movieName: "Postřižiny",
          time: "19:00",
        },
      ]
    },
  ],
},
{
  name: "Kino Atlas",
  dates: [
    {
      date: "22.6.2020",
      movies: [
        {
          movieName: "#jsemtady",
          time: "17:30",
        },
        {
          movieName: "Emma",
          time: "18:30",
        },
      ]
    },
    {
      date: "23.6.2020",
      movies: [
        {
          movieName: "V síti",
          time: "17:30",
        },
        {
          movieName: "Dokonalý pacient",
          time: "18:30",
        },
        {
          movieName: "Bourák",
          time: "20:00",
        },
      ]
    },
    {
      date: "24.6.2020",
      movies: [
        {
          movieName: "Ženská na vrcholu",
          time: "14:30",
        },
        {
          movieName: "V síti: Za školou",
          time: "15:30",
        },
        {
          movieName: "Kalifornský sen",
          time: "17:30",
        },
        {
          movieName: "Problémissky",
          time: "20:00",
        },
      ]
    },
  ],
},
{
  name: "Komorní kino Evald",
  dates: [
    {
      date: "22.6.2020",
      movies: [
        {
          movieName: "Sviňa",
          time: "18:00",
        },
        {
          movieName: "Kalifornský sen",
          time: "20:30",
        },
      ]
    },
    {
      date: "23.6.2020",
      movies: [
        {
          movieName: "Modelář",
          time: "14:30",
        },
        {
          movieName: "#jsemtady",
          time: "17:30",
        },
        {
          movieName: "Emma",
          time: "20:00",
        },
      ]
    },
    {
      date: "24.6.2020",
      movies: [
        {
          movieName: "V síti",
          time: "18:00",
        },
        {
          movieName: "Bourák",
          time: "20:30",
        },
      ]
    },
  ],
},
{
  name: "Kino Ponrepo",
  dates: [
    {
      date: "22.6.2020",
      movies: [
        {
          movieName: "Jiří Menzel – Nicollò Machiavelli / Mandragora",
          time: "18:00",
        },
      ]
    },
    {
      date: "23.6.2020",
      movies: [
        {
          movieName: "Červená řeka",
          time: "20:30",
        },
      ]
    },
    {
      date: "24.6.2020",
      movies: [
        {
          movieName: "Kdyby všichni chlapi světa",
          time: "18:00",
        },
      ]
    },
    {
      date: "25.6.2020",
      movies: [
        {
          movieName: "Bez lásky",
          time: "18:00",
        },
      ]
    },
    {
      date: "26.6.2020",
      movies: [
        {
          movieName: "Svatba jako řemen",
          time: "18:00",
        },
      ]
    },
    {
      date: "27.6.2020",
      movies: [
        {
          movieName: "Strašidelné léto",
          time: "20:30",
        },
      ]
    },
    {
      date: "28.6.2020",
      movies: [
        {
          movieName: "Tranzit",
          time: "20:30",
        },
      ]
    },
  ],
},
{
  name: "Kino Dlabačov",
  dates: [
    {
      date: "22.6.2020",
      movies: [
        {
          movieName: "Vlastníci",
          time: "18:00",
        },
        {
          movieName: "V síti",
          time: "20:00",
        },
      ]
    },
    {
      date: "23.6.2020",
      movies: [
        {
          movieName: "Emma",
          time: "18:00",
        },
        {
          movieName: "Maják",
          time: "20:00",
        },
      ]
    },
    {
      date: "24.6.2020",
      movies: [
        {
          movieName: "Daleko od Reykjavíku",
          time: "18:00",
        },
        {
          movieName: "Afrikou na pionýru",
          time: "20:00",
        },
      ]
    },
    {
      date: "25.6.2020",
      movies: [
        {
          movieName: "Afrikou na pionýru",
          time: "18:00",
        },
        {
          movieName: "Vysoká dívka",
          time: "20:00",
        },
      ]
    },
    {
      date: "26.6.2020",
      movies: [
        {
          movieName: "Příliš osobní známost",
          time: "18:00",
        },
        {
          movieName: "Hanební parchanti",
          time: "20:00",
        },
      ]
    },
    {
      date: "27.6.2020",
      movies: [
        {
          movieName: "Lassie se vrací",
          time: "16:00",
        },
        {
          movieName: "Osm hrozných",
          time: "20:00",
        },
      ]
    },
  ],
}
];




