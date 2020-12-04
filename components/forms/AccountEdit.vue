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
          <span class="label--form">Last Name</span>
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
