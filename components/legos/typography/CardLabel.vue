<template>
  <h3 class="card--label">
    <slot></slot>
  </h3>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card--label {
  font-size: 0.89em;
  color: white;
  text-transform: capitalize;
}
</style>
