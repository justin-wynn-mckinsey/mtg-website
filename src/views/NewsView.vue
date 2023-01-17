 <template>
    <div class="page">
      <MenuBar></MenuBar>
      <TitleCard title="NEWS"/>
      <MainBody contentTitle="This is news"/>
    <p>
        Latest Updates
    </p>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainBody from '@/components/MainBody.vue'
  import TitleCard from '@/components/TitleCard.vue'
  import MenuBar from '@/components/MenuBar.vue'

  
  export default {
    name: 'NewsView',
    components: {
      TitleCard,
      MainBody, 
      MenuBar
}
  }
  </script>
  