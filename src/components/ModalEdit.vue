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
        @click="editPost"
        class="button"
        label="Add"
        type="is-primary">
        Edit
      </button>
      </div>
    </div>
    <button @click="$emit('modal-close')" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    title: String,
    description: String,
    number: Number
  },
  methods: {
    editPost() {
      axios.patch('http://localhost:3000/posts/' + this.number, {
        title: this.title,
        description: this.description,
        updatedAt:new Date().toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}),
      })
      this.$emit('modal-close')
      this.$emit('add-post')
    }
  }
}
</script>

<style>

</style>