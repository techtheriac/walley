<template>
  <div class="card--friend-request d-flex flex-column">
    <img
      class="avatar-friend"
      src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
      alt=""
      width="80px"
      height="80px"
    />
    <span class="friend-name font-weight-bold">Hilbert Langosh</span>
    <small class="profile-summmary">
      Content Creator. Teacher. Speaker. <br />
      Helping Creators find Clarity & community
    </small>
    <div class="btn--group">
      <btn-primary>Follow</btn-primary>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card--friend-request {
  font-size: 15px;
  background-color: var(--surface);
  padding: 1.2em;
  max-width: 19.5em;
  border-radius: 5px;
  > * + * {
    margin-top: 10px;
  }
  .avatar-friend {
    border-radius: 10px;
  }
}
</style>
