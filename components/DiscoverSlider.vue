<template>
  <slider-container>
    <div v-for="i in 11" :key="i" class="ml-5">
      <StreamDiscover />
    </div>
  </slider-container>
</template>

<script>
import SliderContainer from '~/components/legos/SliderContainer'
import StreamDiscover from '~/components/cards/StreamDiscover'
export default {
  components: {
    StreamDiscover,
    SliderContainer,
  },
}
</script>

<style lang="scss" scoped></style>
