<template>
  <div class="container__ticket pa-6 d-flex flex-column">
    <v-icon class="icon-close align-self-end" @click="hideDialog"
      >mdi-close-circle-outline</v-icon
    >
    <h3 class="align-self-center mb-2">Children Painting Event</h3>
    <div class="ticket-details">
      <div class="ticket-detail">
        <small>Date:</small>
        <b>Mon, Aug 31st</b>
      </div>
      <div class="ticket-detail">
        <small>Check In Type:</small>
        <b>Regular Ticket</b>
      </div>
      <div class="ticket-detail">
        <small>Order ID:</small>
        <b>012345567</b>
      </div>
      <div class="ticket-detail">
        <small>Time:</small>
        <b>9:30am - 1:30pm</b>
        <small style="color: var(--secondary)">Add To Calender</small>
      </div>
      <div class="ticket-detail">
        <small>Place:</small>
        <b>1 Bourdillon Road, Maryland Lagos</b>
        <small style="color: var(--secondary)">View Map</small>
      </div>
    </div>
    <btn-primary class="align-self-center">Save Ticket As Image</btn-primary>
  </div>
</template>

<script>
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
export default {
  components: {
    BtnPrimary,
  },
  data: () => ({
    cardPin: '',
  }),
  methods: {
    hideDialog() {
      this.$emit('hide-ticket-dialog', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.container__ticket {
  background-color: var(--surface);
}

.ticket-details {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
}
.ticket-detail {
  display: flex;
  flex-basis: 33%;
  flex-direction: column;
  margin-bottom: 20px;

  b {
    font-size: 0.85rem;
  }
}
</style>
