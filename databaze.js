spev



const cinemaList = [

  {
    name: "Kino Světozor",
    address: "Vodičkova 791, Praha 1",
    specialProgramme: true,
    barrierFree: false,
    bar: true,
    transport: "metro: Můstek - linka A/B, tramvaj. zastávka: Vodičkova - linka: 3, 5, 6, 9, 14, 24",
    movies: [
      ["Po", "22.6.2020", "Emma.", "15:00"],
      ["Út", "23.6.2020", "Cyrano z Bergeracu (NT Live)", "20:00"],
      ["St", "24.6.2020", "Vysoká dívka", "15:00"],
      ["Čt", "25.6.2020", "Hamlet (NT Live)", "20:00"],
      ["Pá", "26.6.2020", "Můj otec Antonín Kratochvíl", "15:00"],
      ["Po", "29.6.2020", "Emma.", "15:00"],
      ["Po", "29.6.2020", "Imunita z pohledu psychosomatiky", "18:00"],
      ["Út", "30.6.2020", "Cyrano z Bergeracu (NT Live)", "20:00"],
      ["Pá", "3.7.2020", "Než skončí léto", "20:00"],
      ["So", "4.7.2020", "Jalda,noc odpuštění", "17:00"],
      ["So", "4.7.2020", "Luxor", "20:00"],
      ["Ne", "5.7.2020", "Mogul Mauglí", "17:00"],
      ["Ne", "5.7.2020", "Jsme jedné krve", "20:00"],
    ]
  },

  {
    name: "Lucerna",
    address: "Vodičkova 704, Praha 1",
    specialProgramme: true,
    barrierFree: false,
    bar: true,
    transport: "metro: Můstek - linka A/B, tramvaj.zastávka: Vodičkova - linka: 3, 5, 6, 9, 14, 24",
    movies: [
      ["Po", "22.6.2020", "V síti (+15)", "13:30"],
      ["Po", "22.6.2020", "Raoul Taburin", "15:30"],
      ["Po", "22.6.2020", "Bourák", "17:00"],
      ["Po", "22.6.2020", "Dokud se tančí", "17:45"],
      ["Po", "22.6.2020", "Bourák", "19:30"],
      ["Po", "22.6.2020", "Kalifornský sen", "20:15"],
      ["Út", "23.6.2020", "Bourák", "15:30"],
      ["Út", "23.6.2020", "V síti (+15)", "15:45"],
      ["Út", "23.6.2020", "Bourák", "18:00"],
      ["Út", "23.6.2020", "Raoul Taburin", "18:15"],
      ["Út", "23.6.2020", "Kalifornský sen", "20:30"],
      ["Út", "23.6.2020", "Bourák", "20:45"]
      ["St", "24.6.2020", "Vysoká dívka", "15:00"],
      ["Pá", "26.6.2020", "Trafikant", "13:30"],
      ["So", "27.6.2020", "Lassie se vrací", "13:00"],
      ["Ne", "28.6.2020", "Lassie se vrací", "13:00"],
      ["Po", "29.6.2020", "Bourák", "13:30"]
    ]
  },

  {
    name: "Bio Oko",
    address: "Františka Křížka 460/15, Praha 7",
    specialProgramme: true,
    barrierFree: true,
    bar: true,
    transport: "tramvaj. zastávka: Kamenická - linka: 1, 8, 12, 25, 26",
    movies: [
      ["Po", "22.6.2020", "Potvora (NT Live)", "21:00"],
      ["Po", "29.6.2020", "Hamlet (NT Live)", "19:00"],
      ["Út", "30.6.2020", "Můj otec Antonín Kratochvíl", "13:00"],
      ["Pá", "3.7.2020", "Než skončí léto", "20:00"],
      ["So", "4.7.2020", "Jalda, noc odpuštění", "17:00"],
      ["So", "4.7.2020", "Luxor", "20:00"],
      ["Ne", "5.7.2020", "Mogul Mauglí", "17:00"],
      ["Ne", "5.7.2020", "Jsme jedné krve", "20:00"],
    ]
  },

  {
    name: "Kino Aero",
    address: "Biskupcova 31, Praha 3",
    specialProgramme: true,
    barrierFree: true,
    bar: true,
    transport: "tramvaj. zastávky: Biskupcova - linka: 9, 10, 11, 16; Ohrada - linka: 1, 9, 11, autobus č. 133, 136 207",
    movies: [
      ["Po", "22.6.2020", "Barbarella", "20:30"],
      ["Út", "23.6.2020", "1917", "10:00"],
      ["Út", "23.6.2020", "Sám kolem světa: Stopem, s kalašnikovem a japonským pornem", "20:30"],
      ["Čt", "25.6.2020", "Emma.", "13:30"],
      ["Čt", "25.6.2020", "Cyrano z Bergeracu (NT Live)", "20:00"],
      ["Po", "29.6.2020", "Thelma a Louise", "20:30"],
      ["Út", "30.6.2020", "Malá lež", "10:00"],
      ["Čt", "2.7.2020", "Vysoká dívka", "13:30"],
      ["Pá", "3.7.2020", "Než skončí léto", "20:00"],
      ["So", "4.7.2020", "Jalda, noc odpuštění", "17:00"],
      ["So", "4.7.2020", "Luxor", "20:00"],
      ["Ne", "5.7.2020", "Mogul Mauglí", "17:00"],
      ["Ne", "5.7.2020", "Jsme jedné krve", "20:00"],

    ]
  },

  {
    name: "Kino Pilotů",
    address: "Donská 108, Praha 10",
    specialProgramme: true,
    barrierFree: false,
    bar: false,
    transport: "tramvaj. zastávka: Krymská - linka: 4, 22, autobus č. 135",
    movies: [
      ["Čt", "25.6.2020", "Pocta klasikám road movie - blok krátkáých filmů", "17:30"],
      ["Čt", "25.6.2020", "Na vrchol Velkošvédska", "18:00"],
      ["Čt", "25.6.2020", "Les", "19:00"],
      ["Čt", "25.6.2020", "Rusko, sních a rock'n'roll", "19:30"],

    ]
  },

  {
    name: "Přítomnost",
    address: "Siwiecova 1, Praha 3",
    specialProgramme: false,
    barrierFree: false,
    bar: true,
    transport: "tramvaj. zastávka: Husinecká - linka: 5, 9, 15, 26",
    movies: [
      ["St", "24.6.2020", "Půlnoční projekce: Čarodějnice", "23:59"],
      ["Ne", "28.6.2020", "Film & Breakfast: Prázdniny v Římě", "11:00"],
    ]
  },
  {
    name: "Kino Mat",
    address: "Karlovo náměstí 19, Praha 2",
    specialProgramme: true,
    barrierFree: false,
    bar: true,
    transport: "metro: Karlovo náměstí, linka B, tramvaj. zastávka: Karlovo náměstí - linka: 2, 3, 6, 14, 18, 22",
    movies: [
      ["Pá", "26.6.2020", "Vinnetou - Poslední výstřel", "18:30"],
      ["So", "30.6.2020", "Poklad na stříbrném jezeře", "18:30"],

    ]
  },

  {
    name: "Edison Filmhub",
    address: "Jeruzalémská 2, Praha 1",
    specialProgramme: true,
    barrierFree: false,
    bar: true,
    transport: "tramvaj. zastávka: Jindřišská - linka: 3, 6, 9, 14, 24",
    movies: [
      ["Čt", "18.6.2020", "Gauguin z Národní galerie v Londýně", "19:00"],
      ["Čt", "18.6.2020", "Gauguin", "21:00"],
      ["Út", "30.6.2020", "Postřižiny", "19:00"],

    ]
  },

  {
    name: "Kino Atlas",
    address: "Sokolovská 1, Praha 8",
    specialProgramme: true,
    barrierFree: false,
    bar: true,
    transport: "metro: Florenc, linka B/C, tramvaj. zastávka Florenc - linka: 3, 8, 24, Těšnov - linka: 14 ",
    movies: [

    ]
  },

  {
    name: "Komorní kino Evald",
    address: "Národní 28, Praha 1",
    specialProgramme: true,
    barrierFree: false,
    bar: true,
    transport: "metro: Národní - linka B, Můstek - linka: A/B, tramvaj. zastávka Národní třída - linka: 1, 2, 9, 18, 22",
    movies: [

    ]
  },

  {
    name: "Kino Ponrepo",
    address: "Bartolomějská 11, Praha 1",
    specialProgramme: true,
    barrierFree: true, //částečně
    bar: true,
    transport: "metro: Národní, linka: B, tramvaj. zastávka: Národní třída - linka: 1, 2, 9, 18, 22",
    movies: [
      ["Po", "22.6.2020", "Jiří Menzel – Nicollò Machiavelli / Mandragora", "18:00"],
      ["Út", "23.6.2020", "Červená řeka", "20:30"],
      ["St", "24.6.2020", "Kdyby všichni chlapi světa", "18:00"],
      ["Čt", "25.6.2020", "Bez lásky", "18:00"],
      ["Pá", "26.6.2020", "Svatba jako řemen", "18:00"],
      ["So", "27.6.2020", "Strašidelné léto", "20:30"],
      ["Ne", "28.6.2020", "Tranzit", "20:30"],

    ]
  },

  {
    name: "Kino Dlabačov",
    address: "Bělohorská 24, Praha 6",
    specialProgramme: true,
    barrierFree: true, //nemůžu to najít, ale myslím si, že je
    bar: true,
    transport: "tramvaj. zastávka: Malovanka - linka: 22, 23, 35, bus: Malovanka - linka: 143, 149 ",
    movies: [
      ["Po", "22.6.2020", "Vlastníci", "18:00"],
      ["Po", "22.6.2020", "V síti", "20:00"],
      ["Út", "23.6.2020", "Emma.", "18:00"],
      ["Út", "23.6.2020", "Maják", "20:00"],
      ["St", "24.6.2020", "Daleko od Reykjavíku", "18:00"],
      ["St", "24.6.2020", "Afrikou na pionýru", "20:00"],
      ["Čt", "25.6.2020", "Afrikou na pionýru", "18:00"],
      ["Čt", "25.6.2020", "Vysoká dívka", "20:00"],
      ["Pá", "26.6.2020", "Příliš osobní známost", "18:00"],
      ["Pá", "26.6.2020", "Hanební pancharti", "20:00"],
      ["So", "27.6.2020", "Lassie se vrací", "16:00"],
      ["So", "27.6.2020", "Osm hrozných", "20:00"],
    ]

  }
]
