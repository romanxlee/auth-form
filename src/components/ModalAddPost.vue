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

      <button
        @click="addPost"
        class="button"
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
      axios.post('http://localhost:3000/posts', {
        id: Date.now(),
        title: this.title,
        description: this.description,
        claps: 0,
        createdAt: new Date().toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}),
        updateAt: new Date().toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}),
        postNumber: Date.now()
      })
      this.$emit('modal-close')
      this.$emit('add-post')
    }
  }
}
</script>

<style>

</style>