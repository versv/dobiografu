<template>
  <div>
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
          <i
            v-bind:class="{'fa fa-bars': className, 'fa fa-times': !className }"
            @click="changeClass"
          ></i>
        </a>
      </div>
    </header>

    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { getCinemaByUrl } from "./databaze";
export default {
  name: "App",
  data() {
    return {
      className: true
    };
  },
  methods: {
    myFunction: function() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
    changeClass: function() {
      this.className = !this.className;
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

footer a {
  text-decoration: none;
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 8px;
}

header {
  position: sticky;
  top: 0;
  z-index: 1000;
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

.topnav {
  background-color: white;
  font-family: "Montserrat", sans-serif;
  display: flex;
}

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

.nav-bars a:hover {
  border-top: black solid 2px;
  color: black;
  font-weight: bold;
}

.topnav a:active {
  background-color: white;
  color: #ffd665;
}

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
    padding: 0px;
    /**/
    margin-bottom: 10px;
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
    height: 1em;
    margin-top: 22px;
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
    height: 1em;
    margin-top: 22px;
  }
  .topnav.responsive .nav-bars {
    float: none;
    display: block;
    text-align: left;
    flex: none;
    position: absolute;
    top: 65px;
    right: 10px;
    z-index: 1;
    margin-right: 5px;
  }

  .topnav.responsive .nav-bars .bars {
    margin: 5px;
  }

  .topnav.responsive .nav-bars a {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
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
    color: #ffd671;
    background-color: rgb(94, 90, 90);
  }
}

/*KONEC STYLE  NAV */
</style>
