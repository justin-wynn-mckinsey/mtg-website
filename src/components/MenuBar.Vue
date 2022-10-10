<template >


<nav  class="menu">
    <img id="topLogo" alt="MTG logo" src="../assets/logo.png">
  
      <router-link to="/">Home</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/teams">Teams</router-link> |
      <router-link to="/rosters">Rosters</router-link> |
      <router-link to="/facilities">Facilities</router-link> |
      <router-link to="/ourstory">Our Story</router-link> |
      <router-link to="/contact">Contact Us</router-link>
</nav>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #e4f0eb;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu li:hover, .menu a:hover {
  color: #535758;
  background-color: #eeeded;
  background-blend-mode: lighten;
  border-radius: 3%;
}

.aside {
  background-color: #33b5e5;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

#topLogo {
  border-radius: 50%;
  width: 20%;
  margin-top: 0%;
}

nav {
  padding: 30px;
  background-color: #880029;
  display: block;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #bdb6b5;
}

nav a.router-link-exact-active {
  color: #333333;
}


.menu {
  padding: 0%;
}
</style>