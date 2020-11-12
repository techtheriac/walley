<template>
  <div class="container__card white--text">
    <div class="wrapper-img">
      <div class="progress-bar"></div>
    </div>
    <div class="group--description">
      <card-label>How to start a business</card-label>
      <small>Abdulahi Adamu</small>
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
  grid-template-rows: 150px 50px;
  grid-template-columns: 300px;
  gap: 10px;
}

.wrapper-img {
  background-image: url('https://images.unsplash.com/photo-1605048197890-5ed92e67e95c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  position: relative;

  .progress-bar {
    width: 100%;
    height: 5px;
    border-radius: 2.5px;
    background-image: linear-gradient(
      to left,
      #222121 70%,
      var(--secondary) 30%
    );
    position: absolute;
    bottom: 0%;
  }
}
</style>
