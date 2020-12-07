<template>
  <div class="container__fund-wallet pa-6 d-flex flex-column">
    <v-icon class="icon-close align-self-end" @click="hideDialog"
      >mdi-close-circle-outline</v-icon
    >
    <h3 class="align-self-center">Fund Wallet</h3>
    <v-form class="d-flex flex-column">
      <b class="form--label">Amount</b>
      <v-text-field
        v-model="cardPin"
        label="Enter Amount"
        required
        single-line
        outlined
        dark
        dense
        full-width
      ></v-text-field>
      <btn-primary class="align-self-center">Fund Wallet</btn-primary>
    </v-form>
  </div>
</template>

<script>
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
export default {
  components: {
    BtnPrimary,
  },
  data: () => ({}),
  methods: {
    hideDialog() {
      this.$emit('hide-reminder-dialog', false)
    },
  },
}
</script>

<style lang="scss" scoped></style>
