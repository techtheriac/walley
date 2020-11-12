<template>
  <slider-container>
    <div v-for="i in 11" :key="i" class="ml-5">
      <StreamRecommended />
    </div>
  </slider-container>
</template>

<script>
import SliderContainer from '~/components/legos/SliderContainer'
import StreamRecommended from '~/components/cards/StreamRecommended'
export default {
  components: {
    StreamRecommended,
    SliderContainer,
  },
}
</script>

<style lang="scss" scoped></style>
