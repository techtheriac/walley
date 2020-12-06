<template>
  <slider-container>
    <div class="d-flex">
      <div v-for="i in 11" :key="i" class="ml-5">
        <StreamUpcoming />
      </div>
    </div>
  </slider-container>
</template>

<script>
import SliderContainer from '~/components/legos/SliderContainer'
import StreamUpcoming from '~/components/cards/StreamUpcoming'
export default {
  components: {
    StreamUpcoming,
    SliderContainer,
  },
}
</script>

<style lang="scss" scoped></style>
