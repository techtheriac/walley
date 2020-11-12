<template>
  <button class="container__icon white--text d-flex flex-row">
    <v-icon class="white--text resize-icon">mdi-video</v-icon>
    <span>Live</span>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container__icon {
  background: transparent linear-gradient(270deg, #ff7597 0%, #ff0266 100%) 0%
    0% no-repeat padding-box;
  outline: none;
  border-radius: 10px;
  padding: 1px 10px;

  span {
    font-size: 10px;
    margin-left: 5px;
  }
}

.resize-icon {
  font-size: 16px !important;
}
</style>
