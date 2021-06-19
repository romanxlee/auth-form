<template>
  <div id="app" class="container">
    <VNavbar
      @modal-open="modalOpen = true"
    />
    <PostsList />
    <VModal
      :class="{ 'is-active' : modalOpen}"
      @modal-close="modalOpen = false"
    />
  </div>
</template>

<script>
import VNavbar from '@/components/VNavbar'
import PostsList from '@/components/PostsList'
import VModal from '@/components/VModal'

export default {
  name: 'App',
  data() {
    return {
      modalOpen: false
    }
  },
  components: {
    VNavbar,
    PostsList,
    VModal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
