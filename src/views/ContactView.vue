<template>
    <div class="page">
      <TitleCard title="CONTACT US"/>
      <MainBody contentTitle="Have a question we havem't answered? Send us an meail!"/>

      <div id="contactUsForm" class="forms">
        
      </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainBody from '@/components/MainBody.vue'
  import TitleCard from '@/components/TitleCard.vue'
  
  export default {
    name: 'ContactView',
    components: {
      TitleCard,
      MainBody
    }
  }
  </script>