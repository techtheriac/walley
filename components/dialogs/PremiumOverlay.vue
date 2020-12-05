<template>
  <div class="container__reminder">
    <div class="wrapper-price d-flex flex-column align-center">
      <v-icon class="icon-reset"> mdi-cash-multiple </v-icon>
      <b>Viewing Fee</b>
      <div class="price d-flex align-baseline">
        <b>200</b>
        <small class="ml-1">NGN</small>
      </div>
    </div>

    <div class="wrapper-message">
      <!-- <v-icon class="icon-close" @click="hideDialog"
        >mdi-close-circle-outline</v-icon
      > -->
      <div class="d-flex flex-column align-center">
        <v-icon class="icon-reset-lg"> mdi-cash-multiple </v-icon>
        <small class="my-4"
          >Your wallet will be charged with the viewing fee</small
        >
        <div class="btn-group">
          <nuxt-link to="/">
            <btn-secsmall>CANCEL</btn-secsmall>
          </nuxt-link>
          <btn-primary class="ml-4">PROCEED</btn-primary>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
import BtnSecsmall from '~/components/legos/buttons/BtnSecsmall'
export default {
  components: {
    BtnPrimary,
    BtnSecsmall,
  },
  data: () => ({}),
  methods: {
    hideDialog() {
      this.$emit('hide-reminder-dialog', false)
    },
  },
}
</script>

<style lang="scss" scoped>
$icon-font-size: 40px;

.container__reminder {
  display: grid;
  grid-template-columns: 2fr 3fr;
}
.wrapper-message {
  position: relative;
  background-color: var(--surface);
  padding: 4em 2em;

  .icon-close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  small {
    opacity: 0.5;
  }
}
.wrapper-price {
  background-color: var(--text-on-background);
  padding: 6em 2em 1em 2em;
}
.icon-reset {
  font-size: $icon-font-size;
}

.icon-reset-lg {
  font-size: $icon-font-size * 2;
}
.price {
  font-size: 1.9rem;

  span {
    font-size: 0.9rem;
  }
}
</style>
