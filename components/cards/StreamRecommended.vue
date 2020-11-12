<template>
  <div class="container__card white--text">
    <svg
      class="overlay"
      viewBox="0 0 380 471"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect class="overlay" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="279.5"
          y1="460.5"
          x2="281.5"
          y2="-185"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.307292" stop-opacity="0.43" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>

    <div class="group-caption d-flex flex-column pl-4">
      <card-label>How to cook Afang Soup</card-label>
      <div class="d-flex align-center">
        <v-avatar class="avatar">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="" />
        </v-avatar>
        <small class="ml-4"> Amy Cooper </small>
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
  width: 200px;
  height: 300px;
  background-image: url('https://images.unsplash.com/photo-1602525968421-f9f9ed91b629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80');
  background-size: cover;
  border-radius: 5px;
  position: relative;

  .avatar {
    border: 1.4px solid var(--secondary);
  }

  .overlay {
    width: 100%;
    height: 100%;
    z-index: -2;
    position: absolute;
  }

  .group-caption {
    position: absolute;
    bottom: 3%;
    width: 100%;
  }
}
</style>
