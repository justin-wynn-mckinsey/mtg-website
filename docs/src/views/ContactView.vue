<template>
    <div class="page">
      <MenuBar></MenuBar>
      <TitleCard title="CONTACT US"/>
      <MainBody contentTitle="Have a question we haven't answered? Send us an email!" contactCard="true"/>
      </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainBody from '@/components/MainBody.vue'
  import TitleCard from '@/components/TitleCard.vue'
  import MenuBar from '@/components/MenuBar.vue'

  
  export default {
    name: 'ContactView',
    data() {
        return {
            currentPage: 'contact'
        }
    },
    components: {
      TitleCard,
      MainBody,
      MenuBar
    }
  }
  </script>