<template>
  <button class="btn__primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick(e) {
      this.$emit('click', e)
    },
  },
}
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
  /* width: 80px; */
}
</style>
