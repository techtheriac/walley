<template>
  <div class="container__remove-card pa-6 d-flex flex-column align-center">
    <v-icon class="icon-close align-self-end" @click="hideDialog"
      >mdi-close-circle-outline</v-icon
    >
    <h3 class="align-self-center mb-2">Remove Card</h3>
    <small>Are you sure you want to remove this card?</small>
    <div
      class="card__wallet d-flex align-self-stretch flex-column justify-space-between my-3"
    >
      <div>
        <img
          src="/mastercard.png"
          width="64"
          height="64"
          alt="master-card-logo"
        />
      </div>
      <div class="wrapper-cardNumber d-flex justify-space-between">
        <b>****</b>
        <b>****</b>
        <b>****</b>
        <b>2233</b>
      </div>
      <div class="wrapper-cvv d-flex justify-space-between">
        <small>Expires 10/12</small>
        <small>CVV 102</small>
      </div>
    </div>
    <div class="d-flex flex-gap-sm">
      <btn-secsmall>Cancel</btn-secsmall>
      <btn-primary>Remove</btn-primary>
    </div>
  </div>
</template>

<script>
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
import BtnSecsmall from '~/components/legos/buttons/BtnSecsmall'
export default {
  components: {
    BtnPrimary,
    BtnSecsmall,
  },
  data: () => ({
    cardPin: '',
  }),
  methods: {
    hideDialog() {
      this.$emit('hide-ticket-dialog', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.container__remove-card {
  background-color: var(--background);
}
.card__wallet {
  background-color: var(--surface);
  padding: 1.5em;
  border-radius: 10px;
}
</style>
