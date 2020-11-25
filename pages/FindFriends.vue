<template>
  <div class="container__find-friends pa-12 d-flex flex-column">
    <h2 class="text-uppercase align-self-center">Find Friends</h2>
    <span class="font-weight-bold">Friends Request</span>
    <div class="card--container">
      <div v-for="i in 4" :key="i">
        <FriendRequest />
      </div>
    </div>

    <span class="font-weight-bold">Suggested Friends</span>
    <div class="card--container">
      <div v-for="i in 12" :key="i">
        <FriendSuggestion />
      </div>
    </div>
  </div>
</template>

<script>
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
import BtnSecsmall from '~/components/legos/buttons/BtnSecsmall'
import FriendRequest from '~/components/cards/FriendRequest'
import FriendSuggestion from '~/components/cards/FriendSuggestion'
export default {
  BtnPrimary,
  BtnSecsmall,
  FriendRequest,
  FriendSuggestion,
}
</script>

<style lang="scss" scoped>
.container__find-friends {
  > * + * {
    margin-top: 1.5em;
  }
}
.card--container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  > * {
    margin-bottom: 1em;
  }
}
</style>
