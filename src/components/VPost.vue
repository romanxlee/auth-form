<template>
  <div class="card">
    <h2 class="card-header-title">{{postData.title}}</h2>
    <div class="card-content">
      <div class="content">{{postData.description}}.</div>
    </div>
    <div class="card-footer"></div>
  </div>
</template>

<script>
export default {
  props: {
    postData: Object
  }
}
</script>

<style>

</style>