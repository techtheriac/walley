<template>
  <div class="container__signin">
    <div class="wrapper--img a">
      <nuxt-link to="/">
        <PaywallLogo />
      </nuxt-link>
    </div>
    <div class="container__form b white--text d-flex flex-column align-center">
      <div class="wrapper--text d-flex flex-column align-center">
        <h3>FORGOT PASSOWRD</h3>
        <small
          >we are here to help you recover your password. Enter the email
          address you joined with and we'll send you instructions to reset your
          password</small
        >
      </div>
      <v-form class="d-flex flex-column align-center">
        <div>
          <small>Email Address</small>
          <v-text-field
            v-model="email"
            label="Enter email Address"
            type="email"
            :rules="emailRules"
            required
            single-line
            outlined
            dark
            dense
            full-width="true"
          ></v-text-field>
        </div>
        <btn-primary>Reset</btn-primary>
      </v-form>
    </div>
  </div>
</template>

<script>
import PaywallLogo from '~/components/legos/PaywallLogo'
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
export default {
  components: {
    PaywallLogo,
    BtnPrimary,
  },
  data: () => ({
    email: '',
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
  }),

  layout: 'base',
}
</script>

<style lang="scss" scoped>
.container__signin {
  display: grid;
  grid-template-rows: 200px calc(100vh - 200px);
  grid-template-columns: auto;
}

.container__form {
  padding: 2em;
}

@media screen and (min-width: 960px) {
  .container__signin {
    display: grid;
    grid-template-columns: 45vw 55vw;
    grid-template-rows: auto;
    height: 100%;
  }
}

.wrapper--img {
  padding: 2em 2em 7em 4em;
  background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
}

.container__form {
  background-color: var(--background);
  .wrapper--text {
    margin-bottom: calc(4em - 1vw);
  }
}
</style>
