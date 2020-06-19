<template>
  <div>
    <div class="btn-hp">
      <router-link to="/" class="hp">
        <i class="my-home fa fa-home"></i>
      </router-link>
    </div>
    <header>
      <h1>DO BIOGRAFU</h1>
    </header>

    <router-link to="/"></router-link>
    <router-view></router-view>

    <!-- <Homepage /> -->
  </div>
</template>

<script>
/*import Homepage from "./components/Homepage.vue";*/

export default {
  name: "App"
  /*components: {
    Homepage: Homepage
  }*/
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
  font-size: 30px;
  color: white;
  padding-top: 5px;
  padding-right: 3px;
  margin: 0 auto;
}

body {
  font-family: "Montserrat", sans-serif;
  background-color: #30363d;
  background-image: url("assets/images/background.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  text-align: center;
  font-size: 12px;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  background: linear-gradient(to right, #f27a54 45%, #a154f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  padding-top: 0px;
  margin-bottom: 0px;
}

.button {
  background-color: #e0d9d3;
  font-family: "Montserrat", sans-serif;
  border-radius: 15px;
  min-width: 120px;
  height: 30px;
  margin-bottom: 15px;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.button:active {
  transform: scale(0.99);
}

.button a {
  text-decoration: none;
  color: black;
  display: block;
  text-align: center;
  font-size: 12px;
  padding: 5px;
}

.cinema-overview {
  margin: 0 auto;
  padding: 0px;
  width: 80%;
  border-radius: 10px;
  box-shadow: 1px 50px 30px 20px rgba(12, 12, 12, 0.523);
  background-color: #b0adbe;
  font-size: 12px;
}

.cinema-overview-header {
  color: white;
  background-color: #3c444c;
  align-items: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

@media screen and (min-width: 541px) and (max-width: 960px) {
  body {
    height: 100%;
    background-size: cover;
  }

  h1 {
    font-size: 40px;
    padding-top: 20px;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .button {
    margin-top: 40px;
    width: 240px;
    height: 50px;
  }

  .button a {
    padding: 10px;
    font-size: 20px;
  }

  .hp {
    width: 75px;
    height: 45px;
    border-radius: 0px 25px 25px 0px;
  }
}

@media screen and (min-width: 961px) {
  body {
    background-size: cover;
    height: 100vh;
    font-size: 16px;
  }

  h1 {
    font-size: 58px;
    padding: 20px;
    margin-bottom: 30px;
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
</style>
