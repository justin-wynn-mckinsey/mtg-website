<template>

  <div>
    <img id="topLogo" alt="MTG logo" src="./assets/logo.png">
  </div>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/news">News</router-link> |
    <router-link to="/events">Events</router-link> |
    <router-link to="/teams">Teams</router-link> |
    <router-link to="/rosters">Rosters</router-link> |
    <router-link to="/facilities">Facilities</router-link> |
    <router-link to="/ourstory">Our Story</router-link> |
    <router-link to="/contact">Contact US</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a5a8ab;
  background-color: #333333;
  height: 100vh;

}

nav {
  padding: 30px;
  background-color: #a9382e;
}

nav a {
  font-weight: bold;
  color: #bdb6b5;
}

nav a.router-link-exact-active {
  color: #333333;
}

#topLogo {
  border-radius: 50%;
  width: 12%;
  margin-top: 0%;
}


</style>
