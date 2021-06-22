<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-card">
      <section class="modal-card-body">
        <div class="field" label="Email">
          <input
            v-model="email"
            type="email"
            placeholder="Your email"
            required
          >
        </div>

        <div class="field" label="Password">
          <input
            v-model="password"
            type="password"
            password-reveal
            placeholder="Your password"
            required
          >
        </div>
      </section>

      <button @click="logIn" class="button"
        label="Login"
        type="is-primary">
        Login
      </button>
      </div>
    </div>
    <button @click="$emit('modal-close')" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      regData: []
    }
  },
  methods: {
    logIn() {
      for (let i = 0; i < this.regData.length; i++) {
        if (this.regData[i].login == this.email && this.regData[i].password == this.password) {
        this.$store.commit('role', this.regData[i].role)
        this.$emit('modal-close')
      }}
    },
  },
  mounted() {
    return axios.get('http://localhost:3000/users')
    .then(res => this.regData = res.data)
    /* .then(res => res.data.forEach(item => {
      this.mailsList.push(item.login)
      this.passList.push(item.password)
    })) */
  }
}
</script>

<style>

</style>