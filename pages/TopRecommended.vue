<template>
  <div class="container__recommended px-12 py-12">
    <h3>Top Recommended Streams</h3>
    <div v-for="i in 4" :key="i">
      <div class="recommended__card mt-5 d-flex">
        <div class="wrapper--img mr-5"></div>
        <div class="description">
          <card-label>Making Money while you sleep</card-label>
          <small class="description--text"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            mollitia ab necessitatibus maiores consectetur cum animi, qui
            veritatis. Magnam voluptatum repellat sit autem neque?
          </small>
          <div class="avatar--group d-flex">
            <v-avatar class="avatar" size="30">
              <img
                src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
                alt=""
              />
            </v-avatar>
            <small class="ml-2"
              >Amy Sliverdon <br />
              <span>{{ lastSeenCount }}</span></small
            >
          </div>
          <div class="likes-count d-flex flex-center">
            <v-icon class="icon-resize">mdi-eye</v-icon>
            <small>{{ viewsCount }}</small>
            <v-icon class="icon-resize">mdi-heart</v-icon>
            <small>{{ likesCount }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardLabel from '~/components/legos/typography/CardLabel'
export default {
  components: {
    CardLabel,
  },
  data: () => ({
    likesCount: 11,
    viewsCount: 88,
    lastSeen: 2,
  }),
  computed: {
    lastSeenCount() {
      return this.lastSeen + ' hr ago'
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper--img {
  background-image: url('https://images.unsplash.com/photo-1503058474900-cb76710f9cd1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80');
  background-size: cover;
  width: 60%;
  height: 250px;
  border-radius: 10px;
}
.description {
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 20px;
  }

  .description--text {
    max-width: 33em;
  }
}
.avatar {
  border: 1.4px solid var(--secondary);
}
.likes-count {
  > * + * {
    margin-left: 6px;
  }
}
.icon-resize {
  font-size: 14px;
}
</style>
