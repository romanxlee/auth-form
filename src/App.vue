<template>
  <div id="app" class="container">
    <VNavbar />
    <PostsList />
  </div>
</template>

<script>
import VNavbar from '@/components/VNavbar'
import PostsList from '@/components/PostsList'

export default {
  name: 'App',
  components: {
    VNavbar,
    PostsList
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
}
</style>
