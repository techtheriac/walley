<template>
  <slider-container>
    <div v-for="i in 11" :key="i" class="ml-5">
      <StreamContinue />
    </div>
  </slider-container>
</template>

<script>
import SliderContainer from '~/components/legos/SliderContainer'
import StreamContinue from '~/components/cards/StreamContinue'
export default {
  components: {
    StreamContinue,
    SliderContainer,
  },
}
</script>

<style lang="scss" scoped></style>
