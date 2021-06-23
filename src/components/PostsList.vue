<template>
  <div class="posts container">
    <VPost
      v-for="post in newPosts"
      :key="post.id"
      :postData="post"
      @delete-post="deletePost"
      @edit-post="$emit('edit-post', post.title, post.description, post.postNumber)"
    />
  </div>
</template>

<script>
import VPost from '@/components/VPost'
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    }
  },
  components: {
    VPost
  },
  computed: {
    newPosts: function() {
      return this.posts
    }
  },
  mounted() {
    return axios.get('http://localhost:3000/posts')
    .then(res => this.posts = res.data)
  },
  methods: {
    deletePost(postId) {
      axios.delete('http://localhost:3000/posts/' + postId)
      return axios.get('http://localhost:3000/posts')
      .then(res => this.posts = res.data)
    }
  }
}
</script>

<style>

</style>