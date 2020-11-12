<template>
  <div class="container__card white--text">
    <div class="wrapper-img"></div>
    <div class="mt-3">
      <card-label>Business Management 101</card-label>
      <small>Lisa Ann</small>
    </div>
  </div>
</template>

<script>
import CardLabel from '~/components/legos/typography/CardLabel'
export default {
  CardLabel,
}
</script>

<style lang="scss" scoped>
.container__card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 250px auto;
  border-radius: 5px;
}
.wrapper-img {
  background-image: url('https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
  border-radius: 5px;
}
</style>
