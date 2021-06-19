<template>
  <div class="posts container">
    <VPost
      v-for="post in posts"
      :key="post.id"
      :postData="post"
    />
  </div>
</template>

<script>
import VPost from '@/components/VPost'
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    }
  },
  components: {
    VPost
  },
  mounted() {
    return axios.get('http://localhost:3000/posts')
    .then(res => this.posts = res.data)
  }
}
</script>

<style>

</style>