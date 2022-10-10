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

/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
  nav {font-size: 300%;}
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


</style>



