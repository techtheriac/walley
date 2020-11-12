<template>
  <slider-container>
    <div v-for="i in 11" :key="i" class="ml-10">
      <AvatarLive />
    </div>
  </slider-container>
</template>

<script>
import SliderContainer from '~/components/legos/SliderContainer'
import AvatarLive from '~/components/AvatarLive'
export default {
  components: {
    AvatarLive,
    SliderContainer,
  },
}
</script>

<style lang="scss" scoped></style>
