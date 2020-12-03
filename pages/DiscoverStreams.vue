<template>
  <div class="container__discover px-12 py-6">
    <slider-container>
      <small v-for="tag in hashTags" :key="tag" class="hashTags ml-3">
        {{ tag }}</small
      ></slider-container
    >

    <slider-container>
      <div v-for="i in 6" :key="i" class="ml-5">
        <div class="container__card white--text">
          <div class="group-caption d-flex flex-column pl-4">
            <card-label>How to cook Afang Soup</card-label>
            <div class="avatar--group d-flex flex-row align-center">
              <v-avatar class="avatar" size="30">
                <img
                  src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
                  alt=""
                />
              </v-avatar>
              <small class="ml-2">Amy Sliverdon</small>
            </div>
          </div>
        </div>
      </div>
    </slider-container>

    <h3>Popular Streams</h3>

    <slider-container>
      <div v-for="i in 6" :key="i" class="ml-5">
        <div class="container__card white--text popular">
          <div class="group-caption d-flex flex-column pl-4">
            <card-label>How to cook Afang Soup</card-label>
            <div class="avatar--group d-flex flex-row align-center">
              <v-avatar class="avatar" size="30">
                <img
                  src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
                  alt=""
                />
              </v-avatar>
              <small class="ml-2">Amy Sliverdon</small>
            </div>
          </div>
        </div>
      </div>
    </slider-container>

    <h3>Series Streams</h3>

    <slider-container>
      <div v-for="i in 6" :key="i" class="ml-4">
        <div class="card__series">
          <div class="avatar-group d-flex mb-2">
            <v-avatar class="avatar" size="40">
              <img
                src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
                alt=""
              />
            </v-avatar>
            <small>Tobi Makun</small>
          </div>

          <div class="series-group">
            <div class="serial"></div>
            <div class="serial"></div>
            <div class="serial"></div>
            <div class="serial"></div>
            <div class="serial"></div>
          </div>

          <small style="color: var(--secondary)">
            {{ hashTags[6] }} Series
          </small>

          <p class="description">
            Lose weight in 30 days - HIIT! <br />
            Home Workout
          </p>

          <div class="d-flex likes-count flex-row">
            <v-icon class="icon-reset">mdi-heart-outline</v-icon>
            <small>{{ series.likesCount }}</small>
            <v-icon class="icon-reset">mdi-chat-outline</v-icon>
            <small>{{ series.commentsCount }}</small>
          </div>
        </div>
      </div>
    </slider-container>
  </div>
</template>

<script>
import SliderContainer from '~/components/legos/SliderContainer'
export default {
  components: {
    SliderContainer,
  },
  data: () => ({
    tags: [
      'food',
      'business',
      'travel',
      'coding',
      'events',
      'entrepreneur',
      'fashion',
      'politics',
      'finance',
      'diy',
      'music',
      'beauty',
      'style',
      'music',
      'graphics',
      'architecture',
      'game',
      'arts',
    ],
    series: {
      likesCount: 33,
      commentsCount: 88,
    },
  }),
  computed: {
    hashTags() {
      return this.tags.map((tag) => {
        return '#' + tag.charAt(0).toUpperCase() + tag.slice(1)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container__discover {
  > * + * {
    margin-top: 1.2em;
  }
}
.hashTags {
  font-size: 0.95rem;
}

.container__card {
  width: 200px;
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1602525968421-f9f9ed91b629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80');
  background-size: cover;
  border-radius: 5px;
  position: relative;

  .avatar {
    border: 1.4px solid var(--secondary);
  }
}

.card__series {
  background-color: var(--surface);
  padding: 1em;
  border-radius: 10px;

  .series-group {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(2, 50px);
    grid-template-areas: 'a a b c' 'a a d e';
    gap: 10px;

    > :nth-child(1) {
      grid-area: a;
    }

    > :nth-child(2) {
      grid-area: b;
    }
    > :nth-child(3) {
      grid-area: c;
    }

    > :nth-child(4) {
      grid-area: d;
    }

    > :nth-child(5) {
      grid-area: e;
    }
  }

  .description {
    font-weight: bold;
    opacity: 0.6;
  }

  .serial {
    background-image: url('https://images.unsplash.com/photo-1602525968421-f9f9ed91b629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80');
    background-size: cover;
    border-radius: 5px;
  }
}

.popular {
  width: 240px;
  height: 320px;
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
</style>
