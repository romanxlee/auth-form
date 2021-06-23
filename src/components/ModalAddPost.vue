<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-card">
      <section class="modal-card-body">
        <div class="field" label="Title">
          <input
            v-model="title"
            type="text"
            placeholder="Title"
            required
          >
        </div>

        <div class="field" label="Description">
          <input
            v-model="description"
            type="textarea"
            placeholder="Description"
            required
          >
        </div>
      </section>

      <button class="button"
        label="Add"
        type="is-primary">
        Add
      </button>
      </div>
    </div>
    <button @click="$emit('modal-close')" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    addPost() {
      axios.post('http://localhost:3000/posts')
    }
  }
}
</script>

<style>

</style>