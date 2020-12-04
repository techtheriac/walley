<!-- TO DO - Make Date Birth Field A Date Picker -->
<template>
  <div class="mt-4">
    <v-form class="d-flex flex-column">
      <UploadPreview @profile-picture="setProfilePicture" />
      <div class="form__edit-container mt-4">
        <div>
          <span class="label--form">First Name</span>
          <v-text-field
            v-model="profileData.firstName"
            label="John"
            :rules="nameRules"
            required
            single-line
            outlined
            dark
            dense
          ></v-text-field>
        </div>

        <div>
          <span class="label--form">Last Name</span
          >OoFgkNbWdvyB4Jk2KUaMGP9BaGfagBgxYsSIESNGjBgxYsSIESNG/yY5yUNSYvyZNuMYVFVBVe04nXYSPHE0NrVyuLHlTJsVI0aM/xDO/PRSjBgxYsSIESNGjBgxYsSIEaPfkpOV2i9F1eORlBhPTlbqmTYjRowY/yHEhNUYMWLEiBEjRowYMWLEiBEjxnFJTozH4bCfaTN6hMNhP2uE4BgxYpzdxITVGDFixIgRI0aMGDFixIgRI8Yx2O02kpI8Z9qMXpGc5MFui0U/jBEjRt8SE1ZjxIgRI0aMGDFixIgRI0aMGMeQ4HGfaRMiwnOW2x8jRoz+T0xYjREjRowYMWLEiBEjRowYMWIcg+0s9/g82+2PESNG/+c/QljdsnXLmTYhYmJl6B/EytA/iJWhfxArQ/8gVob+QawM/YNYGfoHsTL0D2Jl6B+c7WXQ1LNbMlDEmbYgMs72+2fb9m1n2oQYMfqcs7uWDJOdO3ecaRMiJlaG/kGsDP2DWBn6B7Ey9A9iZegfxMrQP4iVoX8QK0P/IFaG/sHZXgZNO7s9Ph0Ox5k2ISLO9vtne0xYjfEfQJ/UklJKhDi7p4ZkwB963a0strMrG+LZxGv1q3mw4i2ag94eHZdgc/OL/Llcl3ZOH1kWPm63k7SURNQuM7tSSgzDCHVKdF1HVdVu95VhmNQ1NOH1+k67zU
          <v-text-field
            v-model="profileData.lastName"
            label="Doe"
            :rules="nameRules"
            required
            single-line
            outlined
            dark
            dense
          ></v-text-field>
        </div>

        <div>
          <span class="label--form">Email</span>
          <v-text-field
            v-model="profileData.email"
            label="Enter email Address"
            type="email"
            :rules="emailRules"
            required
            single-line
            outlined
            dark
            dense
          ></v-text-field>
        </div>

        <div>
          <span class="label--form">Phone Number</span>
          <v-text-field
            v-model="profileData.phoneNumber"
            label="Doe"
            :rules="phoneNumberRules"
            required
            single-line
            outlined
            dark
            dense
          ></v-text-field>
        </div>

        <div>
          <span class="label--form">Gender</span>
          <v-text-field
            v-model="profileData.gender"
            label="Male"
            required
            single-line
            outlined
            dark
            dense
          ></v-text-field>
        </div>

        <div>
          <span class="label--form">Date Of birth</span>
          <v-text-field
            v-model="profileData.email"
            label="Enter email Address"
            type="email"
            :rules="emailRules"
            required
            single-line
            outlined
            dark
            dense
          ></v-text-field>
        </div>
      </div>
      <btn-primary class="align-self-end">Save</btn-primary>
    </v-form>
  </div>
</template>

<script>
import UploadPreview from '~/components/UploadPreview'
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
export default {
  components: {
    UploadPreview,
    BtnPrimary,
  },
  data() {
    return {
      profileData: {
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        gender: '',
        profilePicture: null,
      },
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
    }
  },
  methods: {
    setProfilePicture(data) {
      this.profileData.profilePicture = data
      // console.log(this.profileData.profilePicture)
    },
  },
}
</script>

<style lang="scss" scoped>
.form__edit-container {
  display: grid;
  grid-template-columns: repeat(2, 300px);
  gap: 1.2em;
}

.label--form {
  font-size: 13px;
}
</style>
