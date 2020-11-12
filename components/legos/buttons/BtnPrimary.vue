<template>
  <button class="btn__primary">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.btn__primary {
  background: transparent linear-gradient(270deg, #ff7597 0%, #ff0266 100%) 0%
    0% no-repeat padding-box;
  border-radius: 30px;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 20px;
  outline: none;
  width: 80px;
}
</style>
