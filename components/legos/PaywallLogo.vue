<template>
  <div class="container__paywall">
    <span class="paywall">PayWa<span class="paywall append">ll</span></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Lemon Jelly Personal';
  src: url('/fonts/lemon_jelly_personal_use-webfont.woff2') format('woff2'),
    url('/fonts/lemon_jelly_personal_use-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
.paywall {
  /* font-family: 'Lemon Jelly Personal'; */
  font-size: 1.7rem;
}

.append {
  color: var(--secondary);
  margin: 0;
  padding: 0;
}
</style>
