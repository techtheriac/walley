<template>
  <footer
    :class="[
      'd-flex',
      'grey',
      'darken-4',
      'white--text',
      'px-8',
      'justify-space-between',
      'pt-12',
      $vuetify.breakpoint.smAndDown ? 'flex-column-reverse' : 'flex-row',
    ]"
  >
    <div class="footer__info">
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

      <div class="container__social">
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
    </div>

    <div class="footer__form">
      <h3 class="mb-4">Reach Us Quickly</h3>

      <div>
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

        <button class="footer__btn">SEND</button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
p {
  font-size: 0.8rem;
}

small {
  font-size: 0.6rem;
}
.footer__description {
  max-width: 30em;
}

.container__social-media-icons {
  margin-bottom: 5em;
  width: 8em;
  display: flex;
  justify-content: space-between;
  > * {
    color: var(--text-on-surface);
  }
}

.footer__btn {
  background: transparent linear-gradient(270deg, #ff7597 0%, #ff0266 100%) 0%
    0% no-repeat padding-box;
  border-radius: 30px;
  opacity: 1;
  font-size: 11px;
  font-weight: bold;
  padding: 10px 50px;
  outline: none;
}
</style>
