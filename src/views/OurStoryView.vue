<template>
    <div class="page">
      <MenuBar>    </MenuBar>
      <TitleCard title="Our Story"/>
      <MainBody contentTitle="How we've progressed" storyline="true"/>
    </div>
  </template>

<script>
// @ is an alias to /src
import MainBody from '@/components/MainBody.vue'
import TitleCard from '@/components/TitleCard.vue'
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'OurStoryView',
  data() {
        return {
            currentPage: 'ourstory'
        }
    },
  components: {
    TitleCard,
    MainBody, 
    MenuBar
  }
}
</script>
