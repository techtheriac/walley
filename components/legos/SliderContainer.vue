<template>
  <div class="slider">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  > div {
    scroll-snap-align: start;
  }
}

.slider::-webkit-scrollbar {
  display: none;
}
</style>
