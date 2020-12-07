<template>
  <div class="container__add-card d-flex flex-column align-center pa-6">
    <v-icon class="icon-close align-self-end" @click="hideDialog"
      >mdi-close-circle-outline</v-icon
    >
    <h3>Add Card</h3>
    <small
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus
      ex aspernatur.</small
    >
    <v-form class="d-flex flex-column">
      <b class="form--label">Select Bank</b>
      <v-select :items="banksList" label="GTB" dense solo></v-select>
      <b class="form--label">Enter account number</b>
      <v-text-field
        v-model="accountNumber"
        label="8980982828"
        required
        single-line
        outlined
        dark
        dense
        full-width
      ></v-text-field>
      <b class="form--label">Card Number</b>
      <v-text-field
        v-model="cardNumber"
        label="**** **** **** ****"
        required
        single-line
        outlined
        dark
        dense
        full-width
      ></v-text-field>
      <div class="d-flex flex-gap-sm">
        <span>
          <b class="form--label">Expiry</b>
          <v-text-field
            v-model="cardExpiry"
            label="MM / YY"
            required
            single-line
            outlined
            dark
            dense
            full-width
          ></v-text-field>
        </span>

        <span>
          <b class="form--label">CVV</b>
          <v-text-field
            v-model="cardCvv"
            label="***"
            required
            single-line
            outlined
            dark
            dense
            full-width
          ></v-text-field>
        </span>

        <span>
          <b class="form--label">PIN</b>
          <v-text-field
            v-model="cardPin"
            label="****"
            required
            single-line
            outlined
            dark
            dense
            full-width
          ></v-text-field>
        </span>
      </div>
      <btn-primary class="align-self-center">Add Debit Card</btn-primary>
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
    accountNumber: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardPin: '',
    banksList: ['UBA', 'First Bank', 'Stambic IBTC'],
  }),
  methods: {
    hideDialog() {
      this.$emit('hide-reminder-dialog', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.flex-gap-sm {
  gap: 1.3em;
}
</style>
