<template>
  <div id="app" class="container">
    <VNavbar
      @modal-login-open="modalLoginOpen = true"
      @modal-add-open="modalAddOpen = true"
    />
    <PostsList
      :key="addPost"
      @edit-post="getEditData"
    />
    <ModalLogin
      :class="{ 'is-active' : modalLoginOpen}"
      @modal-close="modalLoginOpen = false"
    />
    <ModalAddPost
      :class="{ 'is-active': modalAddOpen}"
      @modal-close="modalAddOpen = false"
      @add-post="addPost = !addPost"
    />
    <ModalEdit 
      :class="{ 'is-active' : modalEditOpen}"
      :title="postTitle"
      :description="postDescription"
      :number="postNumber"
      @modal-close="modalEditOpen = false"
      @add-post="addPost = !addPost"
    />
  </div>
</template>

<script>
import VNavbar from '@/components/VNavbar'
import PostsList from '@/components/PostsList'
import ModalLogin from '@/components/ModalLogin'
import ModalAddPost from '@/components/ModalAddPost'
import ModalEdit from '@/components/ModalEdit'

export default {
  name: 'App',
  data() {
    return {
      posts: [],
      modalLoginOpen: false,
      modalAddOpen: false,
      modalEditOpen: false,
      addPost: false,
      postTitle: '',
      postDescription: '',
      postNumber: 0
    }
  },
  components: {
    VNavbar,
    PostsList,
    ModalLogin,
    ModalAddPost,
    ModalEdit
  },
  methods: {
    getEditData(title, description, number) {
      this.modalEditOpen = true
      this.postTitle = title
      this.postDescription = description
      this.postNumber = number
    }
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
