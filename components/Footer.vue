<template>
  <footer
    :class="[
      'd-flex',
      'grey',
      'darken-4',
      'white--text',
      'px-12',
      'justify-space-between',
      'pt-12',
      this.$vuetify.breakpoint.smAndDown ? 'flex-column-reverse' : 'flex-row',
    ]"
  >
    <div class="footer__info d-flex flex-column">
      <h2 class="mt-5">Contact Us</h2>

      <p class="footer__description">
        It’s very easy to get in touch with us. Just use the contact form or pay
        us a visit for a coffee at the office. Dynamically innovate competitive
        technology after an expanded array of leadership.
      </p>

      <h3>Head Office</h3>

      <p>
        121 King St, Lekki Phase 1, Lekki, Lagos <br />
        Phone: +234 2 8376 6284 <br />
        Email : hello@yourdomain.com
      </p>

      <PaywallLogo />

      <div class="container__social-media-icons">
        <i class="fi fi-facebook" aria-hidden="true"></i>
        <i class="fi fi-twitter" aria-hidden="true"></i>
        <i class="fi fi-instagram" aria-hidden="true"></i>
        <i class="fi fi-linkedin" aria-hidden="true"></i>
      </div>

      <small class="text__copyright">
        Copyright (c) 2020. All Rights reserved. Intelligent Innovations Co.
        Made with by Intelligent Innovations Co.
      </small>
    </div>

    <div class="footer__form d-flex flex-column align-start">
      <h3 class="mb-4">Reach Us Quickly</h3>

      <div class="d-flex flex-column">
        <div class="d-flex justify-space-between">
          <v-text-field
            class="mr-4"
            dark
            placeholder="Enter your name"
            background-color="#424242"
            filled
            rounded
            dense
          ></v-text-field>

          <v-text-field
            dark
            placeholder="Enter your email"
            background-color="#424242"
            filled
            rounded
            dense
          ></v-text-field>
        </div>

        <v-text-field
          dark
          placeholder="your message"
          background-color="#424242"
          filled
          rounded
          height="120"
        ></v-text-field>

        <!-- <button class="footer__btn">SEND</button> -->
        <btn-primary style="align-self: flex-end">Send</btn-primary>
      </div>
    </div>
  </footer>
</template>

<script>
import PaywallLogo from '~/components/legos/PaywallLogo'
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
export default {
  components: {
    PaywallLogo,
    BtnPrimary,
  },
}
</script>

<style lang="scss" scoped>
p {
  font-size: 0.9rem;
}

small {
  font-size: 0.65rem;
}
.footer__description {
  max-width: 30em;
}

.container__social-media-icons {
  width: 8em;
  margin-top: 2em;
  margin-bottom: 3em;
  display: flex;
  justify-content: space-between;
  > * {
    color: var(--text-on-surface);
  }
}

.text__copyright {
  margin-bottom: 20px;
}
</style>
