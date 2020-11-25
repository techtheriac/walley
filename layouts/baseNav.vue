<template>
  <v-app dark>
    <navigation />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
import navigation from '~/components/navigation'
export default {
  components: {
    navigation,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss"></style>
