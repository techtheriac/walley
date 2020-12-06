<template>
  <main class="px-12 py-8">
    <div class="d-flex align-center justify-center mb-4">
      <h3>Saved Tickets</h3>
    </div>
    <div class="container__tickets">
      <div v-for="i in 6" :key="i">
        <div to="/physicalevent" class="container__card white--text">
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
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .container__tickets {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: stretch;
  }
}

.container__tickets > * {
  flex-basis: 32%;
  margin-bottom: 2em;
}

.container__card {
  display: flex;
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
  padding: 4em;
}

.icon__brand-color {
  color: var(--secondary);
}
</style>
