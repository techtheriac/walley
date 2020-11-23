<template>
  <div class="container__card white--text">
    <div class="wrapper-img"></div>
    <div>
      <card-label>Children Painting Event</card-label>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        quibusdam quaerat harum nemo aspernatur officiis maxime iure
      </p>
      <div class="d-flex flex-column">
        <span>
          <v-icon class="icon__brand-color">mdi-calendar</v-icon>
          <small class="ml-3">Sep 12, 2020</small>
        </span>

        <span>
          <v-icon class="icon__brand-color"
            >mdi-clock-time-eight-outline</v-icon
          >
          <small class="ml-3">11:00 am</small>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CardLabel from '~/components/legos/typography/CardLabel'
export default {
  CardLabel,
}
</script>

<style lang="scss" scoped>
.container__card {
  display: grid;
  width: 350px;
  grid-template-columns: 35% 65%;
  border-radius: 5px;

  P {
    font-size: 0.85em;
  }
}

.container__card > :nth-child(2) {
  background-color: #1b1b1b;
  padding: 0.85em;
}

.wrapper-img {
  background-image: url('https://images.unsplash.com/photo-1605019460098-6650e17d7dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
  border-radius: 5px;
}

.icon__brand-color {
  color: var(--secondary);
}
</style>
