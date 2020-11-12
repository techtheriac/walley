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
    return {}
  },
}
</script>
<style lang="scss">
@font-face {
  font-family: 'Avenir Regular';
  src: url('/fonts/AvenirNextLTPro-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Avenir Bold';
  src: url('/fonts/AvenirNextLTPro-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

* {
  font-family: Avenir Regular, sans-serif;
}

:root {
  --secondary: #ff0266;
  --primary: #ff7597;
  --text-on-surface: #999999;
  --text-on-background: #707070;
  --surface: #2e2e2e;
  --background: #121212;
}

h1,
h2,
h3,
h4,
h5,
h5 {
  font-family: 'Avenir Bold';
}
</style>
