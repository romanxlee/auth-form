<template>
  <div class="card">
    <h2 class="card-header-title">{{postData.title}}</h2>
    <div class="card-content">
      <div class="content">{{postData.description}}.</div>
      <div class="content" @click="clapPost(postData.id)">Количество хлопков: {{postData.claps}}</div>
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
    }
  }
}
</script>

<style>

</style>