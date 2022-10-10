<template >


  <nav class="menu">
    <img id="topLogo" alt="MTG logo" src="../assets/logo.png">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/news">News</router-link>
      </li>
      <li>
        <router-link to="/events">Events</router-link>
      </li>
      <li>
        <router-link to="/teams">Teams</router-link>
      </li>
      <li>
        <router-link to="/rosters">Rosters</router-link>
      </li>
      <li>
        <router-link to="/facilities">Facilities</router-link>
      </li>
      <li>
        <router-link to="/ourstory">Our Story</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact Us</router-link>
      </li>
    </ul>
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
  color: var(--white-color);
  text-decoration: none;
}
.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.menu li {
  display: inline;
  padding: 5px;
  color: var(--white-color);
  float: center;
  border-right: 1px solid var(--white-color);
}


.menu li:hover {
  color: var(--black-color);
}

.aside {
  background-color: #33b5e5;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

#topLogo {
  border-radius: 50%;
  width: 10%;
  position: relative;
  top: 10px;
  display: inline-block
}

nav {
  background-color: var(--maroon-color);
  display: block;
  text-align: center;
  font-size: 80%;
  font-weight: bold;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

nav a.router-link-exact-active {
  color: var(--black-color);
}

</style>