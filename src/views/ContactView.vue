<template>
    <div class="page">
      <MenuBar></MenuBar>
      <TitleCard title="CONTACT US"/>
      <MainBody contentTitle="Have a question we havem't answered? Send us an meail!"/>

      <div id="contactUsForm" class="forms">
        <p>form here</p>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainBody from '@/components/MainBody.vue'
  import TitleCard from '@/components/TitleCard.vue'
  import MenuBar from '@/components/MenuBar.vue'

  
  export default {
    name: 'ContactView',
    components: {
      TitleCard,
      MainBody,
      MenuBar
    }
  }
  </script>