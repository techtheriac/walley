<template>
  <div class="container__verify d-flex flex-column align-center">
    <h3>Verification Form</h3>
    <small class="description"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim
      inventore quis quae aliquam earum esse nesciunt suscipit rerum amet,
      perferendis voluptates sed dolore nisi quibusdam repudiandae rem! Placeat,
      alias.</small
    >

    <v-form class="mt-5 d-flex flex-column align-center">
      <div>
        <v-text-field
          v-model="phoneNumber"
          label="Phone Number"
          required
          single-line
          outlined
          dark
          dense
          full-width="true"
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="Enter email Address"
          type="email"
          required
          single-line
          outlined
          dark
          dense
          full-width="true"
        ></v-text-field>

        <v-text-field
          v-model="accountNumber"
          label="Account Number"
          type="email"
          required
          single-line
          outlined
          dark
          dense
          full-width="true"
        ></v-text-field>
      </div>
      <btn-primary>VERIFY</btn-primary>
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
