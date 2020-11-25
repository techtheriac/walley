<template>
  <div style="background-color: var(--background)" class="container__upload">
    <ContentUpload />
  </div>
</template>

<script>
import ContentUpload from '~/components/forms/ContentUpload'
export default {
  ContentUpload,
  layout: 'baseNav',
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .container__upload {
    padding: 5em 20em;
  }
}
</style>
