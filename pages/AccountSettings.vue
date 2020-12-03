<template>
  <div class="container__settings border--radius-md">
    <div class="white--text mb-8">
      <h3>Account Settings</h3>
      <small>Change your account and profile settings</small>
    </div>
    <v-card class="border--radius-md">
      <v-tabs vertical>
        <v-tab class="d-flex justify-space-between">
          <v-icon left> mdi-account </v-icon>
          <small>Personal Data</small>
        </v-tab>
        <v-tab class="d-flex justify-space-between">
          <v-icon left> mdi-lock </v-icon>
          <small>Password</small>
        </v-tab>
        <v-tab class="d-flex justify-space-between">
          <v-icon left> mdi-bell-outline </v-icon>
          <small>Notification</small>
        </v-tab>
        <v-tab class="d-flex justify-space-between">
          <v-icon left> mdi-headphones </v-icon>
          <small>Help</small>
        </v-tab>

        <v-tab-item>
          <div class="personal--info px-8 pt-2 pb-8">
            <h4>Account Information</h4>
            <AccountEdit />
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="set--password px-8 pt-2 pb-8">
            <h4>Set Password</h4>
            <PasswordEdit />
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="notification">
            <h4>Notification</h4>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="help">
            <h4>Help</h4>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import AccountEdit from '~/components/forms/AccountEdit'
import PasswordEdit from '~/components/forms/PasswordEdit'
export default {
  components: {
    AccountEdit,
    PasswordEdit,
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .container__settings {
    padding: 3em;
  }
}

.border--radius-md {
  border-radius: 10px;
}

h3 + small {
  opacity: 0.5;
}
</style>
