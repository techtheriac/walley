<template>
  <v-app dark>
    <v-main>
      <div class="container__content">
        <nuxt />
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  components: {
    Footer,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss">
* {
  font-family: Raleway, sans-serif;
}
:root {
  --secondary: #ff0266;
  --primary: #ff7597;
  --text-on-surface: #999999;
  --text-on-background: #707070;
  --surface: #2e2e2e;
  --background: #121212;
}

.container__content {
  background-color: var(--background);
}
</style>
