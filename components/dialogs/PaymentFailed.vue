<template>
  <div class="container__fund-wallet pa-6 d-flex flex-column align-center">
    <v-icon class="icon-close align-self-end" @click="hideDialog"
      >mdi-close-circle-outline</v-icon
    >
    <h3>Payment Failed</h3>
    <small class="my-4">It seems your wallet has no fund</small>
    <div
      :class="[
        'd-flex',
        'flex-gap-sm',
        this.$vuetify.breakpoint.smAndDown ? 'flex-column' : 'flex-row',
      ]"
    >
      <btn-secsmall>CANCEL</btn-secsmall>
      <btn-primary>FUND WALLET</btn-primary>
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

<style lang="scss" scoped></style>
