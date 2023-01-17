<template>
    <div class="page">
      <MenuBar/>
      <TitleCard title="TEAMS"/>
      <MainBody contentTitle="Current Teams We're Fielding"/>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainBody from '@/components/MainBody.vue'
  import TitleCard from '@/components/TitleCard.vue'
  import MenuBar from '@/components/MenuBar.vue'

  export default {
    name: 'HomeView',
    components: {
      TitleCard,
      MainBody,
      MenuBar

    }
  }
  </script>
  