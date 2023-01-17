<template>
    <div class="page">
        <MenuBar></MenuBar>
        <TitleCard title="EVENTS"/>
        <MainBody contentTitle="Our Upcoming Events"/>
 
    </div>
  </template>
  
  <script>
// @ is an alias to /src
import MainBody from '@/components/MainBody.vue'
import TitleCard from '@/components/TitleCard.vue'
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'EventsView',
  components: {
    TitleCard,
    MainBody, 
    MenuBar
  }
}
</script>


