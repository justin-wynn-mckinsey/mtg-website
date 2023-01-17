<template>
    <div class="titleCard">
      <h1>{{ title }}</h1>
    </div>
  
  </template>
  
  <script>
  export default {
    name: 'TitleCard',
    props: {
      title: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .titleCard {
    box-sizing: border-box;
    padding: 0%;
    margin: 0%;
  }

  
  </style>