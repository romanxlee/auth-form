<template>
  <nav class="navbar is-info">
    <a v-if="this.$store.state.role==='guest'" class="navbar-item navbar-end is-light"
      @click="$emit('modal-open')"
    >
      Login
    </a>
    <a v-else class="navbar-item navbar-end is-light"
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