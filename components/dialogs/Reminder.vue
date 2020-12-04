<template>
  <div class="container__reminder">
    <div class="wrapper-bell d-flex flex-column align-center">
      <v-icon class="icon-reset"> mdi-bell-outline </v-icon>
      <small>2 hrs</small>
      <small>reminder</small>
    </div>

    <div class="wrapper-message">
      <v-icon class="icon-close" @click="hideDialog"
        >mdi-close-circle-outline</v-icon
      >
      <div class="">
        <h3>Reminder Set Successfully</h3>
        <small>You will be notified 2hrs before the livestream</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  methods: {
    hideDialog() {
      this.$emit('hide-reminder-dialog', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.container__reminder {
  display: grid;
  grid-template-columns: 30% 70%;
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
.wrapper-bell {
  background-color: var(--text-on-background);
  padding: 2em;
}
.icon-reset {
  font-size: 40px;
}
</style>
