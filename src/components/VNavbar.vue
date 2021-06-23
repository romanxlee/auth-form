<template>
  <nav class="navbar is-info">
    <a v-if="this.$store.state.role==='writer'" class="navbar-item navbar-end"
      @click="$emit('modal-add-open')"
    >
      Add Post
    </a>
    <a v-if="this.$store.state.role==='guest'" class="navbar-item navbar-end"
      @click="$emit('modal-login-open')"
    >
      Login
    </a>
    <a v-else class="navbar-item navbar-end"
      @click="logOut"
    >
      Logout
    </a>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.commit('role', 'guest')
    }
  }
}
</script>

<style>

</style>