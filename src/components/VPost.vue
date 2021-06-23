<template>
  <div class="card">
    <h2 class="card-header-title">{{postData.title}}</h2>
    <div class="card-content">
      <div class="content">{{postData.description}}</div>
      <button v-if="this.$store.state.role === 'reader'" class="button" @click="clapPost(postData.id)">
        <figure class="image is-24x24">
          <img src="../assets/claps.png">
        </figure>
        {{postData.claps}}
      </button>
      <button v-if="this.$store.state.role === 'writer'" @click="$emit('delete-post', postData.id)" class="button">
        Delete
      </button>
    </div>
    <div class="card-footer">{{postData.createdAt.toLocaleString('ru', {hour: 'numeric', minute: 'numeric', second: 'numeric'})}}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    postData: Object
  },
  methods: {
    clapPost(postId) {
      axios.patch('http://localhost:3000/posts/' + postId, {
        claps: this.postData.claps +=1
      })
    },
  }
}
</script>

<style>

</style>