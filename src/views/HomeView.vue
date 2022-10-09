<template>
  <div class="home">
    <MainBody msg="Welcome to the Future MTG App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBody from '@/components/MainBody.vue'

export default {
  name: 'HomeView',
  components: {
    MainBody
  }
}
</script>
