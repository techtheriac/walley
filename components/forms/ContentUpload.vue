<template>
  <div class="container__form white--text">
    <v-form class="d-flex flex-column" @submit.prevent="send_details">
      <span class="label--form">Content Title</span>
      <small class="description--form"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        exercitationem.</small
      >
      <v-text-field
        v-model="contentData.title"
        label="Enter Title"
        single-line
        outlined
        dark
        dense
      ></v-text-field>

      <span class="label--form">Organizer</span>
      <small class="description--form"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        exercitationem.</small
      >
      <v-text-field
        v-model="contentData.organizer"
        label="Enter Organizer name"
        single-line
        outlined
        dark
        dense
      ></v-text-field>

      <span class="label--form">Category</span>
      <small class="description--form"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        exercitationem.</small
      >
      <v-select solo dark></v-select>

      <span class="label--form">Tags</span>
      <small class="description--form"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        exercitationem.</small
      >
      <div class="d-flex">
        <div>
          <v-text-field
            v-model="tag"
            label="Enter tag"
            single-line
            outlined
            dark
            dense
          ></v-text-field>
          <small>{{ contentData.tags.length }} / 10</small>
        </div>
        <v-btn outlined color="white" class="ml-4" @click="addTag">Add</v-btn>
      </div>

      <span class="label--form">Event Venue</span>
      <small class="description--form"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        exercitationem.</small
      >
      <span class="mb-6">
        <v-btn flat outlined color="white" large class="text-uppercase"
          >Online Event</v-btn
        >
        <v-btn flat outlined color="white" large class="text-uppercase"
          >Physical Event</v-btn
        >
      </span>

      <span class="label--form">Date and Time</span>
      <small class="description--form"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        exercitationem.</small
      >

      <div class="d-flex">
        <!-- START DATE PICKER -->
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="contentData.startDate"
              dark
              label="Event Start Date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="contentData.date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

        <!-- START TIME PICKER -->
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="time"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              label="Event Start Time"
              dark
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="time"
            full-width
            @click:minute="$refs.menu.save(time)"
          ></v-time-picker>
        </v-menu>
      </div>

      <div class="d-flex">
        <!-- END DATE PICKER -->
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="contentData.endDate"
              dark
              label="Event End Date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

        <!-- END TIME PICKER -->
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="time"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              label="Event End Time"
              dark
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="time"
            full-width
            @click:minute="$refs.menu.save(time)"
          ></v-time-picker>
        </v-menu>
      </div>

      <span class="label--form">Viewing Fee</span>
      <small class="description--form"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        exercitationem.</small
      >
      <v-text-field
        v-model="contentData.fee"
        label="0.00"
        single-line
        outlined
        dark
        dense
      ></v-text-field>

      <div>
        <i class="form--disclaimer">
          Please note: <br />
          The viewing fee is the charge of cost per view to the user <br />
          there is a 10% charge per each viewing fee.
        </i>
      </div>

      <div class="d-flex align-center">
        <span class="large-space">Part of Series?</span>
        <v-switch v-model="switch1" inset></v-switch>
      </div>

      <div class="btn-group align-self-end">
        <btn-secondary class="mr-4">DISCARD</btn-secondary>
        <btn-large @click="send_details">SAVE & CONTINUE</btn-large>
      </div>
    </v-form>
  </div>
</template>

<script>
import BtnSecondary from '~/components/legos/buttons/BtnSecondary'
import BtnLarge from '~/components/legos/buttons/BtnLarge'
export default {
  components: {
    BtnSecondary,
    BtnLarge,
  },
  data() {
    return {
      contentData: {
        title: '',
        organizer: '',
        fee: '',
        tags: [],
        startDate: '',
        endDate: '',
      },
      tag: '',
      menu: false,
      modal: false,
      menu2: false,
      date: '',
      time: '',
      switch1: '',
    }
  },
  methods: {
    addTag() {
      this.contentData.tags.push(this.tag)
      this.tag = ''
    },
    send_details() {},
  },
}
</script>

<style lang="scss" scoped>
.large-space {
  margin-right: 10em;
}

.description--form {
  opacity: 0.6;
  margin: 0.5em 0;
}

.label--form {
  font-weight: bold;
}

.form--disclaimer {
  opacity: 0.4;
  font-size: 0.7rem;
}
</style>
