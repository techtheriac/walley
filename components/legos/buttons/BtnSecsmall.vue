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
  background: transparent;
  border-radius: 30px;
  border: 1px solid #fff;
  font-size: 12px;
  text-transform: capitalize;
  font-weight: bold;
  padding: 8px 20px;
  outline: none;
}
</style>
