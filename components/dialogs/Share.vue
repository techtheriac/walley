<template>
  <div class="container__fund-wallet pa-6 d-flex flex-column">
    <v-icon class="icon-close align-self-end" @click="hideDialog"
      >mdi-close-circle-outline</v-icon
    >
    <h3 class="align-self-center">Share to</h3>
    <div>
      <v-icon>mdi-file</v-icon>
      <small>Copy the stream link</small>
    </div>
    <v-divider class="my-4"></v-divider>
    <div class="container__icons d-flex justify-space-around">
      <span
        v-for="iconGrp in icons"
        :key="iconGrp"
        class="icon d-flex flex-column align-center"
      >
        <img
          :src="iconGrp.icon"
          :alt="iconGrp.label"
          width="60px"
          height="60px"
          class="mb-1"
        />
        <small>{{ iconGrp.label }}</small>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    icons: [
      { to: '/', icon: '/message.svg', label: 'Messages' },
      { to: '/', icon: '/gmail.svg', label: 'Gmail' },
      { to: '/', icon: '/twitter.svg', label: 'Twitter' },
      { to: '/', icon: 'whatsapp.svg', label: 'Whatsapp' },
      { to: '/', icon: 'instagram.svg', label: 'Instagram' },
    ],
  }),
  methods: {
    hideDialog() {
      this.$emit('hide-reminder-dialog', false)
    },
  },
}
</script>

<style lang="scss" scoped></style>
