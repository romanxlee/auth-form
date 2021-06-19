<template>
  <div id="app" class="container">
    <VNavbar />
    <VPost />
  </div>
</template>

<script>
import VNavbar from '@/components/VNavbar'
import VPost from '@/components/VPost'

export default {
  name: 'App',
  components: {
    VNavbar,
    VPost
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
