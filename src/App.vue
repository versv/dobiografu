<template>
  <div>
    <!--<div class="btn-hp">
      <router-link to="/" class="hp">
        <i class="my-home fa fa-home"></i>
      </router-link>
    </div>-->
    <header>
      <div class="topnav" id="myTopnav">
        <div class="title">
          <router-link to="/">
            <h1>DO&nbsp;BIOGRAFU</h1>
          </router-link>
        </div>

        <div class="nav-bars">
          <router-link to="/CinemaOverview">Přehled kin</router-link>
          <router-link to="/SelectDate">Program</router-link>
          <router-link to="/SelectMovie">Přehled filmů</router-link>
        </div>

        <a href="javascript:void(0);" class="icon" v-on:click="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </header>

    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    myFunction: function() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap");

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

#app {
  font-family: "Montserrat", sans-serif;
}
body {
  font-family: "Montserrat", sans-serif;
}
:after,
:before {
  box-sizing: border-box;
}

.title {
  margin: 0px;
  padding: 0px;
  width: 30%;
  flex-grow: 1;
}

.nav-bars {
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
}

.nav-bars a {
  width: 33%;
  height: 40px;
  border-top: 2px solid white;
}

/* STYLE NAV BAR*/
/* Add a black background color to the top navigation */

.topnav {
  background-color: white;
  font-family: "Montserrat", sans-serif;
  display: flex;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
}

/* Change the color of links on hover */
.nav-bars a:hover {
  border-top: black solid 2px;
  color: black;
  font-weight: bold;
}

/* Add an active class to highlight the current page */
.topnav a:active {
  background-color: white;
  color: #ffd665;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

@media screen and (max-width: 840px) {
  .nav-bars a {
    font-size: 14px;
    margin-left: 0;
    padding-left: 0;
  }

  .nav-bars {
    width: 50%;
  }

  .title h1 {
    font-size: 28px;
  }
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 541px) {
  .nav-bars {
    display: none;
  }

  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 541px) {
  .title {
    width: 100%;
  }

  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive .nav-bars {
    float: none;
    display: block;
    text-align: left;
    flex: none;
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 1;
  }

  .topnav.responsive .nav-bars .bars {
    margin: 5px;
  }

  .topnav.responsive .nav-bars a {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 2;
    margin: 0;
    padding-top: 15px;
    padding-left: 5px;
    padding-right: 10px;
    color: white;
    background-color: rgba(94, 90, 90, 0.9);
    border: none;
    height: auto;
    min-width: 120px;
    text-align: center;
  }

  .topnav.responsive .nav-bars a:hover {
    border: none;
    font-weight: bold;
    background-color: rgb(94, 90, 90);
  }

  /*.topnav.responsive .nav-bars a:first-child {
    padding-top: 10px;
  }*/
}

/*KONEC STYLE  NAV






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

  /*background-image: url("assets/images/background.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: black;
  text-align: left;

  font-size: 28px;
  padding-top: 0px;
  margin-bottom: 0px;
}*/

footer a {
  text-decoration: none;
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 8px;
}

/*.button {
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
}*/

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
/*
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
  }*/

.button {
  color: black;
  border-radius: 15px;
  display: inline-block;
  padding: 1em 3em;
  border: none;
  text-decoration: none;
  background: white;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  outline: none;
}

.hp {
  width: 75px;
  height: 45px;
  border-radius: 0px 25px 25px 0px;
}

@media screen and (min-width: 961px) {
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

/*SELECT

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
  background: #e0d9d3;
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

@media screen and (min-width: 961px) {
 /* select {
    font-size: 18px;
  }

  .select {
    display: inline-flex;
    height: 3em;
    line-height: 3;
    width: 30vh;
  }
}*/
</style>
