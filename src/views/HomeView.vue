<template>
  <div class="page">
    <MenuBar class="menuBar">    </MenuBar>
    <TitleCard title="Welcome to the Future MTG App"/>
    <MainBody contentTitle="Main Body Titile" showContainer="true"/>
    <p>
      Get ready to get live.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBody from '@/components/MainBody.vue';
import TitleCard from '@/components/TitleCard.vue';
import MenuBar from '@/components/MenuBar.vue';


export default {
  name: 'HomeView',
  components: {
    TitleCard,
    MainBody, 
    MenuBar
  }
}
</script>
