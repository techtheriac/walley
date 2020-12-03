<template>
  <main class="container__live">
    <div class="live--video d-flex flex-column align-center px-5">
      <div v-if="live">
        <div>
          <v-avatar>
            <img
              src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
              alt="avatar"
            />
          </v-avatar>
          <span>Cayla Cronin</span>
        </div>
      </div>
      <div class="d-flex flex-column align-center">
        <div class="overlay">
          <img
            src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
            alt=""
            width="45px"
            height="45px"
          />
          <div>
            <small>You are about to go live on</small>
            <h4>How to cook with Toby Kulhman</h4>
          </div>
        </div>
        <btn-large @click="toggleLive">START LIVE BROADCAST</btn-large>
      </div>
    </div>

    <div class="container__comments">
      <BtnLive />
      <div class="mt-4">
        <h4 class="stream--title">How To Cook with Toby Kulhman</h4>
        <small>With Cyla Corndick</small>
        <p class="stream--description">
          Cooking or cookery is an art or science of interdenominatory division
          in the highest realm of division. Cooking techniques are for the
          triabl chasms of life.
        </p>

        <div v-for="i in 4" :key="i">
          <div class="comment--bubble d-flex">
            <v-avatar size="35">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <div class="d-flex flex-column ml-3">
              <span class="commentor"> Jacob Lamont </span>
              <span class="comment">I want to do this again</span>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-row align-center">
        <v-text-field
          class="mr-4"
          dark
          placeholder="Say Something..."
          background-color="#424242"
          filled
          rounded
          dense
        ></v-text-field>
        <span style="transform: translateY(-15px)">
          <v-icon style="transform: rotate(-45deg)">mdi-send</v-icon>
          <v-icon class="ml-3" style="color: var(--primary)"
            >mdi-share-variant</v-icon
          >
        </span>
      </div>
    </div>
  </main>
</template>

<script>
import BtnLive from '~/components/legos/buttons/BtnLive'
import BtnLarge from '~/components/legos/buttons/BtnLarge'
export default {
  components: {
    BtnLive,
    BtnLarge,
  },
  data() {
    return {
      live: false,
    }
  },
  methods: {
    toggleLive() {
      this.live = !this.live
    },
  },
  layout: 'baseNav',
}
</script>

<style lang="scss" scoped>
.container__live {
  display: grid;
  grid-template-columns: auto 400px;
  padding: 2.5em;
  gap: 2em;
}

.overlay {
  backdrop-filter: blur(9px);
  width: 300px;
  color: #000;
  border-radius: 10px;
  display: flex;
  padding: 1em 0.7em;
  margin-bottom: 85%;
  margin-top: 3em;

  > * + * {
    padding-left: 1em;
  }
  small,
  h4 {
    opacity: 0.7;
  }
}

.live--video {
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1605241867746-ebccdaa3d8d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80');
  background-size: cover;
}

.container__comments {
  background-color: var(--surface);
  padding: 1.5em;
}

.stream--description {
  font-size: 12px;
}

.comment--bubble {
  background-color: #000;
  border-radius: 25px;
  padding: 5px;
  font-size: 13px;
  max-width: 30ch;
  margin-bottom: 10px;
  /* min-width: 25ch; */

  .commentor {
    opacity: 0.5;
  }
}
</style>
