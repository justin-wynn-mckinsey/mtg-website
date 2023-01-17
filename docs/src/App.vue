<template>
<meta name="viewport" content="height =width=device-width, initial-scale=1.0">
<router-view/>
</template>

<style>
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

.header {
  background-color: #9933cc;
  color: #ffffff;
}

.footer {
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 15px;
}



#app {
  font-family: "Reckoner_Bold", "Reckoner", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--white-color);
  background-color: var(--black-color);
  height: 100vh;
}

@font-face {
  font-family: "Elianto";
  src: local("fonts"),
   url(./fonts/Elianto-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Reckoner";
  src: local("fonts"),
   url(./fonts/Reckoner.ttf) format("truetype");
}

@font-face {
  font-family: "Reckoner_Bold";
  src: local("fonts"),
   url(./fonts/Reckoner_Bold.ttf) format("truetype");
   font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
}


:root {
   /* Palette */
   --maroon-color: #880029;
   --black-color: #051822;
   --white-color: #FFF2DF;

  
  /* App Theme / Brand */

}

:root, html{
    background-color: var(--black-color);
}



</style>



