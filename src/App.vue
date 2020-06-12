<template>
<div>
  <body>
    <div class="btn-hp">
      <a href="#" class="hp">
        <i class="my-home fa fa-home"></i>
      </a>
    </div>
    <header>
      <div class="title">
        <!--místo pro logo-->
        <h1>DO BIOGRAFU</h1>
        <p>
          Přehled malých artových kin v Praze a jejich aktuálních programů. Vše
          na jednom místě.
        </p>
      </div>
    </header>
    <Homepage />
  </body>
</div>
</template>

<script>
import Homepage from "./components/Homepage.vue";

export default {
  name: "App",
  components: {
    Homepage: Homepage
  }
};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swa");

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

#app {
  font-family: "Montserrat", sans-serif;
}

:after,
:before {
  box-sizing: border-box;
}

.hp {
  position: fixed;
  width: 45px;
  height: 40px;
  bottom: 20px;
  left: 0px;
  background: linear-gradient(to bottom right, #f27a54 25%, #a154f2 100%);
  color: #fff;
  border-radius: 0px 25px 25px 0px;
  text-align: center;
  box-shadow: 2px 2px 3px rgb(86, 89, 91);
}

.btn-hp i {
  display: none;
  font-size: 30px;
  color: white;
  padding-top: 5px;
  padding-right: 3px;
  margin: 0 auto;
}

/*tablet*/
@media screen and (min-width: 541px) and (max-width: 960px) {
  .hp {
    width: 75px;
    height: 45px;
    border-radius: 0px 25px 25px 0px;
  }
}

/*desktop*/
@media screen and (min-width: 961px) {
  .hp {
    width: 140px;
    height: 55px;
    border-radius: 0px 25px 25px 0px;
  }

  .btn-hp i {
    font-size: 40px;
    color: white;
    padding-top: 5px;
    padding-right: 3px;
  }
}

body {
  font-family: "Montserrat", sans-serif;
  background-color: #30363d;
  text-align: center;
  font-size: 14px;
}

.title {
  padding: 10px 40px 10px 40px;
  color: #ffffff;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  background: linear-gradient(to right, #f27a54 45%, #a154f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 35px;
}

.button {
  background-color: #e0d9d3;
  font-family: "Montserrat", sans-serif;
  border-radius: 15px;
  min-width: 120px;
  height: 30px;
  margin-bottom: 15px;
}

.button a {
  text-decoration: none;
  color: black;
  display: block;
  text-align: center;
  font-size: 14px;
  padding: 5px;
}

@media screen and (min-width: 541px) and (max-width: 960px) {
  h1 {
    font-size: 48px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .button {
    width: 240px;
    height: 50px;
  }

  .button a {
    padding: 10px;
    font-size: 20px;
  }
}

@media screen and (min-width: 961px) {
  body {
    font-size: 16px;
  }

  h1 {
    font-size: 58px;
    margin-bottom: 10px;
  }

  .button {
    min-width: 220px;
    max-width: 280px;
    height: 45px;
  }

  .button a {
    padding: 10px;
    font-size: 20px;
  }
}
</style>
