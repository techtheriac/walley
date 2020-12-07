<template>
  <div class="container__fund-wallet pa-6 d-flex flex-column">
    <v-icon class="icon-close align-self-end" @click="hideDialog"
      >mdi-close-circle-outline</v-icon
    >
    <h3 class="align-self-center">Withdraw</h3>
    <v-form class="d-flex flex-column">
      <b class="form--label">Amount</b>
      <v-text-field
        v-model="amount"
        label="Enter Amount"
        required
        single-line
        outlined
        dark
        dense
        full-width
      ></v-text-field>
      <b class="form--label">Commission</b>
      <v-text-field
        v-model="commission"
        label="N67"
        required
        single-line
        outlined
        dark
        dense
        full-width
      ></v-text-field>
      <btn-primary class="align-self-center">Withdraw</btn-primary>
    </v-form>
  </div>
</template>

<script>
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
export default {
  components: {
    BtnPrimary,
  },
  data: () => ({
    amount: '',
    commission: '',
  }),
  methods: {
    hideDialog() {
      this.$emit('hide-reminder-dialog', false)
    },
  },
}
</script>

<style lang="scss" scoped></style>
