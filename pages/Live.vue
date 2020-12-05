<template>
  <div class="container__live py-8">
    <!-- PREMIUM OVERLAY START -->
    <v-dialog v-model="showPaymentDialog" persistent width="500">
      <PremiumOverlay />
    </v-dialog>
    <!-- PREMIUM OVERLAY END -->
    <div class="live--video">
      <div class="container--avatar">
        <v-avatar>
          <img
            src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
            alt="avatar"
          />
        </v-avatar>
        <span>Cayla Cronin</span>
      </div>

      <div class="container--reaction">
        <span>
          <v-icon>mdi-heart-outline</v-icon>
          <small class="likes-count">12</small>
        </span>

        <span>
          <v-icon>mdi-eye</v-icon>
          <small>23</small>
        </span>
      </div>
      <v-icon class="btn--hearts">mdi-heart-outline</v-icon>
      <btn-primary class="end-live">END LIVE</btn-primary>
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
  </div>
</template>

<script>
import BtnLive from '~/components/legos/buttons/BtnLive'
import PremiumOverlay from '~/components/dialogs/PremiumOverlay'
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
export default {
  components: {
    BtnLive,
    PremiumOverlay,
    BtnPrimary,
  },
  data() {
    return {
      showPaymentDialog: true,
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
@media screen and (min-width: 800px) {
  .container__live {
    display: grid;
    grid-template-columns: 3fr 1.5fr;
    grid-template-rows: auto;
    padding: 2.5em;
    gap: 2em;
  }

  .end-live {
    position: absolute;
    bottom: -4em;
  }
}

@media screen and (max-width: 800px) {
  .container__live {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 400px auto;
    padding: 1em;
    gap: 20px;
  }

  .end-live {
    position: absolute;
    bottom: 2em;
    left: 2em;
  }
}
.container--reaction {
  position: absolute;
  top: 2em;
  right: 2em;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 15px 10px;

  > :nth-child(2) {
    margin-top: 1.3em;
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.btn--hearts {
  position: absolute;
  bottom: 1em;
  right: 2em;
}

.container--avatar {
  position: absolute;
  left: 2em;
  top: 2em;
}

.live--video {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1605241867746-ebccdaa3d8d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80');
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

  .commentor {
    opacity: 0.5;
  }
}
</style>
