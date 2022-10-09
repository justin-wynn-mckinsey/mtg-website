<template>

<div class="col-1">
    <img id="topLogo" alt="MTG logo" src="./assets/logo.png">
  </div>
  
  <div id="menuBar" class="col-10">
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
  </div>

  <div class="col-1">
    <img id="menuButton" alt="Menu button" src="./assets/menu.gif">
  </div>

</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>


