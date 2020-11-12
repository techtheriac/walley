<template>
  <div class="white--text d-flex flex-column align-center">
    <div class="container__avatar d-flex justify-center align-center">
      <img
        class="avatar"
        src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
        alt=""
        width="80px"
        height="80px"
      />
    </div>
    <BtnLive class="displace-up" />
    <small class="">Clay Hassan</small>
  </div>
</template>

<script>
import BtnLive from '~/components/legos/buttons/BtnLive'
export default {
  components: {
    BtnLive,
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
}
.container__avatar {
  border: 2px solid var(--secondary);
  width: 90px;
  height: 90px;
  padding: 5px;
  border-radius: 50%;
}

.displace-up {
  transform: translateY(-10px);
}
</style>
