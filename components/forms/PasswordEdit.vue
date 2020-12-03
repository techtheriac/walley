<template>
  <div class="mt-4">
    <v-form class="d-flex flex-column">
      <div class="password__edit-container">
        <div>
          <span class="label--form">Old Password</span>
          <v-text-field
            v-model="profileData.oldPassword"
            label="*********"
            :rules="passwordRules"
            required
            type="password"
            single-line
            outlined
            dark
            dense
          ></v-text-field>
        </div>

        <div>
          <span class="label--form">New Password</span>
          <v-text-field
            v-model="profileData.newPassword"
            label="*********"
            :rules="passwordRules"
            required
            type="password"
            single-line
            outlined
            dark
            dense
          ></v-text-field>
        </div>

        <div>
          <span class="label--form">Confirm Password</span>
          <v-text-field
            v-model="profileData.confirmPassword"
            label="*********"
            :rules="passwordRules"
            required
            type="password"
            single-line
            outlined
            dark
            dense
          ></v-text-field>
        </div>
      </div>
      <btn-primary class="align-self-end">SAVE</btn-primary>
    </v-form>
  </div>
</template>

<script>
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
export default {
  components: {
    BtnPrimary,
  },
  data() {
    return {
      profileData: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.password__edit-container {
  display: grid;
  grid-template-columns: 300px;

  > * + * {
    margin-top: 0.5em;
  }
}

.label--form {
  font-size: 13px;
}
</style>
