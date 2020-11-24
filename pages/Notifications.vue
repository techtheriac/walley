<template>
  <div class="container__notification">
    <div
      class="card--notification d-flex flex-column align-center justify-center"
    >
      <p>Notifications</p>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        officiis iure ullam dolor omnis sapiente qui, simili
      </small>

      <p class="mt-3" style="color: var(--secondary)">View Settings</p>
    </div>

    <div class="list--notification px-8">
      <div v-for="i in 11" :key="i">
        <div class="notification d-flex align-center py-4">
          <div class="wrapper">
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <b>Jimmy Fallon</b>
            <small>followed you</small>
            <button class="btn__follow">Follow</button>
          </div>
          <v-spacer></v-spacer>
          <div class="timestamp">
            <v-icon>mdi-clock-time-four-outline</v-icon>
            <span>12, Nov 2020 at 9:30 AM</span>
          </div>
        </div>
        <v-divider></v-divider>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container__notification {
  display: grid;
  grid-template-columns: 300px auto;
  gap: 1em;
  padding: 2em;
}

.card--notification {
  background-color: var(--surface);
  padding: 1em 2em;
  min-width: 300px;
  border-radius: 5px;
  height: 200px;
}

.list--notification {
  background-color: var(--surface);
  border-radius: 10px;
}

.btn__follow {
  background: transparent linear-gradient(270deg, #ff7597 0%, #ff0266 100%) 0%
    0% no-repeat padding-box;
  border-radius: 30px;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 20px;
  outline: none;
  width: 80px;
}

.timestamp {
  span {
    font-size: 12px;
    opacity: 0.5;
  }
}

.wrapper {
  > * + * {
    margin-left: 7px;
  }
}
</style>
