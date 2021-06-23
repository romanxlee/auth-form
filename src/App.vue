<template>
  <div id="app" class="container">
    <VNavbar
      @modal-login-open="modalLoginOpen = true"
      @modal-add-open="modalAddOpen = true"
    />
    <PostsList />
    <ModalLogin
      :class="{ 'is-active' : modalLoginOpen}"
      @modal-close="modalLoginOpen = false"
    />
    <ModalAddPost
      :class="{ 'is-active': modalAddOpen}"
      @modal-close="modalAddOpen = false"
    />
  </div>
</template>

<script>
import VNavbar from '@/components/VNavbar'
import PostsList from '@/components/PostsList'
import ModalLogin from '@/components/ModalLogin'
import ModalAddPost from '@/components/ModalAddPost'

export default {
  name: 'App',
  data() {
    return {
      modalLoginOpen: false,
      modalAddOpen: false
    }
  },
  components: {
    VNavbar,
    PostsList,
    ModalLogin,
    ModalAddPost
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
