<template>
  <div class="container__physical px-12 py-8">
    <div class="card-event">
      <div class="wrapper-img"></div>
      <div
        class="wrapper-description d-flex justify-space-between align-center px-6"
      >
        <div>
          <div class="tags my-6">
            <span v-for="j in 3" :key="j">#Cooking</span>
          </div>
          <h3>Children Painting Event</h3>
          <p>by Toby Adamu</p>
        </div>

        <button class="wrapper-reminder" @click="reminderDialog = true">
          <v-icon>mdi-alarm-multiple</v-icon>
          <small>Set a Reminder</small>
        </button>
        <!-- REMINDER DIALOG  START-->
        <v-dialog v-model="reminderDialog" width="550">
          <Reminder @hide-reminder-dialog="hideReminderDialog" />
        </v-dialog>
        <!-- REMINDER DIALOG  END-->
      </div>
    </div>

    <div class="details-event">
      <h4>About this event</h4>
      <p class="description-event">
        Painting is the practice of applying paint, pigment, color or other
        medium to a solid surface (called the "matrix" or "support"). The medium
        is commonly applied to the base with a brush, but other implements, such
        as knives, sponges, and airbrushes, can be used. In art, the term
        painting describes both the act and the result of the action (the final
        work is called "a painting").
      </p>
      <div class="group__date-location d-flex justify-space-between">
        <div class="wrapper-date d-flex flex-column">
          <span class="d-flex align-start">
            <v-icon class="icon-reset">mdi-calendar-weekend</v-icon>
            <small class="ml-1">Date and Time</small>
          </span>
          <small>Wed, 23rd Sep 2020</small>
          <small>6:30pm - 11:00pm</small>
          <small>Add to calender</small>
        </div>

        <div class="wrapper-location d-flex flex-column">
          <span class="d-flex align-start">
            <v-icon class="icon-reset">mdi-map-marker</v-icon>
            <small class="ml-1">Location</small>
          </span>
          <small>Freedom Park</small>
          <small> 1, Broadland Road, Ijesha </small>
          <small>View Map</small>
        </div>
      </div>

      <div class="wrapper-fee my-4">
        <span class="d-flex align-start">
          <v-icon class="icon-reset">mdi-wallet</v-icon>
          <small class="ml-1"> Fee </small></span
        >
        <small class="align-reset">N 1,500</small>
      </div>

      <btn-large @click="ticketDialog = true">PAY FEE FOR BOOK</btn-large>

      <!-- TICKET DIALOG  START-->
      <v-dialog v-model="ticketDialog" width="500">
        <div
          style="background-color: var(--surface)"
          class="d-flex flex-column py-2"
        >
          <v-icon class="align-self-end mx-4" @click="ticketDialog = false"
            >mdi-close-circle-outline</v-icon
          >
        </div>
        <BookTicket />
      </v-dialog>
      <!-- TICKET DIALOG  END-->
    </div>
  </div>
</template>

<script>
import BookTicket from '~/components/dialogs/BookTicket'
import Reminder from '~/components/dialogs/Reminder'
import BtnLarge from '~/components/legos/buttons/BtnLarge'
export default {
  components: {
    BtnLarge,
    BookTicket,
    Reminder,
  },
  data() {
    return {
      ticketDialog: false,
      reminderDialog: false,
    }
  },
  methods: {
    hideReminderDialog(e) {
      this.reminderDialog = e
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-reset {
  color: var(--secondary);
  font-size: 16px;
}
@media screen and (min-width: 960px) {
  .container__physical {
    display: grid;
    grid-template-columns: 3fr 1.2fr;
    gap: 2.5em;
  }
}

.card-event {
  height: 600px;
  background-color: var(--surface);
  border-radius: 10px;
}

.wrapper-description {
  background-color: var(--surface);
}

.wrapper-reminder {
  display: flex;
  flex-direction: column;
  align-items: center;

  > :not(small) {
    background-color: var(--secondary);
    padding: 10px;
    font-size: 1.5em;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    outline: none;
  }
}
.wrapper-img {
  background-image: url('https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  background-size: cover;
  height: 70%;
  border-radius: 10px;
}
.tags {
  > * + * {
    margin-left: 10px;
  }
  span {
    color: var(--secondary);
    background-color: rgba(225, 2, 102, 0.1);
    border-radius: 9px;
    padding: 5px 7px;
    font-size: 12px;
  }
}

.description-event {
  font-size: 0.85rem;
}
</style>
