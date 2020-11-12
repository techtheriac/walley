<template>
  <slider-container>
    <div v-for="i in 11" :key="i" class="ml-5">
      <StreamOndemand />
    </div>
  </slider-container>
</template>

<script>
import SliderContainer from '~/components/legos/SliderContainer'
import StreamOndemand from '~/components/cards/StreamOndemand'
export default {
  components: {
    StreamOndemand,
    SliderContainer,
  },
}
</script>

<style lang="scss" scoped></style>
