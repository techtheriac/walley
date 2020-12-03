<template>
  <div class="container__profile px-12 py-8">
    <div class="profile--videos">
      <div v-for="i in 3" :key="i">
        <div class="streams">
          <div class="wrapper-stream"></div>

          <div class="details-stream pa-5">
            <div class="wrapper-social d-flex flex-row justify-space-between">
              <div class="tags">
                <span v-for="j in 3" :key="j">#Cooking</span>
              </div>
              <div class="reactions d-flex align-center">
                <v-icon>mdi-heart-outline</v-icon>
                <small>102</small>
                <v-icon>mdi-chat-outline</v-icon>
                <small>20</small>
                <v-icon>mdi-share</v-icon>
                <small>30</small>
              </div>
            </div>

            <div class="wrapper-details mt-3">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus
              </h3>
              <span class="d-flex align-end my-2">
                <v-icon style="font-size: 13px">mdi-eye</v-icon>
                <small class="ml-1">77</small>
              </span>
              <p>by Toby Jakande</p>
              <small>24/10/2020</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="profile--card d-flex flex-column pa-4">
      <div class="profile--info d-flex flex-column align-center">
        <v-avatar size="78">
          <img
            src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
            alt=""
          />
        </v-avatar>

        <b class="bold--text">Toby Kaimata</b>

        <div class="d-flex group--data">
          <div class="profile--data">
            <b>23</b>
            <small>Streams</small>
          </div>
          <div class="profile--data mx-4">
            <b>1203</b>
            <small>Followers</small>
          </div>
          <div class="profile--data">
            <b>29</b>
            <small>Following</small>
          </div>
        </div>

        <btn-large>Follow</btn-large>

        <div class="wrapper-about">
          <b>About me</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ut!
            Iure totam ea voluptate laboriosam molestiae omnis sequi! Itaque
            consectetur consequatur qui quod officia explicabo dolore,
            blanditiis nam obcaecati exercitationem?
          </p>
        </div>
      </div>

      <v-divider></v-divider>

      <div class="d-flex flex-column my-5">
        <b>Following users</b>
        <small style="color: var(--secondary)">Streaming</small>

        <div
          v-for="k in 4"
          :key="k"
          class="wrapper-streaming d-flex flex-row align-center mt-4"
        >
          <div class="d-flex mr-6">
            <v-avatar size="40">
              <img
                src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
                alt=""
              />
            </v-avatar>
            <p class="name mx-4" style="transform: translateY(8px)">
              Keanu Rogue
            </p>
          </div>
          <button class="btn-streaming">View</button>
        </div>
      </div>

      <v-divider></v-divider>

      <div class="d-flex flex-column my-5">
        <b>Recent Streams</b>

        <div
          v-for="j in 4"
          :key="j"
          class="wrapper-streaming d-flex flex-row align-center mt-4"
        >
          <div class="d-flex mr-6">
            <v-avatar size="40">
              <img
                src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
                alt=""
              />
            </v-avatar>
            <p class="name mx-4" style="transform: translateY(8px)">
              Keanu Rogue
            </p>
          </div>
          <button class="btn-streaming btn-streaming-alt">Watch</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnLarge from '~/components/legos/buttons/BtnLarge'
export default {
  BtnLarge,
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .container__profile {
    display: grid;
    gap: 2.5em;
    grid-template-columns: 3fr 1fr;
  }
}

.profile--videos {
  border-radius: 10px;
  > * + * {
    margin-top: 0.9em;
  }
  > div {
    width: 100%;
  }

  .streams {
    width: inherit;
    height: 500px;
    background-color: var(--surface);
    border-radius: 10px;

    .wrapper-stream {
      height: 64%;
      background-image: url('https://images.unsplash.com/photo-1606820920595-93727abac7e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
      background-size: cover;
      border-radius: 10px;
    }
  }
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

.reactions {
  > :not(small) {
    color: var(--secondary);
  }

  > * + * {
    margin-left: 8px;
  }
}

.wrapper-details {
  span {
    font-size: 12px;
  }

  p {
    font-size: 14px;
  }
}

.profile--card {
  background-color: var(--surface);
  border-radius: 10px;
  align-self: start;
}
.wrapper-about {
  p {
    font-size: 0.78rem;
    opacity: 0.65;
  }
}
.wrapper-streaming {
  .btn-streaming {
    color: var(--secondary);
    padding: 3px 15px;
    border: 1px solid var(--secondary);
    border-radius: 20px;
    font-size: 12px;
  }
  .btn-streaming-alt {
    color: #fff;
    border: 1px solid #fff;
  }
}
.profile--info {
  > * + * {
    margin-top: 0.9em;
  }
}
.profile--data {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
