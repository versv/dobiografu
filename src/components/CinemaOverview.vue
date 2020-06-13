<template>
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
    
    <CinemaDetail v-for="(cinema, index) in cinemaList"
      v-bind:name="cinema.name"
      v-bind:address="cinema.address"
      v-bind:tagline="cinema.tagline"
      v-bind:specialProgramme="cinema.SpecialProgramme"
      v-bind:specialProgrammeTypes="cinema.specialProgrammeTypes"
      v-bind:barrierFree="cinema.barrierFree"
      v-bind:bar="cinema.bar"
      v-bind:transport="cinema.transport"
      v-bind:image="cinema.image"
      v-bind:alt="cinema.alt"
      v-bind:key="index"
     
    />
    
    
  </section>
</template>

<script>
import CinemaDetail from "./CinemaDetail.vue";

export default {
  name: "CinemaOverview",
  data() {
    return {
      cinemaList: [
        {
          name: "Kino Světozor",
          address: "Vodičkova 791, Praha 1",
          tagline:
            "Domov slavného Kinoautomatu a bývalý kabaret. Kankán se tu už netancuje, ale atmosféra je pořád špičková.",
          specialProgramme: true,
          specialProgrammeTypes: 
            " ⚬ Divadlo v kině - NT Live, The Royal Shakespeare Company   ⚬ Opera v kině - The Met: Live in HD  ⚬ Bio Senior  ⚬ Umění v kině   ⚬ Catch-up - English friendly   ⚬ festivaly",
          barrierFree: " ✗",
          bar: " ✓",
          transport:
            "metro: Můstek - linka A/B, tramvaj. zastávka: Vodičkova - linka: 3, 5, 6, 9, 14, 24",
          link: "https://www.kinosvetozor.cz/",
          image: "/assets/images/Svetozor.jpg",
          alt: "Kino Světozor",
          copyright: "©Kino Světozor",
        },

        {
          name: "Kino Lucerna",
          address: "Vodičkova 704, Praha 1",
          tagline:
            "Elegance sama. V secesním kinosále si připadáte jako v divadle. V malém sále vám zase bude dělat společnost James Dean.",
          specialProgramme: true,
          specialProgrammeTypes: [
            "Výstavy na plátnech kin",
            "Pro seniory",
            "Cestovatelské kino",
            "Balet v kině - Bolšoj balet",
            "Ladies Movie Night",
            "English friendly",
            "Řada různých festivalů",
          ],
          barrierFree: false,
          bar: true,
          transport:
            "metro: Můstek - linka A/B, tramvaj.zastávka: Vodičkova - linka: 3, 5, 6, 9, 14, 24",
          link: "http://www.kinolucerna.cz/klient-263/kino-68/stranka-3705",
          image: "/assets/images/lucerna.png",
          alt: "Kino Lucerna",
          copyright: "©Kino Lucerna",
        },

        {
          name: "Bio Oko",
          address: "Františka Křížka 460/15, Praha 7",
          tagline:
            "Oblíbené nejen letenskými hipstery. Je libo shlédnout film z pohodlí staré karosérie nebo plážového lehátka?",
          specialProgramme: true,
          specialProgrammeTypes: [
            "Divadlo v kině - NT Live",
            "Opera v kině - The Met: Live in HD",
            "Bio Senior",
            "Malé oči",
            "Baby bio",
            "Filmový klub",
            "Naslepo",
            "English friendly",
            "Řada různých festivalů",
          ],
          barrierFree: true,
          bar: true,
          transport: "tramvaj. zastávka: Kamenická - linka: 1, 8, 12, 25, 26",
          link: "https://www.biooko.net/",
          image: "/assets/images/BioOko.jpg",
          alt: "Bio Oko",
          copyright: "©Bio Oko",
        },

        {
          name: "Kino Aero",
          address: "Biskupcova 31, Praha 3",
          tagline:
            "Nenápadný žižkovský klenot s dvorem ve vnitrobloku, ideálním na pofilmové diskuze nad sklenkou vína.",
          specialProgramme: true,
          specialProgrammeTypes: [
            "Divadlo v kině - NT Live",
            "Opera v kině - The Met: Live in HD",
            "Bio Senior",
            "Malé oči",
            "Baby bio",
            "Filmový klub",
            "Naslepo",
            "Legendy v Aeru",
            "English friendly",
            "Řada různých festivalů",
          ],
          barrierFree: true,
          bar: true,
          transport:
            "tramvaj. zastávky: Biskupcova - linka: 9, 10, 11, 16; Ohrada - linka: 1, 9, 11, autobus č. 133, 136 207",
          link: "https://www.kinoaero.cz/",
          image: "/assets/images/Aero.jpg",
          alt: "Kino Aero",
          copyright: "©Kino Aero",
        },

        {
          name: "Kino Pilotů",
          address: "Donská 108, Praha 10",
          tagline:
            "I Vršovice už mají své artové kino. S vytříbenou dramaturgií a pohodlím multiplexu.",
          specialProgramme: true,
          specialProgrammeTypes: [
            "English friendly",
            "Cyklus Citrus",
            "Řada různých festivalů",
          ],
          barrierFree: false,
          bar: false,
          transport:
            "tramvaj. zastávka: Krymská - linka: 4, 22, autobus č. 135",
          link: "http://www.kinopilotu.cz/",
          image: "/assets/images/Kino_pilotu.jpg",
          alt: "Kino Pilotů",
          copyright: "©Kino Pilotů",
        },

        {
          name: "Přítomnost",
          address: "Siwiecova 1, Praha 3",
          tagline:
            "Funkcionalistický poklad v Domě Radosti s barem přímo v sále. Cashless.",
          specialProgramme: true,
          specialProgrammeTypes: [
            "Divadlo v kině - NT Live",
            "English friendly",
            "Půlnoční projekce",
            "Film & Breakfast",
          ],
          barrierFree: false,
          bar: true,
          transport: "tramvaj. zastávka: Husinecká - linka: 5, 9, 15, 26",
          link:
            "https://goout.net/cs/kina/pritomnost-boutique-cinema/stud/" /*nebo stránky kina?*/,
          image: "/assets/images/Pritomnost.jpg",
          alt: "Přítomnost",
          copyright: "©Přítomnost",
        },
        {
          name: "Kino Mat",
          address: "Karlovo náměstí 19, Praha 2",
          tagline:
            "Opravdu komorní záležitost o 46 sedadlech. Takže lístky radši koupit dopředu.",
          specialProgramme: true,
          specialProgrammeTypes: [
            "Kino za babku",
            "MET Opera",
            "Mat hit",
            "Umění v kině",
            "Opera v kině - The Met: Live in HD",
            "Pro děti",
            "English friendly",
          ],
          barrierFree: false,
          bar: true,
          transport:
            "metro: Karlovo náměstí, linka B, tramvaj. zastávka: Karlovo náměstí - linka: 2, 3, 6, 14, 18, 22",
          link: "http://www.mat.cz/kino/",
          image: "/assets/images/Mat.jpg",
          alt: "Kino Mat",
          copyright: "©Kino Mat",
        },

        {
          name: "Edison Filmhub",
          address: "Jeruzalémská 2, Praha 1",
          tagline:
            "Tento relativně nedávný přírůstek k artovým kinum v centru sídlí v budově Edisonovy transformační stanice a jde ruku v ruce se stylovou kavárnou.",
          specialProgramme: true,
          specialProgrammeTypes: [
            "Matinee",
            "Český výběr",
            "Mentální hygiena",
            "Movie barf Monday (English friendly)",
            "Weird Europe",
            "Řada různých festivalů",
          ],
          barrierFree: false,
          bar: true,
          transport: "tramvaj. zastávka: Jindřišská - linka: 3, 6, 9, 14, 24",
          link: "https://goout.net/cs/kina/edison-filmhub/tekd/",
          image: "/assets/images/Edison.jpeg",
          alt: "Edison Filmhub",
          copyright: "©Edison Filmhub",
        },

        {
          name: "Kino Atlas",
          address: "Sokolovská 1, Praha 8",
          tagline: "Ideální na rande - v zadní řadě mají útulné dvojsedačky.",
          specialProgramme: true,
          specialProgrammeTypes: ["Bio Senior", "Bio Junior"],
          barrierFree: false,
          bar: true,
          transport:
            "metro: Florenc, linka B/C, tramvaj. zastávka Florenc - linka: 3, 8, 24, Těšnov - linka: 14 ",
          link: "http://www.kinoatlas.cz/",
          image: "/assets/images/Atlas.jpg",
          alt: "Kino Atlas",
          copyright: "©Kino Atlas",
        },

        {
          name: "Komorní kino Evald",
          address: "Národní 28, Praha 1",
          tagline: "Tady si přijdou na své milovníci severských filmů.",
          specialProgramme: true,
          specialProgrammeTypes: [
            "Bio Senior",
            "Bio Junior",
            "Severský filmový čtvrtek",
          ],
          barrierFree: false,
          bar: true,
          transport:
            "metro: Národní - linka B, Můstek - linka: A/B, tramvaj. zastávka Národní třída - linka: 1, 2, 9, 18, 22",
          link: "http://www.evald.cz/",
          image: "/assets/images/Evald.jpg",
          alt: "Komorní kino Evald",
          copyright: "©Komorní kino Evald",
        },

        {
          name: "Kino Ponrepo",
          address: "Bartolomějská 11, Praha 1",
          tagline:
            "Kino Národního filmového archivu, které promítá spoustu nejen českých pokladů.",
          specialProgramme: true,
          specialProgrammeTypes: [
            "Činohrení klub 55",
            "Film před sto lety",
            "Midnight movies",
            "Filmy a klima",
            "Ponrepo dětem",
            "Paralelní kino",
          ],
          barrierFree: true, //částečně
          bar: true,
          transport:
            "metro: Národní, linka: B, tramvaj. zastávka: Národní třída - linka: 1, 2, 9, 18, 22",
          link: "https://nfa.cz/cz/kino-ponrepo/program/",
          image: "/assets/images/Ponrepo.jpg",
          alt: "Kino Ponrepo",
          copyright: "©Kino Ponrepo",
        },

        {
          name: "Kino Dlabačov",
          address: "Bělohorská 24, Praha 6",
          tagline:
            "Pokud milujete tvorbu jednoho režiséra, bude se vám líbit cyklus Retrospektivy - nedávno promítali třeba všechny filmy Bratří Coenů.",
          specialProgramme: true,
          specialProgrammeTypes: [
            "Divadlo v kine - NT Live",
            "Kino Senior",
            "Kino Junior",
            "Filmový klub",
            "Kino Junior",
            "Retrospektivy",
          ],
          barrierFree: true,
          bar: true,
          transport:
            "tramvaj. zastávka: Malovanka - linka: 22, 23, 35, bus: Malovanka - linka: 143, 149 ",
          link: "https://dlabacov.cz/",
          image: "/assets/images/Dlabacov.jpg",
          alt: "Kino Dlabačov",
          copyright: "©Kino Dlabačov",
        },
      ],
    };
  },
  components: {
    CinemaDetail : CinemaDetail
  }
};
</script>

<style scoped>
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



/*tablet*/
@media screen and (min-width: 541px) {
  h2 {
    font-size: 28px;
  }

  .camera-img img,
  .camera-img-flipped img {
    display: block;
    width: 80px;
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

  
  .camera-img img,
  .camera-img-flipped img {
    display: block;
    width: 150px;
  }

  
}
</style>
