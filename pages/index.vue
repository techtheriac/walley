<template>
  <main class="container__main pl-12">
    <div class="group--slide">
      <LiveSlider />
    </div>

    <div class="group--slide">
      <div
        class="container__stream-label d-flex justify-space-between white--text align-baseline"
      >
        <h2>Continue Streaming</h2>

        <!-- <small>View all</small> -->
      </div>
      <ContinueSlider />
    </div>

    <div class="group--slide">
      <div
        class="container__stream-label d-flex justify-space-between white--text align-baseline"
      >
        <h2>Upcoming Streams</h2>
        <nuxt-link to="/upcomingstreams">
          <small class="mr-7">View all</small>
        </nuxt-link>
      </div>
      <UpcomingSlider />
    </div>

    <div class="group--slide">
      <div
        class="container__stream-label d-flex justify-space-between white--text align-baseline"
      >
        <h2>Top Recommended Streams</h2>

        <!-- <small>View all</small> -->
      </div>
      <RecommendedSlider />
    </div>

    <div class="group--slide">
      <div
        class="container__stream-label d-flex justify-space-between white--text align-baseline"
      >
        <h2>Discover Free Streams</h2>

        <!-- <small>View all</small> -->
      </div>
      <DiscoverSlider />
    </div>

    <div class="group--slide">
      <div
        class="container__stream-label d-flex justify-space-between white--text align-baseline"
      >
        <h2>On-Demand Streams</h2>

        <!-- <small>View all</small> -->
      </div>
      <OndemandSlider />
    </div>
  </main>
</template>

<script>
import RecommendedSlider from '~/components/RecommendedSlider'
import UpcomingSlider from '~/components/UpcomingSlider'
import DiscoverSlider from '~/components/DiscoverSlider'
import OndemandSlider from '~/components/OndemandSlider'
import ContinueSlider from '~/components/ContinueSlider'
import LiveSlider from '~/components/LiveSlider'
export default {
  components: {
    LiveSlider,
    RecommendedSlider,
    ContinueSlider,
    UpcomingSlider,
    DiscoverSlider,
    OndemandSlider,
  },
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
main {
  background-color: var(--background);
}

.container__main {
  padding-top: 3em;
  padding-bottom: 6em;
  > * + * {
    margin-top: 3em;
  }
}
.container__stream-label {
  padding-bottom: 2em;
  small {
    color: var(--secondary);
  }
}
</style>
