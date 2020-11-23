<template>
  <div class="container__card white--text">
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
  background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1602525968421-f9f9ed91b629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80');
  background-size: cover;
  border-radius: 5px;
  position: relative;

  .avatar {
    border: 1.4px solid var(--secondary);
  }

  .group-caption {
    position: absolute;
    bottom: 3%;
    width: 100%;
  }
}
</style>
