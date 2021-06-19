<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-card">
      <section class="modal-card-body">
        <div class="field" label="Email">
            <input
                type="email"
                placeholder="Your email"
                required>
        </div>

        <div class="field" label="Password">
            <input
                type="password"
                password-reveal
                placeholder="Your password"
                required>
        </div>

        <label class="checkbox">
  <input type="checkbox">
  Remember me
</label>
      </section>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>