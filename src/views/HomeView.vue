<template>
  <div class="page">
    <TitleCard title="Welcome to the Future MTG App"/>
    <MainBody contentTitle="Main Body Titile"/>
    <p>
      Get ready to get live.
    </p>
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
