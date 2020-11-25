<template>
  <div class="container__wallet white--text">
    <div class="balance--wallet a card__wallet"></div>
    <div class="card--wallet b card__wallet">card</div>
    <div class="add-card c card__wallet">add card</div>
    <div class="table--wallet d">table</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container__wallet {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 200px auto;
  grid-template-areas: 'a b c' 'd d d';
}

.a {
  grid-area: a;
}

.b {
  grid-area: b;
}

.c {
  grid-area: c;
}

.d {
  grid-area: d;
}
</style>
