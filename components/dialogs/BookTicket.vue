<template>
  <div class="container__verify d-flex flex-column align-center">
    <h3>Book Ticket</h3>
    <v-form class="mt-5 d-flex align-center flex-column">
      <div>
        <label for="">Tickets</label>
        <v-select
          :items="items"
          filled
          dense
          solo
          label="Select how many tickets"
        ></v-select>
        <label for="">Amount</label>
        <v-text-field
          v-model="email"
          label="Enter amount"
          type="email"
          required
          single-line
          outlined
          dark
          dense
          full-width="true"
        ></v-text-field>
      </div>
      <btn-primary>Pay 1500</btn-primary>
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
    phoneNumber: '',
    email: '',
    accountNumber: '',
    items: [2, 3, 5],
  }),
}
</script>

<style lang="scss" scoped>
.container__verify {
  background-color: var(--surface);
  max-width: 50em;
  padding: 2em;
}

.description {
  opacity: 0.6;
}
</style>
