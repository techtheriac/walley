<template>
  <div class="container__card white--text">
    <div class="wrapper-img">
      <svg
        class="overlay"
        viewBox="0 0 545 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect class="overlay" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="400.862"
            y1="273.758"
            x2="401.355"
            y2="-109.982"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.307292" stop-opacity="0.43" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div class="d-flex align-center group--avatar">
        <v-avatar class="avatar">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="" />
        </v-avatar>
        <small class="ml-4"> Amy Cooper </small>
      </div>
    </div>
    <div class="container__description">
      <div class="group--hashtags mb-4">
        <small>#Business</small>
        <small>#Money</small>
      </div>

      <card-label>make money while you sleep</card-label>

      <p class="description mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        voluptates modi quam atque alias! Voluptas architecto obcaecati,
        repudiandae molestiae nostrum vitae error maiores
      </p>

      <div class="group--actions">
        <span>
          <v-icon class="icon">mdi-heart-outline</v-icon>
          <small class="white--text">103</small>
        </span>

        <span class="ml-4">
          <v-icon class="icon">mdi-chat-outline</v-icon>
          <small class="white--text">103</small>
        </span>
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
}
</script>

<style lang="scss" scoped>
.container__card {
  display: grid;
  grid-template-rows: 175px 270px;
  grid-template-columns: 300px;
  border-radius: 5px;
}

.avatar {
  border: 1.4px solid var(--secondary);
}

.group--avatar {
  position: absolute;
  bottom: calc(2% + 0.5em);
  margin-left: 1.5em;
}

.container__description {
  padding: 1.5em;
  background-color: #1b1b1b;
  border-radius: 5px;

  .group--hashtags {
    color: var(--secondary);
  }

  P {
    font-size: 0.85rem;
  }
}

.wrapper-img {
  background-image: url('https://images.unsplash.com/photo-1604945423506-79b3f714707e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1434&q=80');
  background-size: cover;
  position: relative;
}

.group--actions {
  .icon {
    color: var(--secondary);
  }
}
.overlay {
  width: 100%;
  height: 100%;
  z-index: -2;
  position: absolute;
}
</style>
