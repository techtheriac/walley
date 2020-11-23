<template>
  <div>
    <v-form class="d-flex flex-column">
      <span class="label--form"> Full Name </span>
      <v-text-field
        v-model="formData.name"
        label="Enter Full Name"
        :rules="nameRules"
        single-line
        outlined
        dark
        dense
      ></v-text-field>
      <span class="label--form">Email Address</span>
      <v-text-field
        v-model="formData.email"
        label="Enter email Address"
        type="email"
        :rules="emailRules"
        required
        single-line
        outlined
        dark
        dense
      ></v-text-field>
      <span class="label--form"> Phone Number </span>
      <v-text-field
        v-model="formData.phoneNumber"
        label="Enter phone Number"
        :rules="phoneNumberRules"
        single-line
        outlined
        dark
        dense
      ></v-text-field>
      <span class="label--form"> Password </span>
      <v-text-field
        v-model="formData.password"
        label="password"
        :rules="passwordRules"
        type="password"
        single-line
        outlined
        dark
        dense
      ></v-text-field>
      <v-checkbox
        v-model="formData.agreeToTerms"
        label="By creating an account you agree to our terms and conditions"
        :rules="agreeToTermsRules"
        single-line
        outlined
        dark
        required
      ></v-checkbox>
      <btn-large class="align-self-center">SignUp</btn-large>
    </v-form>
  </div>
</template>

<script>
import BtnLarge from '~/components/legos/buttons/BtnLarge'
export default {
  components: {
    BtnLarge,
  },
  data() {
    return {
      nameRules: [
        (value) => !!value || 'Name is required',
        (value) => value.length > 1 || 'Minimum length is 2',
      ],
      emailRules: [
        (value) => !!value || 'Email is required',
        (value) => value.indexOf('@') !== 0 || 'Email should have a username',
        (value) => value.includes('@') || 'Email should include an @ symbol',
        (value) =>
          value.indexOf('.') - value.indexOf('@') > 1 ||
          'Email should contain a valid domain',
        (value) =>
          value.indexOf('.') <= value.length - 3 ||
          'Email should contain a valid domain extension',
      ],
      phoneNumberRules: [(value) => !!value || 'Phone Number is required'],
      agreeToTermsRules: [
        (value) =>
          !!value ||
          'You must agree to the terms and conditions to sign up for an account',
      ],
      passwordRules: [
        (value) => value.length > 8 || 'Password must be at least 8 characters',
      ],
      formData: {
        name: '',
        email: '',
        phoneNumber: '',
        agreeToTerms: false,
        password: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.label--form {
  font-size: 0.85rem;
  padding-bottom: 0.56em;
}
</style>
