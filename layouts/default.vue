<template>
  <v-app dark>
    <navigation />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import navigation from '~/components/navigation'
import Footer from '~/components/Footer'
export default {
  components: {
    Footer,
    navigation,
  },
  data() {
    return {
      overlay: true,
      zIndex: 10,
    }
  },
}
</script>
<style lang="scss"></style>
