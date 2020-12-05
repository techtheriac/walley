<template>
  <div class="container__signup">
    <div class="wrapper--img a">
      <nuxt-link to="/">
        <PaywallLogo />
      </nuxt-link>
    </div>
    <div class="container__form b white--text d-flex flex-column align-center">
      <div class="d-flex flex-column align-center class wrapper--text">
        <h3>SIGN UP</h3>
        <small
          >Already have an account?
          <span><nuxt-link to="/signin">Sign in here</nuxt-link> </span></small
        >
      </div>
      <SignupForm />
    </div>
  </div>
</template>

<script>
import PaywallLogo from '~/components/legos/PaywallLogo'
import SignupForm from '~/components/forms/SignupForm'
export default {
  components: {
    PaywallLogo,
    SignupForm,
  },

  layout: 'base',
}
</script>

<style lang="scss" scoped>
.container__signup {
  display: grid;
  grid-template-rows: 200px auto;
  grid-template-columns: auto;
}

.container__form {
  padding: 2em;

  .wrapper--text {
    margin-bottom: calc(4em - 1vw);
  }
}

@media screen and (min-width: 800px) {
  .container__signup {
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
}
</style>
