<template>
  <div class="container__uploaded pa-12">
    <div class="d-flex flex-column">
      <h3 class="align-self-center">Uploaded Stream</h3>
    </div>
    <div class="wrapper-card mt-5">
      <div v-for="i in 10" :key="i" class="card-item">
        <div class="container__card white--text">
          <div class="group-caption d-flex flex-column pl-4">
            <card-label>How to cook Afang Soup</card-label>
            <div class="d-flex likes-count flex-row">
              <v-icon class="icon-reset">mdi-heart-outline</v-icon>
              <small>{{ likesCount }}</small>
              <v-icon class="icon-reset">mdi-chat-outline</v-icon>
              <small>{{ commentsCount }}</small>
            </div>
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
    likesCount: 13,
    commentsCount: 12,
  }),
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

  .icon-reset {
    font-size: 14px;
    color: var(--secondary);
  }

  .likes-count {
    > * + * {
      margin-left: 6px;
    }
  }
}

.wrapper-card {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2em;
}

/* .card-item {
  margin-top: ;
} */
</style>
