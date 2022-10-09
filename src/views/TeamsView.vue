<template>
    <div class="page">
      <TitleCard title="TEAMS"/>
      <MainBody contentTitle="Current Teams We're Fielding"/>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainBody from '@/components/MainBody.vue'
  import TitleCard from '@/components/TitleCard.vue'
  
  export default {
    name: 'HomeView',
    components: {
      TitleCard,
      MainBody
    }
  }
  </script>
  